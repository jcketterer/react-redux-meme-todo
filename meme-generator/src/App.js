import React from 'react'
import MemeForm from './MemeForm'
import Meme from './Meme'
import { useSelector, useDispatch } from 'react-redux'
import './App.css'

function App() {
  const memes = useSelector(state => state.memes)
  const dispatch = useDispatch()

  const addMeme = meme => {
    dispatch({ type: 'ADD_MEME', meme: meme })
  }

  const deleteMeme = id => {
    dispatch({ type: 'DELETE_MEME', id })
  }

  const memeComp = memes.map(meme => (
    <Meme
      key={meme.id}
      topText={meme.topText}
      bottomText={meme.bottomText}
      url={meme.url}
      deleteMeme={() => deleteMeme(meme.id)}
    />
  ))

  return (
    <div className="App">
      HI TEST TEST TEST
      <MemeForm addMeme={addMeme} />
      <hr />
      {memeComp}
    </div>
  )
}

export default App
