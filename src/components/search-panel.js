import React from 'react';
import './search-panel.css';

const SearchPanel = () => {
        const searchStyle = {
                fontSize: '25px'
        }
        return (
        <input  className="search-panel"
                style={searchStyle}
                placeholder="search"
                />
        );
};

export default SearchPanel;
