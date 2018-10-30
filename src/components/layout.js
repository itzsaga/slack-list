import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Hero from './hero'
import Footer from './footer'
import './layout.sass'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: 'A list of public Slack networks around the world.',
            },
            { name: 'keywords', content: 'slack' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Hero siteTitle={data.site.siteMetadata.title} />
        {children}
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
