import React from 'react'

const SearchBox = (props) => {
    return (
        <div className="col-md-12">
            <input type="text" onInput={props.onSearch} className="form-control" placeholder="search something here/>
        </div>
    )
}

export default SearchBox