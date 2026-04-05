export interface PortfolioItem {
  id: number
  title: string
  image: string
  description: string
  technologies: string
  role: string
  link: string
  created: string
}

export interface TimelineItem {
  date: string
  title: string
  institution?: string
  company?: string
  description: string
}
