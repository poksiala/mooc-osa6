import anecdoteService from './../services/anecdotes'

const reducer = (store = [], action) => {
  if (action.type==='VOTE') {
    const old = store.filter(a => a.id !==action.id)
    const voted = store.find(a => a.id === action.id)
    return [...old, { ...voted, votes: voted.votes + 1 } ]
  }
  if (action.type === 'CREATE') {
    return [...store, { ...action.data }]
  }
  if (action.type === 'INIT_ANECDOTES') {
    return action.data
  }
  return store
}

export const anecdoteCreate = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.create(content)
    dispatch({
      type: 'CREATE',
      data: newAnecdote
    })
  }
}

export const anecdoteVote = (anecdote) => {
  return  async (dispatch) => {
    await anecdoteService.vote(anecdote)
    dispatch({
      type: 'VOTE',
      id: anecdote.id
    })
  }
}

export const anecdoteInitialization = () => {
  return async (dispatch) => {
    const data = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data
    })
  }
}

export default reducer