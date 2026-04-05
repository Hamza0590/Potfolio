import { FC } from 'react'

interface PageLoaderProps {
  isLoading: boolean
}

const PageLoader: FC<PageLoaderProps> = ({ isLoading }) => {
  return (
    <div className={`page-loader ${!isLoading ? 'fade-out' : ''}`}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default PageLoader
