import React from 'react';
import debounce from 'lodash.debounce';
import { SearchContext } from '../Home/Home';

import SearchIcon from '../../../src/images/icons/search.svg';
import closeIcon from '../../../src/images/icons/clear.svg';

const Search = ({ searchValue, setSearchValue }) => {
  // const { searchValue, setSearchValue } = React.useContext(SearchContext);

  const inputRef = React.useRef();

  const onClickClear = () => {
    setSearchValue('');
    inputRef.current.focus();
  };

  return (
    <div className="menu__search">
      <div className="menu__search-img">
        <img
          src={SearchIcon}
          alt="Search icon"
        />
      </div>
      <input
        ref={inputRef}
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        className="menu__search-input"
        type="text"
        placeholder="Search"
      />
      {searchValue && (
        <img
          onClick={onClickClear}
          className="menu__search-clear"
          src={closeIcon}
          alt="close"
        />
      )}
    </div>
  );
};

export default Search;
