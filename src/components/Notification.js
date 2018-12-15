import React from 'react'

class Notification extends React.Component {
  render() {
    const style = {
      border: 'solid',
      padding: 10,
      borderWidth: 1
    }
    const notification = this.props.store.getState().notification
    const content = notification ? <div style={style}> {notification} </div> : null
    return(content)
  }
}

export default Notification
