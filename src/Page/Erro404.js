import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-orange-500 mb-4">404</h1>
        <p className="text-xl text-black mb-8">Oops! Página não encontrada.</p>
        <Link to="/" className="block">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
            Voltar para a página inicial
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
