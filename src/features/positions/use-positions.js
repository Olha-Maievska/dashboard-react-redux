import { useSelector } from "react-redux";
import { selectVisiblPositions } from './positions-slice'
import {selectFilters} from '../filters/filters-slice'


export const usePositions = () => {
  const currentFilters = useSelector(selectFilters)
  const positions = useSelector((state) =>
    selectVisiblPositions(state, currentFilters)
  )

  return positions
}