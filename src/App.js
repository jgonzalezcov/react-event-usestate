import { useState } from 'react'
import Button from './components/Button'
import Header from './components/Header'
import Input from './components/Input'

function App() {
  const buttonClean = () => {
    setPassw('')
    setName('')
    if (inName === '') {
      alert('Debes ingresar tu nombre')
    }
  }
  const [inPassw, setPassw] = useState('')
  const [inName, setName] = useState('')
  return (
    <div className="App">
      <Header />
      <Input
        setPassw={setPassw}
        setName={setName}
        inName={inName}
        inPassw={inPassw}
      />
      {inPassw === '252525' ? <Button buttonClean={buttonClean} /> : ''}
    </div>
  )
}

export default App
