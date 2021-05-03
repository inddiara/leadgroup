import React from 'react';
import './styles.css';
import Logo from '../../assets/elo.png';

const NewLeadForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Novo lead criado com sucesso!');
  };

  return (
    <div>
      <img className="img" src={Logo} alt="Elo logo" />
      <h2>Novo Lead</h2>

      <form className="Form">  
        <input className="input" required placeholder="Nome*" />
        <input className="input" required placeholder="Telefone*" />
        <input className="input" required placeholder="Email*" />
          <div>
            <h2>Oportunidades</h2>
            <div className="Check">
              <input type="checkbox" id="1" name="oportunity1" value="RPA"/>
              <label for="1">RPA</label>
            </div>
            <div className="Check">
              <input type="checkbox" id="2" name="oportunity2" value="Produto Digital"/>
              <label for="2">Produto Digital</label>
            </div>
            <div className="Check">
              <input type="checkbox" id="3" name="oportunity3" value="Analytics"/>
              <label for="3">Analytics</label>
            </div>
            <div className="Check">
              <input type="checkbox" id="4" name="oportunity4" value="BPM"/>
              <label for="4">BPM</label>
            </div>
         </div>
      </form>
      <button className="button" onClick={handleSubmit}>Salvar</button>
    </div>
  )
};

export default NewLeadForm;
