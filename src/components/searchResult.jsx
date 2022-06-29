import React from 'react'

const SearchResult = (props) => {
    const { url } = props;
    return (
        <div>
            <img src={url} alt="giphy_image" />
        </div>
    )
}

export default SearchResult;
