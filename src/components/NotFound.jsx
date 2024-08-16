import React from 'react';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">404 - Página no encontrada</h1>
      <img src="https://revistadiners.com.co/wp-content/uploads/2018/09/rickmorty_1200x800.jpg" alt="Rick and Morty Lost in Space" />
      <p className="mt-4">Oops! Parece que esta página no existe en el universo de Rick y Morty.</p>
    </div>
  );
}

export default NotFound;
