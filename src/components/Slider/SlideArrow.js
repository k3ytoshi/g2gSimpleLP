import Icon from '../Icon/Icon'
import React from 'react'

export function SlideArrow({ name, onClick, color = '#55d0ff' }) {
  return (
    <div className={`slick-arrow slick-${name}`} onClick={onClick}>
      <Icon name={`arrow-${name}`} viewBox="0 0 12 42" stroke={color} fill="none" width="12" height="42" />
    </div>
  )
}

export default SlideArrow
