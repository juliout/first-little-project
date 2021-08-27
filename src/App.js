import Inputs from "./components/inputs";
import './app.css'

export default function App() {
  return (
    <div className="pai">      
        <form className="form">
          <Inputs type="text" className="input is-primary is-medium Mlargura" name="nome" id="iNome">
            Nome Completo:
          </Inputs>
          <Inputs type="email" className="input is-primary is-medium Mlargura" name="email" id="iemail"> 
            Email:
          </Inputs>
          <Inputs type="password" className="input is-primary is-medium Plargura" name="senha" id="isenha">
            Senha:
          </Inputs>
          <Inputs  type="password" className="input is-primary is-medium Plargura" name="resenha" id="iresenha">
            Re-senha:
          </Inputs>
          <div className="buttons">
            <button className="button is-primary is-large">Enviar</button>
            <button className="button is-danger">Limpar</button>
          </div>

        </form>      
    </div>
  );
  }