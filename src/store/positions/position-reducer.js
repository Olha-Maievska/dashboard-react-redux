import { ADD_POSITIONS } from "./position-action";

export const positionReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_POSITIONS: {
      return action.positions
    }
  
    default:
      return state
  }
}