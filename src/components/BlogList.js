import React from 'react'

export default function BlogList(props){
    return (
        <div>
            <h1>{props.blogs.title}</h1>
            <p>{props.blogs.content}</p>
        </div>
    )
}