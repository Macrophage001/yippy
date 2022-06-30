import React from 'react'

import '../styles/searchResult.css';

const SearchResult = (props) => {
    const { url } = props;
    return (
        <div className='search-result' style={url ? { display: 'block' } : { display: 'none' }}>
            <img className='search-img' src={url} alt="giphy_image" />
        </div>
    )
}

export default SearchResult;
