import React from 'react';

const Contato = () => {
  return (
    <div>
      <div className="bg-wihte h-28 flex items-center container mx-auto">
        <h1 className="text-3xl font-bold mb-4">Fale Conosco</h1>
      </div>

      <div className="h-screen bg-gray-50">
        <div className="container mx-auto p-8">
          <form>
            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4">
                <label htmlFor="nome" className="block text-gray-700 font-semibold mb-2">Nome</label>
                <input type="text" id="nome" name="nome" placeholder="Seu nome"
                  className="w-full border border-gray-500 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                <input type="email" id="email" name="email" placeholder="Seu email"
                  className="w-full border border-gray-500 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" />
              </div>

              <div className="mb-4">
                <label htmlFor="mensagem" className="block text-gray-700 font-semibold mb-2">Telefone / Whatsapp</label>
                <input id="mensagem" name="mensagem" placeholder="Seu Telefone / Whatsapp"
                  className="w-full border border-gray-500 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"></input>
              </div>

              <div className="mb-4">
                <label htmlFor="mensagem" className="block text-gray-700 font-semibold mb-2">Assunto</label>
                <input id="mensagem" name="mensagem" placeholder="Assunto"
                  className="w-full border border-gray-500 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"></input>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="mensagem" className="block text-gray-700 font-semibold mb-2">Mensagem</label>
              <textarea id="mensagem" name="mensagem" placeholder="Sua mensagem"
                className="w-full h-40 border border-gray-500 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"></textarea>
            </div>

            <div className="text-center">
              <button type="submit"
                className="w-96 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contato;
