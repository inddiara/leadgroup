import React, { useState } from 'react';
import './styles.css';
import Logo from '../../assets/elo.png';

const NewLeadForm = () => {
  const [checkAll, setCheckAll] = useState(false);
  const inputData = [
    { id: 1, name: 'oportunity1', value: 'RPA' },
    { id: 2, name: 'oportunity2', value: 'Produto Digital' },
    { id: 3, name: 'oportunity3', value: 'Analytics' },
    { id: 4, name: 'oportunity4', value: 'BPM' },
  ];
  const inputFields = (id, name, value) => (
    <div className="Check">
      <input type="checkbox" checked={checkAll} id={id} name={name} value={value} />
      <label for={id}>{value}</label>
    </div>
  );

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
          <input type="checkbox" name="checkedAll" onChange={() => setCheckAll(!checkAll)}></input>
          <label>Marcar todos</label>
          {
            inputData.map(data => inputFields(data.id, data.name, data.value))
          }
        </div>
      </form>
      <button className="button" onClick={handleSubmit}>Salvar</button>
    </div>
  )
};

export default NewLeadForm;
