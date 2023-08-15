import React from 'react'
import { Button } from '@nextui-org/button'

type ButtonProps = {
    children: React.ReactNode
}
const button = ({children}: ButtonProps) => {
  return (
    <Button color='primary'>{children}</Button>
  )
}

export default button