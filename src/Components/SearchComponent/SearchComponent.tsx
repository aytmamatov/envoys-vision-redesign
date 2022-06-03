import React, { useState } from 'react'
import { SearchComponentWrap } from './SearchComponentSC'

type SearchProps = {
  width: string;
}

const SearchComponent:React.FC<SearchProps> = (props) => {
  const [inputValue, setInputValue] = useState('')

  return (
    <SearchComponentWrap width={props.width}>
      <input 
        type="text" 
        placeholder='Поиск (По коду или названию компании)' 
        onChange={((e) => setInputValue(e.target.value))}
      />
      <button>
        <img src={require('../../Assets/Images/search/search.svg')['default']} alt="" />
      </button>
    </SearchComponentWrap>
  )
}

export default SearchComponent