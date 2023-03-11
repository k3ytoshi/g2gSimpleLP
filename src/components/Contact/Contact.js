import React from 'react'
import '../../public/images/home/paths-grey.svg'
import Container from '../Container/Container'
import Icon from '../Icon/Icon'
import events from '../../core/EventEmitter'
import Banner from '../Banner/Banner'
import Edge from '../Edge/Edge'


import Mail from './mail.svg'
import Newsletter from './newsletter.svg'
import Discord from './download__14_-removebg-preview.svg'

import './Contact.scss'
import '../../public/images/home/paths-grey.svg'

function Contact() {

  return (
    <Container className="Contact" fluid>
      <div className="Screen-right-half paths-grey" />
      <Container className="" clipped={true}>
        <Banner
          text="Contact us"

          cover="contact"
          textDark />
      </Container>

      <Container className="Contacts-section">
        <div className="Contacts">
        <div className="Contact-item">
            <a className="Contact-item-head" href="https://forms.gle/QdFCbboALg6q5HJS7" target="_blank" rel="noopener noreferrer">
              <img src={Newsletter} alt="" />
              <div className="Contact-item-title">Sign up</div>
            </a>
            <div className="Contact-item-info">
              Register for early access to the beta program.
            </div>
          </div>
          <div className="Contact-item">
            <a className="Contact-item-head" href="mailto:info@gym2gym.com">
              <img src={Mail} alt="" />
              <div className="Contact-item-title">Email us</div>
            </a>
            <div className="Contact-item-info">
              For general inquiries please email our founding team.
            </div>
          </div>
          <div className="Contact-item">
            <a className="Contact-item-head" href="https://discord.gg/8EUD9Cfm" target="_blank" rel="noopener noreferrer">
              <img src={Discord} alt="" />
              <div className="Contact-item-title">Discord Server</div>
            </a>
            <div className="Contact-item-info">
              Join the Gym2Gym Discord community.
            </div>
          </div>
        </div>
      </Container>
      
      <Edge className="Edge-bottom sm-hidden">
        <Container>
          <div className="Edge-content">
            <div className="Edge-content-start" />
            <div className="Edge-content-end">
            <div className="Edge-pagination color-grey">07 / 07</div>
              <div className="Edge-pagination-icon" onClick={() => events.navigate(1)}>
                <Icon className="arrow-up" name="arrow-down" viewBox="0 0 36 36" fill="none" size="36" stroke="#46AAD6" />
              </div>
            </div>
          </div>
        </Container>
      </Edge>
    </Container>
  )
}

export default Contact
