import './App.css';
import Header from './componentes/layout/header';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './componentes/layout/footer';
import Register from './pages/Register';
import Login from './pages/Login';
import ProtectedRoute from './controller/ProtectedRoute';
import MyTask from './pages/MyTask';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>}/>

          <Route path="/my-task" element={
            <ProtectedRoute>
              <MyTask/>
            </ProtectedRoute>
          }>
          </Route>

          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard/>
            </ProtectedRoute>
          }></Route>
          
        </Routes>
        <Footer/>
      </>
    </Router>
  );
}

export default App;
