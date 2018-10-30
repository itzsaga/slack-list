import React from 'react'

import Layout from '../components/layout'

const IndexPage = ({ location: { pathname }}) => (
  <Layout location={pathname}>
    <section className="section">
      <div className="container">
        <div className="content">
          <h2>This is the home page.</h2>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
