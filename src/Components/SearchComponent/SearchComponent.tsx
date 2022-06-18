import React, { useState } from 'react';
import SearchComponentWrap from './SearchComponentSC';

type SearchProps = {
  width: string;
  placeholder: string;
  className?: string;
}

const SearchComponent:React.FC<SearchProps> = ({ width, className, placeholder }) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <SearchComponentWrap width={width}>
      <input
        type="text"
        placeholder={placeholder}
        onChange={((e) => setInputValue(e.target.value))}
        className={className}
      />
      <button type="button">
        <img src={require('../../assets/Images/search/search.svg')} alt="" />
      </button>
    </SearchComponentWrap>
  );
};

export default SearchComponent;
