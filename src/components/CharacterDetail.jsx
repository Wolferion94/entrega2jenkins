import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
      const response = await data.json();
      setCharacter(response);
    };
    fetchData().catch(console.error);
  }, [id]);

  if (!character) return <p>Loading...</p>;

  return (
    <div className="p-10">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img className="h-48 w-full object-cover md:h-full md:w-48" src={character.image} alt={character.name} />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{character.species}</div>
            <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{character.name}</a>
            <p className="mt-2 text-gray-500">{character.status}</p>
            <p className="mt-2 text-gray-500">{character.location?.name}</p>
            <p className="mt-2 text-gray-500">{character.origin?.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterDetail;
