import React, { useState } from 'react';

const Search = ({ setAnime }) => {
  const [animeInput, setAnimeInput] = useState('');

  const handleChange = (event) => {
    setAnimeInput(event.target.value);
  };

  const fetchAnime = (event) => {
    event.preventDefault();

    fetch(`https://animechan.xyz/api/search?anime=${animeInput}`)
      .then((res) => res.json())
      .then((res) => {
        setAnimeInput('');
        setAnime(res[0]); // Assuming setAnime is a prop callback to update state in a parent component
        console.log(res);
      })
      .catch((error) => {
        console.error('Error fetching anime data:', error);
      });
  };

  return (
    <nav>
      <form onSubmit={fetchAnime}>
        <input
          type="text"
          onChange={handleChange}
          value={animeInput}
          placeholder="Anime show"
        />
        <button type="submit">
          <img 
            src="https://via.placeholder.com/50"// Placeholder image, replace with actual image source
            alt="Anime Button"
            className="anime-button"
          />
        </button>
      </form>
    </nav>
  );
};

export default Search;
