import React from 'react';

const Welcome = () => {
  return (
    <div className="flex flex-row min-h-screen bg-gray-900 text-white">
      <div className="w-1/2 flex justify-center items-center">
        <img src="https://www.formulatv.com/images/noticias/88200/88235/1_VqYBoxWRHN8g9mk1EvF3JLesc20t5z64a.jpg" alt="Welcome to Rick and Morty World" />
      </div>
      <div className="w-1/2 flex flex-col justify-center items-start p-10">
        <h1 className="text-4xl font-bold mb-4">Bienvenido al Universo de Rick y Morty</h1>
        <p>En esta página puedes explorar los diversos personajes de la serie Rick y Morty. Encuentra descripciones detalladas de cada personaje y descubre más sobre sus aventuras y personalidades únicas.</p>
      </div>
    </div>
  );
}

export default Welcome;
