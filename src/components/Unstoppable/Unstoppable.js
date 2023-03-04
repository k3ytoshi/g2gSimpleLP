import React from 'react'
import '../../public/images/home/paths-grey.svg'
import Container from '../Container/Container'
import Icon from '../Icon/Icon'
import Edge from '../Edge/Edge'
import Banner from '../Banner/Banner'
import events from '../../core/EventEmitter'

import './Mission.scss'
import '../../public/images/home/paths-grey.svg'

function Unstoppable() {
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
          text="Product"
          info={
            <>
              App and desktop coming Q2 2023
              <br /><br />
              Contact us and sign up to gain early access to the Gym2Gym platform. 
            </>
          }
          cover="product"
          textDark />
      </Container>

      <Edge className="Edge-bottom">
        <Container>
          <div className="Edge-content">
            <div className="Edge-content-start">
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

export default Unstoppable
