import React, { useState } from 'react'

import Layout from '../components/layout'

const Add = ({ location: { pathname } }) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [url, setUrl] = useState('')
  const handleSubmit = () => {
    let data = {}
    data.title = `Add ${name} to list`
    data.labels = ['submission']
    data.body = `Name: ${name}\nDescription: ${description}\nURL: ${url}`
    fetch('https://api.github.com/repos/itzsaga/slack-list/issues', {
      method: 'POST',
      headers: {
        Authorization: `token ${process.env.GATSBY_GITHUB_OAUTH_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((r) => {
        if (r.status === 201) {
          setName('')
          setDescription('')
          setUrl('')
          setSuccess(true)
        }
      })
      .catch(() => {
        setError(true)
      })
  }

  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  return (
    <Layout location={pathname}>
      <section className="section">
        <div className="container">
          <div className="content">
            <h2>Add A Slack Network</h2>
            <div className="field">
              <label className="label">Network Name</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Network name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Description</label>
              <div className="control">
                <textarea
                  className="textarea"
                  placeholder="A short description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">URL</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="https://invite.url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  required
                />
              </div>
              <p className="help">
                Please provide the direct link to the invite form
              </p>
            </div>
            <div className="control">
              <button className="button is-primary" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
      {success && (
        <div className="notification is-success">
          <button className="delete" onClick={setSuccess(false)} />
          Successfully submitted network for addition.
        </div>
      )}
      {error && (
        <div className="notification is-danger">
          <button className="delete" onClick={setError(false)} />
          Something went wrong. Please try again.
        </div>
      )}
    </Layout>
  )
}

export default Add
