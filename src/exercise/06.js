// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
import {useState} from "react";

function UsernameForm({onSubmitUsername}) {

    const [inputValue, setInputValue] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event)
        onSubmitUsername(inputValue);
    }

    const handleChange = (event) => {
        setInputValue(event.target.value.toLowerCase());
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input onChange={handleChange} value={inputValue} id="username" type="text" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
