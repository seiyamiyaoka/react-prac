import React, { FC } from 'react'

interface DialogContentProps {
  children: React.ReactNode
}

const DialogContent: FC<DialogContentProps> = ({ children }) => {
  return (
    <>
      <div>
        { children }
      </div>
    </>
  )
}

export default DialogContent