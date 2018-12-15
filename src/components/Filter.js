import React from 'react'
import { filterSet } from './../reducers/filterReducer'

class Filter extends React.Component {

  handleChange = (event) => {
    const value = event.target.value
    this.props.store.dispatch(filterSet(value))
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

export default Filter