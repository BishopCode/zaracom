import React, { useState } from 'react';
import './search.scss';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import { filterProducts } from '../../core/store/reducer/products/products.thunk';

function Search() {
  const dispatch = useDispatch();
  const [textValue, setTextValue] = useState('');

  function handleOnchangeInput(event) {
    setTextValue(event.target.value);
  }

  function handleSearch() {
    dispatch(filterProducts(textValue));
  }

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Busca..."
        value={textValue}
        onChange={handleOnchangeInput}
      ></input>
      <button className="search__button">
        <SearchIcon className="icon" onClick={handleSearch} />
      </button>
    </div>
  );
}

export default Search;
