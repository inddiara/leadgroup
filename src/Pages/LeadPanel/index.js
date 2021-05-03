import React, { useState } from 'react';
import Modal from 'react-modal';
import Logo from '../../assets/elo.png';
import NewLeadForm from '../../Components/NewLeadForm';
import Table from '../../Components/Table';
import './styles.css';

const columns = [
  {
    label: 'Cliente em Potencial',
    position: 0,
  },
  {
    label: 'Dados Confirmados',
    position: 1,
  },
  {
    label: 'Reunião Agendada',
    position: 2,
  },
];

const initialItems = [
  {
    id: 1,
    title: 'Org Internacional',
    position: 0,
  },
  {
    id: 2,
    title: 'Music Sound',
    position: 1,
  },
  {
    id: 3,
    title: 'Ind Farm',
    position: 0
  }
];

const LeadPanel = () => {
  const [isNewLeadModalOpen, setIsNewLeadModalOpen] = useState(false);
  const [items, setItems] = useState(initialItems);

  function handleOpenNewLeadModal() {
    setIsNewLeadModalOpen(true);
  };

  function handleCloseNewLeadModal() {
    setIsNewLeadModalOpen(false);
  };

  const changePosition = (id, value) => {
    let newItems = [...items];
    newItems = newItems.map(item => {
      return (
        {
          ...item, 
          position: item.id === id ? item.position + value : item.position,
        }
      )
    })
    setItems(newItems);
  };

  return (
    <div>
      <img className="img" src={Logo} alt="Elo logo" />
        <div className="title">
          <h2 className="title-lead">Painel de Leads</h2>
        </div>
      <button className="button-lead" onClick={handleOpenNewLeadModal}>Novo Lead (+)</button>

      <Modal isOpen={isNewLeadModalOpen} onRequestClose={handleCloseNewLeadModal}>
        <NewLeadForm />
      </Modal>

      <Table columns={columns} data={items} changePosition={changePosition}/>
    </div>
  )
}

export default LeadPanel;