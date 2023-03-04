import React from 'react'
import { ReactComponent as Done } from './done.svg'

import './SubscribeForm.scss'

class SubscribeFormModal extends React.Component {
  componentDidMount() {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://connect.mailerlite.com/';
    this.div.appendChild(script);
  }

  render() {
    const { formId, formCode, onClose } = this.props
    const action = `https://assets.mailerlite.com/jsonp/259395/forms/74529530513982868/subscribe`
    const className = `ml-form-embedContainer ml-subscribe-form ml-subscribe-form${formId}`

    return (
      <div id={`mlb2-${formId}`} className={className} ref={e => (this.div = e)}>
        <form className="Contact-form Modal-form" action={action} data-code={formCode} method="post">
          <div className="close-form">
            <span className="close" onClick={onClose}>&times;</span>
          </div>

          <input type="hidden" name="ml-submit" value="1" />
          <div className="Contact-form-info">
            Contact us and register to have early access to platforms early beta program!
          </div>
          <div className="Contact-form-group">
            <input type="text" className="form-control bg-white" name="fields[name]" placeholder="First name" required />
          </div>
          <div className="Contact-form-group">
            <input type="text" className="form-control bg-white" name="fields[last_name]" placeholder="Last name" required />
          </div>
          <div className="Contact-form-group">
            <input type="text" className="form-control bg-white" name="fields[phone]" placeholder="Phone Number" />
          </div>
          <div className="Contact-form-group">
            <input type="email" className="form-control bg-white" name="fields[email]" placeholder="Email" required />
          </div>
          <div className="Contact-form-group">
            <input type="text" className="form-control bg-white" name="fields[state]" placeholder="State" required />
          </div>
          <div className="Contact-form-group">
            <input type="text" className="form-control bg-white" name="fields[country]" placeholder="Country" required />
          </div>
          <label className="checkbox-label Subscribe-checkbox-wrap">
            <input type="checkbox" defaultChecked={false} name="fields[city][]" value="I'm a Gym User" />
            <span className="checkbox-custom" />
            <div className="Contact-checkbox-description">
              I'm a Gym User
            </div>
          </label>
          <label className="checkbox-label Subscribe-checkbox-wrap">
            <input type="checkbox" defaultChecked={false} name="fields[city][]" value="I'm a Gym Owner" />
            <span className="checkbox-custom" />
            <div className="Contact-checkbox-description">
              I'm a Gym Owner
            </div>
          </label>
         
          <div className="Contact-form-group">
            <button type="submit" className="Button Button-green Button-submit primary w-full">Submit</button>
            <button type="button" className="Button Button-green Button-submit loading w-full" disabled="disabled">Submit</button>
          </div>
         

         <div className="Contact-success">
           <div className="close-form">
            <span className="close" onClick={onClose}>&times;</span>
           </div>
           <div className="done">
            <Done />
           </div>
           <p className="done-text">
            Thank you! You have successfully RSVP for the platform.
           </p>
          </div>
          </form>
         </div>
    )
  }
}

export default SubscribeFormModal
