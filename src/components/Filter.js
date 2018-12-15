import React from 'react'
import { connect } from 'react-redux'
import { filterSet } from './../reducers/filterReducer'

class Filter extends React.Component {

  handleChange = (event) => {
    const value = event.target.value
    this.props.filterSet(value)
  }

  render() {
    const style = {
      marginBottom: 10
    }

    return (
      <div style={style}>
        filter <input onChange={this.handleChange}/>
      </div>
    )
  }
}

export default connect(
  null,
  { filterSet }
)(Filter)