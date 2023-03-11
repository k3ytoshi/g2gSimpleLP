import React from 'react'
import '../../public/images/home/paths-grey.svg'
import Edge from '../Edge/Edge'
import Container from '../Container/Container'
import Icon from '../Icon/Icon'
import Banner from '../Banner/Banner'
import events from '../../core/EventEmitter'
import './Mission.scss'
import '../../public/images/home/paths-grey.svg'

function Code() {
  return (
    <Container className="Unstoppable" fluid>
      <div className="Screen-right-half paths-grey" />

    <Edge className="Edge-header">
        <Container>
          <div className="Edge-content">
            <div className="Edge-content-start">
            </div>
          </div>
        </Container>
      </Edge>
      
      <Container className="Container-flex" clipped={false}>
      <Banner
          text="Monetize your space"
          info={
            <>
             Gym or health space owners earn more by renting out to new customers and providing memberships.
              <br /><br />
             Home or property owners can turn their gym and health spaces into their own personal small businesses.

            </>
          }
          cover="owner"
          textDark />
      </Container>

      <Edge className="Edge-bottom">
        <Container>
          <div className="Edge-content">
            <div className="Edge-content-start">
            </div>
            <div className="Edge-content-end">
              <div className="Edge-pagination color-grey">04 / 07</div>
              <div className="Edge-pagination-icon" onClick={() => events.navigate(5)}>
                <Icon name="arrow-down" viewBox="0 0 36 36" fill="none" size="36" stroke="#46AAD6" />
              </div>
            </div>
           </div>
         <hr className="Divider" />
        </Container>
      </Edge>
    </Container>
  )
}

export default Code
