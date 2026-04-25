/* ================================================
   PORTFOLIO SECTION — GitHub Starred Repos
   All-in-one: hook + card + section
   ================================================ */

import { useState, useEffect, useCallback, useRef, FC } from 'react'
import './Portfolio.css'

/* ── Types ── */
interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  language: string | null
  topics: string[]
  stargazers_count: number
  forks_count: number
}

interface FetchError {
  type: 'rate_limit' | 'fetch_error'
  message: string
}

/* ── GitHub language colours (official palette) ── */




function formatName(name: string) {
  return name
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
}

/* ── Lightweight useInView (no external dep) ── */
function useInView<T extends Element = Element>(
  options?: IntersectionObserverInit & { triggerOnce?: boolean }
) {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        if (options?.triggerOnce) observer.disconnect()
      } else if (!options?.triggerOnce) {
        setInView(false)
      }
    }, { threshold: options?.threshold ?? 0.12 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [options?.threshold, options?.triggerOnce])

  return { ref, inView }
}

/* ── useGitHubStarred hook ── */
function useGitHubStarred() {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<FetchError | null>(null)

  const fetchRepos = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch('https://api.github.com/users/Hamza0590/starred', {
        headers: { Accept: 'application/vnd.github.mercy-preview+json' },
      })
      if (!response.ok) {
        if (response.status === 403) {
          throw { type: 'rate_limit' as const, message: 'GitHub API rate limit exceeded. Showing cached results.' }
        }
        throw { type: 'fetch_error' as const, message: 'Failed to fetch repositories. Please try again.' }
      }
      const data: GitHubRepo[] = await response.json()
      // Ensure topics array always exists
      setRepos(data.map(r => ({ ...r, topics: r.topics ?? [] })))
    } catch (err: any) {
      setError(err as FetchError)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => { fetchRepos() }, [fetchRepos])

  return { repos, loading, error, retry: fetchRepos }
}

/* ── Skeleton card ── */
function ProjectCardSkeleton() {
  return (
    <div className="project-card project-card--skeleton" aria-hidden="true">
      <div className="project-card__header">
        <div className="skel skel--title" />
        <div className="skel skel--badge" />
      </div>
      <div className="skel skel--line" />
      <div className="skel skel--line skel--short" />
      <div className="project-card__topics">
        <div className="skel skel--pill" />
        <div className="skel skel--pill" />
        <div className="skel skel--pill skel--short" />
      </div>
      <div className="project-card__actions">
        <div className="skel skel--btn" />
        <div className="skel skel--btn" />
      </div>
    </div>
  )
}

/* ── Single project card ── */
function ProjectCard({ repo, index }: { repo: GitHubRepo; index: number }) {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.12, triggerOnce: true })
  const displayName = formatName(repo.name)
  const delay       = (index % 6) * 80

  return (
    <article
      ref={ref}
      className={`project-card${inView ? ' project-card--visible' : ''}`}
      style={{ animationDelay: `${delay}ms` }}
      aria-labelledby={`proj-name-${repo.id}`}
    >
      {/* Header: name */}
      <div className="project-card__header">
        <h3 className="project-card__name" id={`proj-name-${repo.id}`}>
          {displayName}
        </h3>
      </div>

      {/* Description */}
      <p className="project-card__desc">
        {repo.description || 'No description provided.'}
      </p>

      {/* Topics */}
      {repo.topics.length > 0 && (
        <ul className="project-card__topics" aria-label="Topics">
          {repo.topics.slice(0, 5).map((t) => (
            <li key={t} className="project-card__topic">{t}</li>
          ))}
        </ul>
      )}

      {/* Stats */}
      <div className="project-card__stats">
        <span className="project-card__stat" title="Stars">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
          {repo.stargazers_count}
        </span>
        <span className="project-card__stat" title="Forks">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M6 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm0 14a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm12-14a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM6 8a2 2 0 0 0 0 4h4v2a2 2 0 0 0 4 0v-2h2a2 2 0 0 0 0-4H6z"/>
          </svg>
          {repo.forks_count}
        </span>
      </div>

      <div className="project-card__spacer" />

      {/* CTA buttons */}
      <div className="project-card__actions">
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card__btn project-card__btn--outline"
          aria-label={`View source code for ${displayName}`}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          View Code
        </a>

        {repo.homepage && (
          <a
            href={repo.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__btn project-card__btn--primary"
            aria-label={`Live demo for ${displayName}`}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            Live Demo
          </a>
        )}
      </div>
    </article>
  )
}

