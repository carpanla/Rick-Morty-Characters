import React from 'react';

const Search = props => {

    const onChangeHandler = (event) => {
        props.onChangeHandler(event.target.value)
    }
    return <div>
    <form action="">
        <label htmlFor="name">Name:</label>
        <input type="text" value={props.value} name="name" onChange={onChangeHandler}  />
        </form>
    </div>
    
  };
  

export default Search;