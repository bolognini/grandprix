import React, { Fragment } from 'react'
import { Message } from './ErrorMessage.style'

const ErrorMessage = ({ message }) => {
  return (
    <Fragment>
      {message &&
        <Message>
          Não conseguimos trazer seu resultado :( <br />
          Os campos de ano e etapa devem ser números
          Por favor, confira se os dados digitados estão corretos.
        </Message>
      }
    </Fragment>
  )
}

export default ErrorMessage