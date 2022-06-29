import React  from 'react';
import { useState } from 'react';
import axios from 'axios';

const SearchBar = (props)=> {
    const [search, setSearch] = useState('');
    const [result, setResult] = useState({});

        const doSearch = async()=>{
            const response = await axios.get("api.giphy.com/v1/gifs/search",{ params: { api_key: 'mBe4ig1gEFbTUtwNTTDyFcVJ4KdbqqGF',
             q:"cheeseburgers" } }
            )
            setResult(response.data)
            console.log(response.data)
            // props.setUrl()
        }

  return (
    <div>
      <button onClick={doSearch} />
    </div>
  );
}

export default SearchBar;
