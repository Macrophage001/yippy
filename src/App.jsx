import React, { useState } from 'react'
import './App.css';

import Header from './components/header';
import SearchBar from './components/searchBar';
import SearchResult from './components/searchResult';

const App = () => {
  const [url, setUrl] = useState('');

  return (
    <div className='search-main'>
      <Header />
      <SearchBar setUrl={setUrl} />
      <SearchResult url={url} />
    </div>
  );
}

export default App;
