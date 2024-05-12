import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-orange-500 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-lg">Logo</Link>
        <ul className="flex">
          <li className="mx-3"><Link to="/" className="text-white font-semibold uppercase hover:text-black">Home</Link></li>
          <li className="mx-3"><Link to="/sobre-nos" className="text-white font-semibold uppercase hover:text-black">Sobre</Link></li>
          <li className="mx-3"><Link to="/cursos" className="text-white font-semibold uppercase hover:text-black">Cursos</Link></li>
          <li className="mx-3"><Link to="/contato" className="text-white font-semibold uppercase hover:text-black">Contato</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
