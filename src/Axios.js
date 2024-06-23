import React, { useState } from 'react'
import axios from 'axios';
const url = 'https://icanhazdadjoke.com/';
const Axios = () => {
    const [joke, setJoke] = useState('');
    const fetchData = async () => {
        try{
            const { data } = await axios(url,{
                headers: {
                    Accept: 'application/json',
                }
            });
           setJoke(data.joke);
        }catch (error){
            console.log(error.response);
        }
    }
  return (
    <>
        <h1>Jokes</h1>
        <button onClick={fetchData}>Click here for Jokes</button>
        <p>{joke}</p>
    </>
  )
}

export default Axios