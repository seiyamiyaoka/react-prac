import React, { FC, useState } from 'react'
import { DiagnosticCategory } from 'typescript'
import MyCoolDialog from './MyCoolDialog'

interface DialogContainerProps {
  name: string
}

const DialogContainer: FC<DialogContainerProps> = ({ name }) => {
  const [open, setOpen] = useState<boolean>(false)
  const [text, setText] = useState<string>("")

  const handleToggle = () => {
    if (!open) {
      setText("")
    }
    setOpen((o) => !o)
  }

  const fetchText = async () => {
    setTimeout(() => setText(name + ": some value"), 5000)
  }

  const getText = () => {
    setText("Loading")
    fetchText()
  }

  return (
    <>
      <button onClick={handleToggle}>open</button>
      <MyCoolDialog
        open={open}
        name={name}
        text={text}
        onClose={() => setOpen(false)}
        getText={getText}
      />
    </>
  )
}

export default DialogContainer