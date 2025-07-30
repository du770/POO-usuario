import { Usuario } from './models/Usuario.ts'
import './App.css'

function App() {
  const u1 = new Usuario('Duda', 18);
const u2 = new Usuario('João', 20);

u1.nome = 'Jorge';
  return (
    <>
      <p>{u1.apresentar()}</p>
      <p>{u2.apresentar()}</p>
    </>
  )
}

export default App
