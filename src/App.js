import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import NotFound from './Page/Erro404';
import Navbar from './components/NavBar'; 
import Footer from './components/Footer';
import Contato from './Page/Contato/index';
import PaginaHome from './Page/Home/index';
import SobreNos from './Page/SobreNos/index';
import Cursos from './Page/Cursos/index';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<PaginaHome />} />
          <Route path="/sobre-nos" element={<SobreNos />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
