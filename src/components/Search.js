import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import MoviList from './MoviList';

const Search = () => {
  const [search, setSearch] = useState("");
  console.log(search)
  return (
    <div>
      <Form.Control type="search" placeholder='search by name or rate'
      onChange={(e)=>{setSearch(e.target.value);
      }} />
      <br/>
      <MoviList input={search} />
    </div>
  );
};

export default Search;