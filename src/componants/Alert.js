import React from 'react'
import propsTypes from 'prop-types';   

export default function Alert(props) {
  return (
    <div>
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{props.alert.type}</strong> : {props.alert.msg}
        
        </div>
    </div>
  )
}
