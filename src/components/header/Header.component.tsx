import {
  Dispatch,
  MouseEvent,
  SetStateAction,
  useState
} from 'react';
import { logOutUser } from '../../services/Usuario.services';
import { User } from '../../types';
import Modal from '../modal/Modal.component';
import FormLogin from './components/formLogin.component';
import FormRegister from './components/formRegister.component';
  
  type HeaderProps = {
    userLogged: User;
    setUserLogged: Dispatch<SetStateAction<User>>;
  };
  
  const Header = ({ userLogged, setUserLogged }: HeaderProps) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [showContentModal, setShowContenModal] = useState<string>('');
  
    const handleOpenModal = (event: MouseEvent<HTMLAnchorElement>) => {
      const { currentTarget } = event;
  
      setShowContenModal(currentTarget.id);
      setIsModalOpen(true);
    };
  
    return (
      <div className='divnavbar'>
        <nav className="navbar navbar-expand-lg ">
          <div className="container-md">
            <a className="navbar-brand" href="/">
              <img
                src="\src\assets\logo\image.png"
                alt="logo"
                width="300"
                height="70"
                className="d-inline-block align-text-top"
                />
            </a>
  
              <ul className="nav nav-pills flex-column flex-sm-row">
                {userLogged.userId !== 0 ? (
                  <>
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        onClick={() => logOutUser(setUserLogged)}
                        style={{ cursor: 'pointer' }}>
                        Cerrar sesión
                      </a>
                    </li>
                    <li className='nav-item'>
                       <a 
                          className="nav-link active"
                          aria-current="page"
                          style={{ cursor: 'pointer' }}
                          href='/ticket'>
                          Ticket
                       </a>
                     </li>
                  </>
                ) : (
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="login"
                      onClick={handleOpenModal}
                      style={{ cursor: 'pointer' }}>
                      Iniciar sesión
                    </a>
                  </li>
                )}
  
                {userLogged.userId === 0 && (
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="register"
                      onClick={handleOpenModal}
                      style={{ cursor: 'pointer' }}>
                      Registrarse
                    </a>
                  </li>
                )}
              </ul>
          </div>
        </nav>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          {showContentModal === 'login' ? (
            <FormLogin
            setIsModalOpen={setIsModalOpen}
            setUserLogged={setUserLogged}
            />
            ) : (
              <FormRegister setIsModalOpen={setIsModalOpen}/>
              )}
        </Modal>
              </div>
    );
  };
  export default Header;