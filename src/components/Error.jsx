import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {

    const error = useRouteError()
  return (
    <h1>s Something Went Wrong .....{error.status}</h1>
  )
}

export default Error;