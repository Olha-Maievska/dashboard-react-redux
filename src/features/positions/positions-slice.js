import {createSlice} from '@reduxjs/toolkit';

const positionSlice = createSlice({
  name: '@@position',
  initialState: [], 
  reducers: {
    addPositions: (_, action) => action.payload
  }
})

export const { addPositions } = positionSlice.actions
export const positionReducer = positionSlice.reducer

export const selectVisiblPositions = (state, filters = []) => {
  if (filters.length === 0) return state.positions

  return state.positions.filter(pos => {
    const posFilter = [].concat(pos.role, pos.level, ...pos.languages, ...pos.tools)

    return filters.every(filter => posFilter.includes(filter))
  })
}