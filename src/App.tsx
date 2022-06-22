import React, { useState } from 'react';
import RenderCounter from './components/RenderCounter';
import MyDialog from './components/MyDialog';
import logo from './logo.svg';
import './App.css';
import DialogContainer from './components/DialogContainer';

function App() {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <div className="App">
      <h1>App</h1>
      <button onClick={() => setOpen(true)}>open</button>
      <RenderCounter name="app"/>
      {/* MyDialogはAppのopenが変わるたびにchildrenが更新されて非効率 */}
      <MyDialog name="component" open={open} onClose={() => setOpen(false)}/>
      {/* DialogContainerはopenを含んでいるので必要以上にre-renderされない */}
      <DialogContainer name="container" />
    </div>
  );
}

export default App;
