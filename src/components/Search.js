import React from 'react';
import PropTypes from 'prop-types';

const Search = props => {

    const onChangeHandler = (event) => {
        props.onChangeHandler(event.target.value)
    }
    return <div>
    <form action="" method="POST">
        <label htmlFor="name"></label>
        <input type="text" value={props.value} name="name" placeholder="Name" onChange={onChangeHandler}  />
        </form>
    </div>
    
  };

Search.propTypes = {
    search: PropTypes.string
};


export default Search;