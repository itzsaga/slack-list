import React from 'react'

import Layout from '../components/layout'
import ListItem from '../components/listItem'
import LocationBased from '../components/locationBased'

import list from '../data/list'

const IndexPage = ({ location: { pathname } }) => (
  <Layout location={pathname}>
    <section className="section">
      <div className="container">
        <div className="content">
          <LocationBased locationBased={list.locationBased} />
          <div id="it">
            <h2>Networks Based around IT</h2>
          </div>
          <ul>
            {list.itBased.map((network) => (
              <ListItem item={network} key={network.url} />
            ))}
          </ul>
          <div id="programming">
            <h2>Networks Based around Programming</h2>
          </div>
          <ul>
            {list.programmingBased.map((network) => (
              <ListItem item={network} key={network.url} />
            ))}
          </ul>
          <div id="miscellaneous">
            <h2>Networks Based around Miscellaneous Topics</h2>
          </div>
          <ul>
            {list.miscellaneousBased.map((network) => (
              <ListItem item={network} key={network.url} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
