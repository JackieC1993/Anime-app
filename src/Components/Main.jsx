import React from 'react';
import  narutoultimate from "../assets/narutoultimate.png"

const Main = () => {
  
  const animeData = {
    name: 'Anime Name',
    id: 'Anime ID',
    type: 'Anime Type',
    image: narutoultimate,
  };

  return (
    <main className='anime'>
      <div>
        <h2>{animeData.name}</h2>
        <h3>ID: {animeData.id}</h3>
        <h3>Type: {animeData.type}</h3>

        <img
          className="anime2"
          src={animeData.image}
          alt=" narutoAnime"
        />
      </div>
    </main>
  );
};

export default Main;
