import { useState, useEffect, useCallback } from 'react';

export default function useGitHubStarred() {
  const [repos, setRepos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  const fetchRepos = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://api.github.com/users/Hamza0590/starred');
      if (!response.ok) {
        if (response.status === 403) {
          throw { type: 'rate_limit', message: 'GitHub API rate limit exceeded.' };
        }
        throw { type: 'fetch_error', message: 'Failed to fetch repositories.' };
      }
      const data = await response.json();
      setRepos(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);

  return { repos, loading, error, retry: fetchRepos };
}
