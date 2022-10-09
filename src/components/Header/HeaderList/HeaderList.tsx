import React from 'react'
import {
  faBed,
  faPlane,
  faCar,
  faTaxi,
  faCalendarDays,
  faPerson,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { List, ListItem } from './HeaderList.styled'

function HeaderList() {
  return (
    <List>
      <ListItem>
        <FontAwesomeIcon icon={faBed} />
        <span>Stays</span>
      </ListItem>
      <ListItem>
        <FontAwesomeIcon icon={faPlane} />
        <span>Flights</span>
      </ListItem>
      <ListItem>
        <FontAwesomeIcon icon={faCar} />
        <span>Car rentals</span>
      </ListItem>
      <ListItem>
        <FontAwesomeIcon icon={faBed} />
        <span>Attractions</span>
      </ListItem>
      <ListItem>
        <FontAwesomeIcon icon={faTaxi} />
        <span>Airport taxis</span>
      </ListItem>
    </List>
  )
}

export default HeaderList
