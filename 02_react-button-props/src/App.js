import './App.css'
import Button from './Button'

function App() {
  return (
    <main>
      <div className="btn__container">
        <Button>默认按钮</Button>
        <Button color="red">红色按钮</Button>
        <Button color="black">黑色按钮</Button>
        <Button type="secondary">线框按钮</Button>
        <Button type="secondary" color="red">红色按钮</Button>
        <Button type="secondary" color="black">黑色按钮</Button>
      </div>
    </main>
  )
}

export default App

// vim: set filetype=javascriptreact:
