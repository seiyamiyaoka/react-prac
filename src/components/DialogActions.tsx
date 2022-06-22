import React, { FC } from 'react'

interface DialogActionProps {
  children: React.ReactNode
}

const DialogActions: FC<DialogActionProps> = ({ children }) => {
  return (
    <>
      <div>
        { children }
      </div>
    </>
  )
}

export default DialogActions