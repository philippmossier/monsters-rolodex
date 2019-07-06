import React from 'react';
import './search-box.styles.css';

export const Searchbox = ({ placeholder, onSearchChange }) => (
    <input
        className="search"
        type="search"
        placeholder={placeholder}
        onChange={onSearchChange}
    />

);