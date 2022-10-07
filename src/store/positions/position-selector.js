export const selectAllPositions = (state) => state.positions

export const selectVisiblPositions = (state, filters = []) => {
  if (filters.length === 0) return state.positions

  return state.positions.filter(pos => {
    const posFilter = [].concat(pos.role, pos.level, ...pos.languages, ...pos.tools)

    return filters.every(filter => posFilter.includes(filter))
  })
}