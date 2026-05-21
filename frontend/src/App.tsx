import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Servicos from './pages/Servicos';
import Equipe from './pages/Equipe';
import Contato from './pages/Contato';
import MainLayout from './layouts/MainLayout';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/equipe" element={<Equipe />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
