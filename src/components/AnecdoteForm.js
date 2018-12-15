import React from 'react'
import { anecdoteCreate } from './../reducers/anecdoteReducer'
import { notify } from './../reducers/notificationReducer'
import { connect } from 'react-redux'

class AnecdoteForm extends React.Component {
  handleSubmit = async (e) => {
    e.preventDefault()
    const { anecdoteCreate, notify } = this.props

    const content = e.target.anecdote.value
    e.target.anecdote.value = ''
    anecdoteCreate(content)
    notify(`You created anecdote '${content}'`, 3)
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
  { notify, anecdoteCreate }
)(AnecdoteForm)
