import React from 'react'
import { anecdoteVote } from './../reducers/anecdoteReducer'
import { notificationClear, notificationSet } from './../reducers/notificationReducer'
import Filter from './Filter'
class AnecdoteList extends React.Component {

  voteAnecdote = ({ content, id }) => () => {
    const { store } = this.props
    store.dispatch(
      anecdoteVote(id)
    )
    store.dispatch(
      notificationSet(`you voted '${content}'`)
    )
    setTimeout(() => store.dispatch(notificationClear()), 5000)
  }

  render() {
    const anecdotesToShow = () => {
      const { anecdotes, filter } = this.props.store.getState()
      return (
        anecdotes.filter(a =>
          a.content
            .toLowerCase()
            .includes(
              filter.toLowerCase()
            )
        )
      )
    }

    return (
      <div>
        <h2>Anecdotes</h2>
        <Filter store={this.props.store} />
        {anecdotesToShow().sort((a, b) => b.votes - a.votes).map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={this.voteAnecdote(anecdote)}>
                vote
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default AnecdoteList
