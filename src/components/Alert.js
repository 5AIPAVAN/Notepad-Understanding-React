import React from 'react'

export default function Alert(props) {
    const {description} = props;
  return (
    <div className="alert alert-primary" role="alert">
    This is in testing {description}
  </div>
  )
}
