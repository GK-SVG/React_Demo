import React from 'react'


export default function Profile(arg){
    const red=()=>{
        alert('This is functional component')
    }
    return <div>
        <h1 onClick={red}>Functional Component {arg.text}</h1>
    </div>
}