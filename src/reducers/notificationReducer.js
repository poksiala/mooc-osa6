
const notificationReducer = (state = null, action) => {
  switch (action.type) {
  case 'SET_NOTIFICATION':
    return action.notification
  case 'CLEAR_NOTIFICATION':
    return null
  default:
    return state
  }
}

export const notificationSet = notification => {
  return {
    type: 'SET_NOTIFICATION',
    notification
  }
}

export const notificationClear = () => {
  return {
    type: 'CLEAR_NOTIFICATION'
  }
}

export const notify = (notification, seconds) => {
  return (dispatch) => {
    dispatch(notificationSet(notification))
    setTimeout(() => dispatch(notificationClear()), seconds * 1000)
  }
}
export default notificationReducer