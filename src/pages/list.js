import React from 'react'

import Layout from '../components/layout'
import LocationBased from '../components/locationBased'

import list from '../data/list'

const ListPage = ({ location: { pathname } }) => (
  <Layout location={pathname}>
    <section className="section">
      <div className="container">
        <div className="content">
          <LocationBased locationBased={list.locationBased} />
        </div>
      </div>
    </section>
  </Layout>
)

export default ListPage

const WIP = () => (
  <React.Fragment>
    <div id="it">
      <h2>Networks Based around IT</h2>
    </div>
    <ul>
      <li>
        <a
          href="http://android-united.community/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Android United
        </a>{' '}
        - A friendly Slack community of Android developers. We unite people from
        all over the world. We share our experience, knowledge and relevant news
        about Android and mobile. We help each other.
      </li>
      <li>
        <a
          href="https://slack.apisyouwonthate.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          APIs You Won't Hate
        </a>{' '}
        - Get your API, REST and HTTP questions answered! We're the largest
        API-centric Slack channel around..
      </li>
      <li>
        <a
          href="https://karangoel.typeform.com/to/mEl3P9"
          target="_blank"
          rel="noopener noreferrer"
        >
          HackerX
        </a>{' '}
        - A community of hackers and makers from all over the world to
        facilitate networking, Q&A's, feedback and more.
      </li>
      <li>
        <a
          href="https://signup.hangops.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hangops
        </a>{' '}
        - Awesome discussion with the DevOps community.
      </li>
      <li>
        <a
          href="https://ios-developers.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          iOS Developers
        </a>{' '}
        - A Slack community for iOS developers.
      </li>
    </ul>

    <div id="programming">
      <h2>Networks Based around Programming</h2>
    </div>
    <ul>
      <li>
        <a
          href="https://larachat.co/slack"
          target="_blank"
          rel="noopener noreferrer"
        >
          Larachat
        </a>{' '}
        - Talk to some of the best Laravel minds on the web today.
      </li>
    </ul>
  </React.Fragment>
)
