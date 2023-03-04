import React from 'react'
import '../../public/images/home/paths-grey.svg'
import Container from '../Container/Container'
import Edge from '../Edge/Edge'
import Icon from '../Icon/Icon'
import events from '../../core/EventEmitter'
import Banner from '../Banner/Banner'

import './Mission.scss'
import '../../public/images/home/paths-grey.svg'

function Mission() {
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
          text="What We've Built"
          info={
            <>
              A platform and marketplace that enables people to have private fitness experiences. 
              <br /><br />
              We will provide users with access to home gyms, privately owned facilities and other fitness spaces.
              <br /><br />
             Users pay for what they use, and owners profit from one-off transactions during downtime or new revenue streams.
            </>
          }
          cover="about"
          textDark />
      </Container>

      <Edge className="Edge-bottom">
        <Container>
          <div className="Edge-content">
            <div className="Edge-content-start">
            </div>
            <div className="Edge-content-end">
              <div className="Edge-pagination color-grey">02 / 07</div>
              <div className="Edge-pagination-icon" onClick={() => events.navigate(3)}>
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

export default Mission
