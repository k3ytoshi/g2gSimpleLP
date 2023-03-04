import React from 'react'
import { Link } from 'react-router-dom'

import Container from '../Container/Container'
import './Footer.scss'

class Footer extends React.Component {

  render() {
    return (
      <header className="Footer">
        <Container>
          <hr className="Divider" />
          <div className="Footer-bottom">
            <Link to="/">
              <img
                className="Logo" 
                alt=""
                src="./logo.png"
              />
              <div className=""> Copyright &copy; 2022</div>
            </Link>
            <a href="mailto:info@gym2gym.com">info@gym2gym.com</a>
          </div>
        </Container>
      </header>
    )
  }
}

export default Footer
