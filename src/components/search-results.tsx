function SearchResults({ data }: any) {
  return (
    <div>
      {data.map((item: any, index: any) => (
        <div key={index}>{item.event}</div>
      ))}
    </div>
  )
}

export default SearchResults
