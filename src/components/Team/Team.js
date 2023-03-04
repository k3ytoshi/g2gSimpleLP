import React from 'react'

import Container from '../Container/Container'
import Edge from '../Edge/Edge'
import Icon from '../Icon/Icon'
import events from '../../core/EventEmitter'
import Banner from '../Banner/Banner'

function Team() {
  return (
    <Container className="" fluid>
    <div className="Screen-right-half paths-grey" />

      <Edge className="Edge-header">
        <Container>
        </Container>
      </Edge>

      <Container className="" clipped={false}>
        <Banner
          text="Our Team"
          info={
            <>
          "Gym2Gym believes private and personal health experiences should not be exclusive, and should be shared.
           Whether you are a gym owner or gym user, we allow you to have a new fitness journey." 
            </>
          }
          textDark />
      </Container>

      <Edge className="Edge-bottom">
        <Container>
          <div className="Edge-content">
            <div className="Edge-content-start">
              <Icon name="logo" fill="#000" viewBox="0 0 58.75 52.81" size="40" />
            </div>
            <div className="Edge-content-end">
              <div className="Edge-pagination color-grey">06 / 07</div>
              <div className="Edge-pagination-icon sm-svg-green" onClick={() => events.navigate(7)}>
                <Icon name="arrow-down" viewBox="0 0 36 36" fill="none" size="36" stroke="#808085" />
              </div>
            </div>
          </div>
          <hr className="Divider" />
        </Container>
      </Edge>
    </Container>
  )
}

export default Team
