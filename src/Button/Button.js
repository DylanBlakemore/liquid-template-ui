import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

import { Button as BootstrapButton } from 'react-bootstrap'

export default function Button(props) {
  return <BootstrapButton { ...props} className={ 'btn-default' }/>
}
