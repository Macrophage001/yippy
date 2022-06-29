import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const API_KEY = 'Vsii7a68GfAOzpDNqf6k9e69U1JtfnlC';

const SearchBar = (props) => {
  const [search, setSearch] = useState('cheeseburgers');
  const [result, setResult] = useState({});

  const doSearch = async () => {
    const response = await axios.get("https://api.giphy.com/v1/gifs/search", {
      params: {
        api_key: API_KEY,
        q: search
      }
    });
    console.log(response.data.data[0]);
  }

  return (
    <div>
      <button onClick={doSearch} />
    </div>
  );
}

export default SearchBar;
