import SearchBar from './search-bar'
import SearchResults from './search-results'
import { useState } from 'react'
import { fetchData } from '../apiService'

function ResearchScreen() {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentPage, setCurrentPage] = useState(0)
  const [searchText, setSearchText] = useState('')

  async function fetchDataAsync() {
    try {
      setIsLoading(true)
      const result = await fetchData(searchText)
      setData(orderEventsByDate(result))
    } finally {
      setIsLoading(false)
    }
  }

  function orderEventsByDate(events: any): any {
    return events
      .slice()
      .sort((a: any, b: any) => parseInt(a.year) - parseInt(b.year))
  }

  function sliceIn5elementsArray(events: any): any {
    if (currentPage === 0) {
      return events.slice(0, 5)
    } else if (currentPage > 0) {
      return events.slice(5 * currentPage, 5 * currentPage + 5)
    }
  }

  function onSearch(value: any) {
    setSearchText(value)
    fetchDataAsync()
  }

  function onChangePage() {
    if (currentPage === 0) {
      setCurrentPage(1)
    } else {
      setCurrentPage(0)
    }
  }

  return (
    <div className="h-full search-screen flex flex-col justify-center gap-y-8 py-8">
      <h2>Search historical events</h2>
      <SearchBar onSearch={onSearch}></SearchBar>
      {data && (
        <SearchResults
          currentPage={currentPage}
          onChangePage={onChangePage}
          data={sliceIn5elementsArray(data)}
        />
      )}
      {isLoading && <div>loadiiiiing</div>}
    </div>
  )
}

export default ResearchScreen
