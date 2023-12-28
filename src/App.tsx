import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer.component';
import Header from './components/header/Header.component';
import Home from './pages/home/Home';

import AdminPage from './pages/admin/Admin.page';
import TicketPage from './pages/tickets/Ticket';
import { User } from './types';

const App = () => {
  const initalUserState = {
    userId: 0,
    name: '',
    lastName: '',
    email: '',
    password: '',
    rol: 0,
  }

  const [userLogged, setUserLogged] = useState<User>(() => {
    const storedUser = sessionStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : initalUserState
  });

  return (
          <BrowserRouter>
            <Header userLogged={userLogged} setUserLogged={setUserLogged} />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="/ticket"
                  element={<TicketPage userLogged={userLogged} />}
                />
                <Route path="/admin" element={<AdminPage userLogged={userLogged}/>} />
              </Routes>
            <Footer />
          </BrowserRouter>
  );
};
export default App;