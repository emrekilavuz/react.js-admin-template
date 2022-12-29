import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './layout/Sidebar';
import Header from './layout/Header';
import Dashboard from './pages/Dashboard';
import Landing from './pages/Landing';
function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar/>
          <div className='mainPage'>
            <Header/>
            <Routes>
              <Route path="/" element={<Dashboard/>} />
              <Route path="/landing" element={<Landing/>} />
            </Routes>
          </div>
      </BrowserRouter>
    </>
  );
}

export default App;
