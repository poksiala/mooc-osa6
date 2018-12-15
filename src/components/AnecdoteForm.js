import React from 'react'
import { anecdoteCreate } from './../reducers/anecdoteReducer'
import { notificationClear, notificationSet } from './../reducers/notificationReducer'
import { connect } from 'react-redux'

class AnecdoteForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    const {
      anecdoteCreate,
      notificationSet,
      notificationClear
    } = this.props

    anecdoteCreate(content)
    notificationSet(`You created anecdote '${content}'`)
    setTimeout(() => notificationClear(), 5000)
    e.target.anecdote.value = ''
  }
  render() {
    return (
      <div>
        <h2>create new</h2>
        <form onSubmit={this.handleSubmit}>
          <div><input name='anecdote'/></div>
          <button>create</button>
        </form>
      </div>
    )
  }
}

export default connect(
  null,
  { notificationClear, notificationSet, anecdoteCreate }
)(AnecdoteForm)
