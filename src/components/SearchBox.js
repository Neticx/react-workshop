import React from 'react'

const SearchBox = (props) => {
    return (
        <div>
            <input type="text" onInput={props.onSearch}/>
        </div>
    )
}

export default SearchBox