import { useDispatch } from 'react-redux'

import { JobPosition } from './JobPosition'
import { addFilter } from '../filters/filters-slice'
import { usePositions } from './use-positions'
import { useFetchPositions } from './use-fetch-positions'

const JobList = () => {
  useFetchPositions()
  const positions = usePositions()
  const dispatch = useDispatch()

  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter))
  }

  return (
    <div className="job-list">
      {positions.map((item) => (
        <JobPosition
          key={item.id}
          {...item}
          handleAddFilter={handleAddFilter}
        />
      ))}
    </div>
  )
}

export { JobList }
