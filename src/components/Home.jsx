import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">Bienvenido a Rick Pepinillo</h1>
      <img src="https://www.lavanguardia.com/files/article_gallery_microformat/uploads/2018/09/10/5fa445c36a75c.gif" alt="Rick Pepinillo" />
      <p className="mt-4">Explora el universo de Rick y Morty con nuestra API dedicada.</p>
    </div>
  );
}

export default Home;
