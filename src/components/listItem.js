import React from 'react'

const ListItem = ({ item }) => (
  <li>
    <a href={item.url} target="_blank" rel="noopener noreferrer">
      {item.name}
    </a>{' '}
    - {item.description}
  </li>
)

export default ListItem
