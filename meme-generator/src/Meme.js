import React from 'react'
import PropTypes from 'prop-types'
import './Meme.css'

const Meme = ({ deleteMeme, topText, bottomText, url, id }) => {
  const handleDelete = () => {
    deleteMeme(id)
  }

  return (
    <div id="meme" className="Meme">
      <div className="container">
        <span className="top-text">{topText}</span>
        <img src={url} alt="a-meme" />
        <span className="bottom-text">{bottomText}</span>
        <button id="meme-delete" onClick={handleDelete}>
          DELETE ME!
        </button>
      </div>
    </div>
  )
}

Meme.propTypes = {
  topText: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  bottomText: PropTypes.string.isRequired,
}

export default Meme
