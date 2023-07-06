import React from "react";

const SearchBox = ({searchField, onSearchChange}) => {
    return (<div className={'pa2'}>
        <input
            className={'pa3 ba b--green bg-light-blue'}
            type={"search"}
            placeholder={"Search robot"}
            onChange={onSearchChange}
        />
    </div>);
}

export default SearchBox;