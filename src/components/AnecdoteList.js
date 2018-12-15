import React from 'react'
import { connect } from 'react-redux'
import { anecdoteVote } from './../reducers/anecdoteReducer'
import { notificationClear, notificationSet } from './../reducers/notificationReducer'
import Filter from './Filter'

class AnecdoteList extends React.Component {

  voteAnecdote = ({ content, id }) => () => {
    const {
      anecdoteVote,
      notificationClear,
      notificationSet
    } = this.props

    anecdoteVote(id)
    notificationSet(`you voted '${content}'`)

    setTimeout(() => notificationClear(), 5000)
  }

  render() {

    return (
      <div>
        <h2>Anecdotes</h2>
        <Filter />
        {this.props.visibleAnecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
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

const anecdotesToShow = (anecdotes, filter) => {
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

const mapStateToProps = state => {
  return {
    visibleAnecdotes: anecdotesToShow(state.anecdotes, state.filter)
  }
}

export default connect(
  mapStateToProps,
  { anecdoteVote, notificationClear, notificationSet }
)(AnecdoteList)