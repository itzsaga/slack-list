import React, { useState } from 'react'

import Layout from '../components/layout'

const AboutPage = ({ location: { pathname } }) => {
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
      .then(r => {
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
            <div class="field">
              <label class="label">Network Name</label>
              <div class="control">
                <input
                  class="input"
                  type="text"
                  placeholder="Network name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Description</label>
              <div class="control">
                <textarea
                  class="textarea"
                  type="text"
                  placeholder="A short description"
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  required
                />
              </div>
            </div>
            <div class="field">
              <label class="label">URL</label>
              <div class="control">
                <input
                  class="input"
                  type="text"
                  placeholder="https://invite.url"
                  value={url}
                  onChange={e => setUrl(e.target.value)}
                  required
                />
              </div>
              <p class="help">
                Please provide the direct link to the invite form
              </p>
            </div>
            <div class="control">
              <button class="button is-primary" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
      {success && (
        <div class="notification is-success">
          <button class="delete" onClick={setSuccess(false)} />
          Successfully submitted network for addition.
        </div>
      )}
      {error && (
        <div class="notification is-danger">
          <button class="delete" onClick={setError(false)} />
          Something went wrong. Please try again.
        </div>
      )}
    </Layout>
  )
}

export default AboutPage
