import React, { useState } from 'react';
import './App.css';
var axios = require('axios')
require('dotenv').config();

function App() {
  const [recipeLink, setRecipeLink] = useState("");
  const [response, setResponse] = useState("");
  const zylaAPIKey = process.env.ZYLA_API_KEY

  const parseRecipe = async () => {
    const config = {
      method: "GET",
      url: "https://zylalabs.com/api/1920/recipe+parser+api/1629/recipe+parser?source=Required",
      headers: {
        "Authorization": "Bearer" + zylaAPIKey
      },
      source: JSON.stringify(recipeLink),
    }
    axios(config).then(function (res: any){
      if (res.ok) {
        console.log("WOOHOO!")
        const data = JSON.stringify(res.data)
        setResponse(data);
      }
    })
    .catch(function(error: any){
      console.log(error);
    })
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        width: "20%", 
        margin: '0 auto',
        paddingTop: "150px",
        gap: '20px'
      }}>
        <input placeholder='Recipe link' onChange={(e) => setRecipeLink(e.target.value)}/>
        <button onClick={parseRecipe}>Break it down for me!</button>
        <textarea id="recipeInput" disabled style={{ height: "50px" }} value={response} />
      </div>
    </div>
  );
}

export default App;