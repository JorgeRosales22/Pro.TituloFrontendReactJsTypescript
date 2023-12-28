import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../../components/modal/Modal.component';
import NewCreateTicket from '../../components/ticket/formTicket.component';
import { getTicketsByEmailUser } from '../../services/Ticket.services';
import { Ticket, User } from '../../types';

type TicketProps = {
  userLogged: User;
};

const TicketPage = ({ userLogged }: TicketProps) => {
  const {email} = userLogged;
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [tickets, setTickets] = useState<Ticket[]>([]);
  
  const navigate = useNavigate();
  
  useEffect(() => {
    if (userLogged.userId === 0) {
      navigate('/');
    }
    if (userLogged.rol === 1 && userLogged.userId !== 0) {
      navigate('/admin');
    }
    handleTickets()

  }, [userLogged, navigate]);

  const handleTickets = async () => {
    if (userLogged.userId !== 0) {
      setTickets(await getTicketsByEmailUser(userLogged.email));
    }
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div>
      <div className="d-flex flex-direction-row justify-content-around">
        {tickets &&
          tickets.map((ticket, index) => (
            <div className="card" key={index} style={{ width: '18rem' }}>
              <div className="card-body">
                <div>
                  <a className="card-title">N°de Ticket {ticket.tickedId || 'asddd'}</a>
                  <h5 className='card-title'>{ticket.title}</h5> 
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    De: {email}
                  </h6>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    Estado: {ticket.state}
                  </h6>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    Creado: {ticket.createdAt}
                  </h6>
                  <p className="card-text">
                    Contenido:
                    {ticket.content}
                  </p>
                  <h6 className="card-text">
                    Para: {ticket.destiny}
                  </h6>
                </div>
              </div>
            </div>
          ))}
      </div>
      <br></br>
      <div className='container text-center'>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button className='btn btn-primary' id="crearTicket"  onClick={handleOpenModal}>
            Crear Ticket
          </button>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <NewCreateTicket user={userLogged} setIsModalOpen={setIsModalOpen}/>
      </Modal>
    </div>
  );
};

export default TicketPage;