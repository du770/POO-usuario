import { Usuario } from './models/Usuario.ts'
import './App.css'

function App() {
  const u1 = new Usuario('Duda', 18);

  return (
    <>
      {u1.apresentar()}
    </>
  )
}

export default App
