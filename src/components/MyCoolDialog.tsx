import React, { FC, useState, useEffect } from 'react'
import RenderCounter from './RenderCounter'
import Dialog from './Dialog'
import DialogContent from './DialogContent'
import DialogActions from './DialogActions'

interface MyCoolDialogProps {
  open: boolean
  name: string
  onClose: () => void
  text: string
  getText: () => void
}

const MyCoolDialog: FC<MyCoolDialogProps> = ({
  open,
  name,
  onClose,
  text,
  getText
}) => {
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

export default MyCoolDialog