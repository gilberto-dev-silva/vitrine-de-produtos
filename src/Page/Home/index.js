import React from 'react';

const PaginaHome = () => {
  return (
    <div>
      <header className="bg-green-500 py-4 text-white text-center">
        <h1 className="text-4xl font-bold">Bem-vindo ao Site de Ferramentas</h1>
        <p>Encontre as melhores ferramentas para suas necessidades!</p>
      </header>

      <div className="bg-wihte h-28 flex items-center container mx-auto">
        <h1 className="text-3xl font-bold mb-4">Nossos Produtos</h1>
      </div>

      <section className="h-screen bg-gray-50 py-8 px-4">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <ProductCard
            image={require('../../assets/medidor.jpg')}
            name="Ferramenta 1"
            description="Descrição da Ferramenta 1"
            price="R$ 100,00"
          />
          <ProductCard
            image={require('../../assets/lixadeira.jpg')}
            name="Ferramenta 2"
            description="Descrição da Ferramenta 2"
            price="R$ 120,00"
          />
          <ProductCard
            image={require('../../assets/maquina-de-corte.jpg')}
            name="Ferramenta 3"
            description="Descrição da Ferramenta 3"
            price="R$ 90,00"
          />
          <ProductCard
            image={require('../../assets/maquina-de-pintura.jpg')}
            name="Ferramenta 4"
            description="Descrição da Ferramenta 4"
            price="R$ 80,00"
          />
        </div>
      </section>
    </div>
  );
}

function ProductCard({ image, name, description, price }) {
  return (
    <div className="bg-white shadow-md rounded transition duration-150 ease-out hover:ease-in p-4">
      <img src={image} alt={name} className="mb-4" />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-500 mb-2">{description}</p>
      <p className="text-green-500 font-bold">{price}</p>
      <div className="flex justify-center">
        <button className="w-full bg-green-500 hover:bg-green-700 uppercase text-white px-4 py-2 rounded-md mt-4">Saiba Mais</button>
      </div>
    </div>
  );
}

export default PaginaHome;
