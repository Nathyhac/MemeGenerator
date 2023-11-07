import React from "react";
import './Form.css'
import memeData from "../memeData";

function Form(){
    

    const [allMemeImages, setAllMemeImages] = React.useState(memeData)

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/gtj5t.jpg"

    })

     function memeImageHandler(){
        const memeArray=allMemeImages.data.memes
        const randomNumber=Math.floor(Math.random()*memeArray.length)
        const url = memeArray[randomNumber].url

        setMeme(previmage=>({...previmage, randomImage:url}))   
    
     }
       
     function handleChange(event){
        const {name,value} = event.target
        setMeme(prevmeme=>
            (
                {...prevmeme,
                     [name]: value
                }
                ))   
     }

    return(
       <main>
       <div className="input-form">
        <input 
        type="text"
         className="form-input"
         placeholder="top text"
         name="topText"
         value={meme.topText}
         onChange={handleChange}
         />

        <input 
        type="text" 
         className="form-input" 
         name="bottomText"
         value={meme.bottomText}
         placeholder="bottom text"
         onChange={handleChange}
         />

        <button 
        type="button" 
        className="form-button" 
        onClick={memeImageHandler}> 
        Get a new meme image 
        </button> 
        </div>

        <div className=" meme-image-container">
        <img
         src={meme.randomImage}
         alt="the-meme" 
         className="meme-image"/> 
         <h2 className="meme--text top">{meme.topText}</h2>
         <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
       
        </main>
    )
}

export default Form

