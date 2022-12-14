import './index.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import MenuPage from './pages/MenuPage';
import OrderTracking from './pages/OrderTracking';
import SignUp from './pages/SignUp';
import Single from './pages/Single';
import { AuthContextProvider } from './context/AuthContext';
import Admin from './pages/Admin';
import { useSelector } from 'react-redux';
import {Toaster} from 'react-hot-toast'

const App = () => {
  const user = useSelector(state => state.user.currentUser);
  // const user = true;
  return (
    <>
      <AuthContextProvider>
        <Toaster position='top-right'/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/menu/:category" element={<MenuPage />} />
            <Route path='/order-tracking' element={<OrderTracking />} />
            <Route path='/signup' element={user ? <Navigate to="/" /> : <SignUp />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/pizza/:id' element={<Single />} />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </>
  )
}

export default App