import React, { FC } from 'react'

interface DialogProps {
  open: boolean
  onClose: () => void
  children: React.ReactNode
}

const Dialog: FC<DialogProps> = ({ open, onClose, children }) => {
  return (
    <>
      { open
        ? <div>{ children }</div>
        : <></>
      }
    </>
  )
}

export default Dialog