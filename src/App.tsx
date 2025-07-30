
import { useState } from 'react';
import { Usuario } from './models/Usuario';


function App() {
  const [usuario] = useState(() => new Usuario('Lucas', 28, '123456'));
  const [senha, setSenha] = useState('');
  const [resultado, setResultado] = useState<null | boolean>(null);
  const [novaSenha, setNovaSenha] = useState('');
  const [msgRedefinir, setMsgRedefinir] = useState<string | null>(null);
  const [tentativasErradas, setTentativasErradas] = useState(0);

  const verificarSenha = () => {
    const correta = usuario.verificarSenha(senha);
    setResultado(correta);
    if (!correta) {
      setTentativasErradas(prev => prev + 1);
    } else {
      setTentativasErradas(0);
    }
  };

  const redefinirSenha = () => {
    if (novaSenha.length < 4) {
      setMsgRedefinir('A nova senha deve ter pelo menos 4 caracteres.');
      return;
    }
    usuario.redefinirSenha(novaSenha);
    setMsgRedefinir('Senha redefinida com sucesso!');
    setSenha('');
    setNovaSenha('');
    setResultado(null);
    setTentativasErradas(0);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{usuario.apresentar()}</h1>
      <input
        type="password"
        placeholder="Digite a senha"
        value={senha}
        onChange={e => setSenha(e.target.value)}
      />
      <button onClick={verificarSenha} style={{ marginLeft: '1rem' }}>Verificar</button>
      {resultado !== null && (
        <p>
          Senha {resultado ? 'correta' : 'incorreta'}!
        </p>
      )}

      {tentativasErradas >= 3 && resultado === false && (
        <div style={{ marginTop: '2rem' }}>
          <h2>Redefinir Senha</h2>
          <input
            type="password"
            placeholder="Nova senha"
            value={novaSenha}
            onChange={e => setNovaSenha(e.target.value)}
          />
          <button onClick={redefinirSenha} style={{ marginLeft: '1rem' }}>Redefinir</button>
          {msgRedefinir && <p>{msgRedefinir}</p>}
        </div>
      )}
    </div>
  );
}

export default App;