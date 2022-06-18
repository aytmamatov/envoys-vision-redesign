import React, { useState } from 'react';
import { SearchComponentWrap } from './SearchComponentSC';

type SearchProps = {
  width: string;
  placeholder: string;
  className?: string;
}

const SearchComponent:React.FC<SearchProps> = (props) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <SearchComponentWrap width={props.width}>
      <input
        type="text"
        placeholder={props.placeholder}
        onChange={((e) => setInputValue(e.target.value))}
        className={props.className}
      />
      <button>
        <img src={require('../../assets/Images/search/search.svg')} alt="" />
      </button>
    </SearchComponentWrap>
  );
};

export default SearchComponent;
