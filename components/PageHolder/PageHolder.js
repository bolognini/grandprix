import React from 'react'
import { Holder } from './PageHolder.style'

const PageHolder = ({ children }) => {
  return (
    <Holder>
      {children}
    </Holder>
  )
}

export default PageHolder