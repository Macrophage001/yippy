import React, { useState } from 'react'
import './App.css';

import Header from './components/header';
import SearchResult from './components/searchResult';

const App = () => {
  const [url, setUrl] = useState('');

  return (
    <div>
      <Header />
      {/* Searchbar Go Here. */}

      <SearchResult url={url} />
    </div>
  );
}

export default App;
