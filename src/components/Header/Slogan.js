import React from 'react'

import Container from '../Container/Container'
import Icon from '../Icon/Icon'
import events from '../../core/EventEmitter'

import './Slogan.scss'

function Slogan() {
  return (
    <Container>
      <div className="Slogan">
        <div className="Slogan-title">
        An online marketplace for private gyms and wellness spaces
        </div>
        <div className="Page-down" onClick={() => events.navigate(2)}>
          <Icon name="arrow-down" viewBox="0 0 36 36" fill="none" size="36" stroke="#46AAD6" />
        </div>
      </div>
    </Container>
  )
}

export default Slogan
