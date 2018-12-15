import React from 'react'
import { anecdoteCreate } from './../reducers/anecdoteReducer'
import { notificationClear, notificationSet } from './../reducers/notificationReducer'
import { connect } from 'react-redux'
import anecdoteService from './../services/anecdotes'

class AnecdoteForm extends React.Component {
  handleSubmit = async (e) => {
    e.preventDefault()
    const {
      anecdoteCreate,
      notificationSet,
      notificationClear
    } = this.props

    const content = e.target.anecdote.value
    e.target.anecdote.value = ''
    const newAnecdote = await anecdoteService.create(content)

    anecdoteCreate(newAnecdote)
    notificationSet(`You created anecdote '${content}'`)
    setTimeout(() => notificationClear(), 5000)
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
