import React from 'react';
import { useState } from 'react';
import axios from 'axios';

import '../styles/searchBar.css';


// Darnell API: Vsii7a68GfAOzpDNqf6k9e69U1JtfnlC
const API_KEY = 'Vsii7a68GfAOzpDNqf6k9e69U1JtfnlC';

const tryCatch = (t, e = (err) => console.error(err)) => {
  return (...args) => {
    try {
      console.log(...args);
      return t.apply(this, args);
    } catch (err) {
      return e(err);
    }
  }
};

const SearchBar = (props) => {
  const [search, setSearch] = useState('');

  const { setUrl } = props;

  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    tryCatch(async () => {
      const response = await axios.get("https://api.giphy.com/v1/gifs/search", {
        params: {
          api_key: API_KEY,
          q: search
        }
      });
      setUrl(response.data.data[0].images.original.url);
    })('hello', 'world');
  }

  return (
    <div className='search-bar'>
      <form className='search-form' onSubmit={handleSubmit}>
        <input type="text" value={search} placeholder="Search..." onChange={handleChange} />
        <button type="submit" className="btn btn-primary">
          <img src="assets/search.png" alt="search-icon" style={{ width: '75%', height: '75%' }} />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
