import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../../components/modal/Modal.component';
import ResponseAdmin from '../../components/ticket/response/responseFormTicket.component';
import { getAllTickets } from '../../services/Ticket.services';
import { Ticket, User } from '../../types';

type TicketProps = {
  userLogged: User;
};

const AdminPage = ({ userLogged }: TicketProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [selectedTicket, setSelectedTicket] = useState<Ticket>({
    tickedId : 0,
    userId : 0,
    title : '',
    content : '',
    state : '',
    destiny : '',
    createdAt : ''
});
const navigate = useNavigate();

  useEffect(()=>{
    if (userLogged.userId === 0) {
      navigate('/');
    }
    handleTickets()
  },[userLogged,navigate]); 

  const handleTickets = async () => {
    if (userLogged.userId !== 0) {
      setTickets(await getAllTickets());
    }
  };

  const handleEditClick = (ticket: Ticket) => {
    setSelectedTicket(ticket);
    setIsModalOpen(true);
  };

  return (
    <>
    <div className='container '>

        <div className='row row-cols-3'>
            {tickets &&
            tickets.map((ticket, index) => (
                <div className="col">
                <div className="card" key={index} style={{ width: '18rem' }}>
                    <div className="card-body">
                    <a className="card-title">N°de Ticket {ticket.tickedId || 'asddd'}</a>
                    <h5 className='card-title'>{ticket.title}</h5> 
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
                        <button onClick={() => handleEditClick(ticket)}>Editar</button>
                    </div>
                </div>
                </div>
            ))}
        </div>
    </div>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <ResponseAdmin ticket={selectedTicket} setIsModalOpen={setIsModalOpen}/>
        </Modal>
    </>
  );
};

export default AdminPage;