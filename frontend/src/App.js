import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Register from './pages/Register'
import Home from './pages/Home'
import Login from './pages/Login'
import Navbar  from './components/Navbar'
import { useAuthContext } from './hooks/useAuthContext'

function App() {
  const { user } = useAuthContext()
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/register' element={user ? <Navigate to='/' /> : <Register />} />
          <Route path='/' element={!user ? <Navigate to='/login' /> : <Home />} />
          <Route path='/login' element={user ? <Navigate to='/' /> : <Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
