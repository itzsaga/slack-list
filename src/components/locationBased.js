import React, { Fragment } from 'react'
import { capitalizeWords } from '../util/generalUtil'

const LocationBased = ({ locationBased }) => (
  <Fragment>
    <div id="location">
      <h2>Networks Based around a Location</h2>
    </div>
    <ul>
      {locationBased.map(country => {
        let slackNetworks
        const countryName = Object.keys(country)[0]
        if (countryName !== 'united states') {
          slackNetworks = country[countryName].map(network => (
            <li>
              <a href={network.url} target="_blank" rel="noopener noreferrer">
                {network.name}
              </a>{' '}
              - {network.description}
            </li>
          ))
        } else {
          slackNetworks = country[countryName].map(state => {
            const stateName = Object.keys(state)[0]
            const stateNetworks = state[stateName].map(network => (
              <li>
                <a href={network.url} target="_blank" rel="noopener noreferrer">
                  {network.name}
                </a>{' '}
                - {network.description}
              </li>
            ))
            return (
              <li>
                <h3>{capitalizeWords(stateName)}</h3>
                <ul>{stateNetworks}</ul>
              </li>
            )
          })
        }
        return (
          <Fragment>
            <li>
              <h3>{capitalizeWords(countryName)}</h3>
            </li>
            <ul>{slackNetworks}</ul>
          </Fragment>
        )
      })}
    </ul>
  </Fragment>
)

export default LocationBased
