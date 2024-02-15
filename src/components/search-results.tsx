import EventCard from './event-card'
import {
  FaRegArrowAltCircleRight,
  FaRegArrowAltCircleLeft,
} from 'react-icons/fa'

function SearchResults({ data, onChangePage, currentPage }: any) {
  function evenElements(events: any): any {
    return events.filter((_: any, index: any) => index % 2 === 0)
  }
  function oddElements(events: any): any {
    return events.filter((_: any, index: any) => index % 2 !== 0)
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-y-8 search-results">
        <div className="evenElements flex gap-x-8 w-full justify-around">
          {evenElements(data).map((item: any, index: any) => (
            <EventCard event={item} key={index} direction="down"></EventCard>
          ))}
        </div>

        <div className="time-line"></div>

        <div className="oddElements flex gap-x-8 w-full justify-around">
          {oddElements(data).map((item: any, index: any) => (
            <EventCard event={item} key={index} direction="up"></EventCard>
          ))}
        </div>
      </div>
      <div className="flex w-full justify-center gap-x-4">
        <FaRegArrowAltCircleLeft
          size={32}
          data-testid="left-arrow"
          color={currentPage === 1 ? '#000' : '#C1BDBD'}
          className={currentPage === 1 ? 'cursor-pointer' : ''}
          onClick={currentPage === 1 ? onChangePage : null}
        />

        <FaRegArrowAltCircleRight
          size={32}
          data-testid="right-arrow"
          color={currentPage === 0 ? '#000' : '#C1BDBD'}
          className={currentPage === 0 ? 'cursor-pointer' : ''}
          onClick={currentPage === 0 ? onChangePage : null}
        />
      </div>
    </>
  )
}

export default SearchResults
