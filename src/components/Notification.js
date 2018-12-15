import React from 'react'
import { connect } from 'react-redux'

const Notification = ({ notification }) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  const content = notification ? <div style={style}> {notification} </div> : null
  return(content)
}

const mapStateToProps = state => {
  return {
    notification: state.notification
  }
}

export default connect(
  mapStateToProps
)(Notification)
