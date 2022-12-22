import { useState } from 'react'

const App = () => {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState(Math.floor(Math.random() * (6 - 0 + 1)) + 0)
  const [vote, setVote] = useState(Array(anecdotes.length).fill(0))
  const nextAnectode = () => setSelected(Math.floor(Math.random() * (6 - 0 + 1)) + 0)
  const handleVote = () => {
    const newVote = [...vote]
    newVote[selected] += 1
    setVote(newVote)
  }


  return (
    <div>
      {anecdotes[selected]}
      <div>
        has {vote[selected]} votes
      </div>
      <div>
        <button onClick={handleVote}>vote</button>
        <button onClick={nextAnectode}>next anecdote</button>
      </div>
      <ResultAnecdote votes={vote} anecdotes={anecdotes} />
    </div>
  )
}

const ResultAnecdote = (props) => {

  const votes = props.votes
  const mostVoted = Math.max(...Object.values(votes))
  const mostVotedIndex = votes.indexOf(mostVoted)

  if (mostVoted > 0) {
    return (
      <div>
        <h1>Anecdote with most votes</h1>
        <div>
          <p>{props.anecdotes[mostVotedIndex]}</p>
          <p>has {mostVoted} votes</p>
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <p>None anecdote voted yet.</p>
      </div>
    )
  }


}

export default App