/* ── State sub-components ── */
function LoadingState() {
  return (
    <div className="projects__grid" aria-busy="true" aria-label="Loading projects">
      {Array.from({ length: 6 }).map((_, i) => (
        <ProjectCardSkeleton key={i} />
      ))}
    </div>
  )
}

function ErrorState({ message, onRetry }: { message: string; onRetry: () => void }) {
  return (
    <div className="projects__state projects__state--error" role="alert">
      <div className="projects__state-icon" aria-hidden="true">⚠️</div>
      <p className="projects__state-title">Couldn't load projects</p>
      <p className="projects__state-msg">{message}</p>
      <button className="projects__retry-btn" onClick={onRetry} aria-label="Retry loading projects">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="23 4 23 10 17 10"/>
          <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
        </svg>
        Try Again
      </button>
    </div>
  )
}

function EmptyState() {
  return (
    <div className="projects__state projects__state--empty">
      <div className="projects__state-icon" aria-hidden="true">🌟</div>
      <p className="projects__state-title">No starred repos yet</p>
      <p className="projects__state-msg">Star repositories on GitHub to see them showcased here.</p>
      <a
        href="https://github.com/Hamza0590"
        target="_blank"
        rel="noopener noreferrer"
        className="projects__retry-btn"
      >
        Visit GitHub Profile
      </a>
    </div>
  )
}

function RateLimitBanner({ message }: { message: string }) {
  return (
    <div className="projects__rate-banner" role="status">
      <span aria-hidden="true">⏳</span> {message}
    </div>
  )
}

/* ================================================
   MAIN PORTFOLIO SECTION COMPONENT
   ================================================ */
interface PortfolioProps {
  isActive: boolean
}

const Portfolio: FC<PortfolioProps> = ({ isActive }) => {
  const { repos, loading, error, retry } = useGitHubStarred()
  const [showAll, setShowAll] = useState(false)

  const { ref: headerRef, inView: headerVisible } = useInView<HTMLDivElement>({ threshold: 0.2, triggerOnce: true })

  const hasRepos    = repos.length > 0
  const isRateLimit = error?.type === 'rate_limit'

  const INITIAL_COUNT = 6
  const visibleRepos  = showAll ? repos : repos.slice(0, INITIAL_COUNT)
  const hasMore       = repos.length > INITIAL_COUNT
  const hiddenCount   = repos.length - INITIAL_COUNT

  return (
    <section
      className={`portfolio-section projects${isActive ? ' active' : ''}`}
      id="portfolio"
      aria-labelledby="projects-title"
    >
      <div className="projects__container">
        {/* Section header */}
        <div
          ref={headerRef}
          className={`row projects__reveal${headerVisible ? ' visible' : ''}`}
        >
          <div className="section-title">
            <h2 id="projects-title">Recent Work</h2>
          </div>
        </div>

        {/* Rate-limit soft banner (shown only when repos are already cached) */}
        {isRateLimit && hasRepos && <RateLimitBanner message={error!.message} />}

        {/* Content states */}
        {loading && <LoadingState />}

        {!loading && !isRateLimit && error && (
          <ErrorState message={error.message} onRetry={retry} />
        )}

        {!loading && isRateLimit && !hasRepos && (
          <ErrorState message={error!.message} onRetry={retry} />
        )}

        {!loading && !error && !hasRepos && <EmptyState />}

        {!loading && hasRepos && (
          <>
            <div
              id="projects-grid"
              className="projects__grid"
              role="list"
              aria-label="Project cards"
            >
              {visibleRepos.map((repo, i) => (
                <ProjectCard key={repo.id} repo={repo} index={i} />
              ))}
            </div>

            {/* Show More / Show Less */}
            {hasMore && (
              <div className="projects__show-more-wrap">
                {!showAll && <div className="projects__fade-veil" aria-hidden="true" />}

                <button
                  className={`projects__show-more-btn${showAll ? ' projects__show-more-btn--less' : ''}`}
                  onClick={() => setShowAll((prev) => !prev)}
                  aria-expanded={showAll}
                  aria-controls="projects-grid"
                >
                  {showAll ? (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="18 15 12 9 6 15"/>
                      </svg>
                      Show Less
                    </>
                  ) : (
                    <>
                      Show More
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="6 9 12 15 18 9"/>
                      </svg>
                      <span className="projects__show-more-count">+{hiddenCount}</span>
                    </>
                  )}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  )
}

export default Portfolio
