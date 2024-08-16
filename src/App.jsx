import React, { Fragment, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Card from './components/Card';
import CharacterDetail from './components/CharacterDetail';
import Home from './components/Home';
import Welcome from './components/Welcome';
import NotFound from './components/NotFound';  // Asegúrate de que la ruta es correcta

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-center text-white py-4">
      Alexa Vásquez<br />
      Devops - Webapps<br />
      Universidad de Manizales.<br />
      Jhonathan Rodriguez Ramirez<br />
      2024.
    </footer>
  );
};

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('https://rickandmortyapi.com/api/character');
      const response = await data.json();
      setCharacters(response.results);
    };
    fetchData().catch(console.error);
  }, []);

  return (
    <BrowserRouter>
      <Fragment>
        <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
          <Link to="/home" className="text-xl font-bold">Home</Link>
          <Link to="/welcome" className="text-xl font-bold">Welcome</Link>
          <Link to="/" className="text-xl font-bold">Personajes</Link>          
        </nav>
        <Routes>
          <Route path="/" element={
            <div className="grid grid-cols-2 mt-20 mx-28 gap-6">
              {characters.map(character => (
                <Card key={character.id} character={character} />
              ))}
            </div>
          } />
          <Route path="/character/:id" element={<CharacterDetail />} />
          <Route path="/home" element={<Home />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
