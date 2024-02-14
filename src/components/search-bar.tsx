import { useState } from 'react'

function SearchBar({ onSearch }: any) {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (event: any) => {
    setSearchTerm(event.target.value)
    if (onSearch) {
      onSearch(searchTerm)
    }
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  )
}

export default SearchBar
