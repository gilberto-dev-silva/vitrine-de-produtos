import React from 'react';

const CoursePage = () => {
  return (
    <div>
      <div className="bg-wihte h-28 flex items-center container mx-auto">
        <h1 className="text-3xl font-bold mb-4">Nosso Cursos</h1>
      </div>

      <div className="h-screen bg-gray-50 py-10">
        <div className="container mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProductCurso
              image={require('../../assets/mecanica.jpg')}
              name="Mecânica"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis commodo velit, et tempor sem."
              price="R$ 100,00"
            />
            <ProductCurso
              image={require('../../assets/mecanica.jpg')}
              name="Gestão"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis commodo velit, et tempor sem."
              price="R$ 100,00"
            />

            <ProductCurso
              image={require('../../assets/mecanica.jpg')}
              name="Manutenção Automotiva"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis commodo velit, et tempor sem."
              price="R$ 100,00"
            />
          </div>
          </div>
        </div>
      </div>
  );
};


function ProductCurso({ image, name, description, price }) {
  return (
    <div className="bg-white shadow-md rounded transition duration-150 ease-out hover:ease-in p-4">
      <img src={image} alt={name} className="mb-4" />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-500 mb-2">{description}</p>
      <div className="flex justify-center">
        <button className="w-full bg-green-500 hover:bg-green-700 uppercase text-white px-4 py-2 rounded-md mt-4">Saiba Mais</button>
      </div>
    </div>
  );
}

export default CoursePage;
