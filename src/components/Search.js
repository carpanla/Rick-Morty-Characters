import React from 'react';
import '../stylesheets/search.css';

import PropTypes from 'prop-types';

const Search = props => {

    const onChangeHandler = (event) => {
        props.onChangeHandler(event.target.value)
    }
    return <div>
            <form className="search__container" action="" method="POST">
                <label htmlFor="name"></label>
                <input className="search__input" type="text" value={props.value} name="name" placeholder="Name" onChange={onChangeHandler}  />
            </form>
    </div>
};

Search.propTypes = {
    search: PropTypes.string
};

export default Search;