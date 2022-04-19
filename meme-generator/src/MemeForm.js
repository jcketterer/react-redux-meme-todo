import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './MemeForm.css'

const FORM = {
  url: '',
  topText: '',
  bottomText: '',
}

const MemeForm = ({ addMeme }) => {
  const [formData, setFormData] = useState(FORM)

  const handleSubmit = e => {
    e.preventDefault()
    addMeme({ ...formData, id: uuidv4() })
    setFormData(FORM)
  }

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(form => ({ ...form, [name]: value }))
  }

  return (
    <div>
      <h2>Can I Haz Meme!</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="url">Meme URL</label>
        <input
          type="text"
          name="url"
          id="form_url"
          onChange={handleChange}
          value={formData.url}
        />
        <label htmlFor="url">Top Text</label>
        <input
          type="text"
          name="topText"
          id="form_topText"
          onChange={handleChange}
          value={formData.topText}
        />
        <label htmlFor="url">Bottom Text</label>
        <input
          type="text"
          name="bottomText"
          id="form_bottomText"
          onChange={handleChange}
          value={formData.bottomText}
        />
        <button type="submit" id="form_submit">
          Generate Meme!
        </button>
      </form>
    </div>
  )
}

export default MemeForm
