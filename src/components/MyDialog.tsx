import React, { FC, useState, useEffect } from 'react'
import RenderCounter from './RenderCounter'
import Dialog from './Dialog'
import DialogContent from './DialogContent'
import DialogActions from './DialogActions'

interface MyDialogProps {
  open: boolean
  name: string
  onClose: () => void
}

const MyDialog: FC<MyDialogProps> = ({ open, name, onClose }) => {
  const [text, setText] = useState<string>("")

  const fetchText = async () => {
    setTimeout(() => setText(name + ": some value"), 5000)
  }

  const getText = () => {
    setText("Loading")
    fetchText()
  }

  useEffect(() => {
    if (open) {
      setText("");
    }
  }, [open]);

  return (
    <>
      <RenderCounter name={name}/>
      <Dialog open={open} onClose={onClose}>
        <DialogContent>
          <h1>{name}</h1>
          <input type="text" value={text}/>
        </DialogContent>
        <DialogActions>
          <button onClick={getText}>Get Text</button>
          <button onClick={onClose}>Cancel</button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default MyDialog