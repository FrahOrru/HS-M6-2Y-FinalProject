import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { fireEvent } from '@testing-library/react'
import SearchResults from '../components/search-results'
const mockData = [
  {
    year: -45,
    month: '01',
    day: '01',
    event:
      'The Julian calendar takes effect as the civil calendar of the Roman Empire, establishing January 1 as the new date of the new year.',
  },
  {
    year: -45,
    month: '01',
    day: '01',
    event:
      'The Julian calendar takes effect as the civil calendar of the Roman Empire, establishing January 1 as the new date of the new year.',
  },
  {
    year: -45,
    month: '01',
    day: '01',
    event:
      'The Julian calendar takes effect as the civil calendar of the Roman Empire, establishing January 1 as the new date of the new year.',
  },
]
describe('SearchResults Component', () => {
  it('renders with provided data and current page', () => {
    const { getByTestId } = render(
      <SearchResults data={mockData} currentPage={1} />,
    )

    expect(getByTestId('left-arrow')).toBeInTheDocument()
    expect(getByTestId('right-arrow')).toBeInTheDocument()
  })

  it('disables left arrow when on first page', () => {
    const onChangePage = jest.fn()
    const { getByTestId } = render(
      <SearchResults
        data={mockData}
        currentPage={1}
        onChangePage={onChangePage}
      />,
    )

    const rightArrow = getByTestId('right-arrow')
    fireEvent.click(rightArrow)
    expect(onChangePage).not.toHaveBeenCalled()
  })

  it('disables right arrow when on last page', () => {
    const onChangePage = jest.fn()
    const { getByTestId } = render(
      <SearchResults
        data={mockData}
        currentPage={0}
        onChangePage={onChangePage}
      />,
    )

    const leftArrow = getByTestId('left-arrow')
    fireEvent.click(leftArrow)
    expect(onChangePage).not.toHaveBeenCalled()
  })

  it('calls onChangePage when clicking left or right arrow', () => {
    const onChangePage = jest.fn()
    const { getByTestId } = render(
      <SearchResults
        data={mockData}
        currentPage={1}
        onChangePage={onChangePage}
      />,
    )

    const leftArrow = getByTestId('left-arrow')
    const rightArrow = getByTestId('right-arrow')

    fireEvent.click(leftArrow)
    fireEvent.click(rightArrow)

    expect(onChangePage).toHaveBeenCalledTimes(1)
  })
})
