const filterReducer = (state = '', action) => {
  switch (action.type) {
  case 'SET_FILTER':
    return action.filter
  default:
    return state
  }
}

export const filterSet = filter => {
  return {
    type: 'SET_FILTER',
    filter: filter ? filter : ''
  }
}

export default filterReducer