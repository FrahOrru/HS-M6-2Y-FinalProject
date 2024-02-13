import SearchBar from './search-bar'
import SearchResults from './search-results'
import { useEffect, useState } from 'react'
import { fetchData } from '../apiService'

function ResearchScreen() {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchDataAsync() {
      try {
        const result = await fetchData('Roman Empire')
        setData(result)
      } catch (error: any) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchDataAsync()
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {(error as Error).message}</div>
  }

  return (
    <div className="h-screen search-screen flex flex-col justify-center gap-y-8">
      <h2>Search historical events</h2>
      <SearchBar></SearchBar>
      <SearchResults data={data}></SearchResults>
    </div>
  )
}

export default ResearchScreen
