import React from 'react'

import Layout from '../components/layout'

const AboutPage = () => (
  <Layout>
    <section className="section">
      <div className="container">
        <div className="content">
          <h2>Inspiration</h2>
          <p>
            This project was originally thought up by{' '}
            <a
              href="http://sethalexander.me"
              target="_blank"
              rel="noopener noreferrer"
            >
              Seth Alexander
            </a>
            , me, the person writing this. After attending the Flatiron School
            Online Web Developer Program, I worked part-time as a Teaching
            Assistant for them. I consistently would mention the{' '}
            <a
              href="https://nashdev.com"
              taget="_blank"
              rel="noopener noreferrer"
            >
              NashDev Slack network
            </a>{' '}
            and I would consistently be asked by students how they could find
            similar networks around them. I found my local Slack network as one
            of the best resources as I started my career in web development. One
            day I went looking for such a list. I found an amazing one put
            together by the people over at{' '}
            <a
              href="https://blog.standuply.com/the-full-list-of-1000-slack-communities-2c412054ea30"
              target="_blank"
              rel="noopener noreferrer"
            >
              Standuply
            </a>
            . However, I thought it could be improved if it was pulled off of
            Medium and curated by the community that makes up the majority of
            Slack. A lot of us contribute to Open Source so creating an Open
            Source project to house and maintain such a list just seemed like
            the right thing to do. It also seemed like a way to have a larger
            group of people working on this.
          </p>

          <h2>Community from the Start</h2>
          <p>
            This project started with members of the{' '}
            <a
              href="https://www.facebook.com/groups/free.code.camp.nashville/"
              target="_blank"
              rel="noopener noreferrer"
            >
              freeCodeCamp Nashville
            </a>{' '}
            community as the main contributors. We had been looking for a
            project to work on together and this was a great fit. We hope that
            you find a network and get plugged in. If there isn't one in your
            area, start one!
          </p>
        </div>
      </div>
    </section>
  </Layout>
)

export default AboutPage
