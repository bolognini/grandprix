import React, { Fragment } from 'react'
import { Message, MessageBox } from './ErrorMessage.style'

const ErrorMessage = ({ message, behavior }) => {
  return (
    <Fragment>
      {message &&
      <MessageBox behavior={behavior}>
        <Message>
          Algo deu errado! Por favor, cheque se os valores estão corretos.
        </Message>
      </MessageBox>
      }
    </Fragment>
  )
}

export default ErrorMessage