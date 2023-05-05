import React, { useState, useEffect } from 'react'
// import memeData from "../memeData"

function Meme() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImg: "http://i.imgflip.com/1bij.jpg"
    });
    /**
     * Challenge: 
     * As soon as the Meme component loads the first time,
     * make an API call to "https://api.imgflip.com/get_memes".
     * 
     * When the data comes in, save just the memes array part
     * of that data to the `allMemes` state
     * 
     * Think about if there are any dependencies that, if they
     * changed, you'd want to cause to re-run this function.
     * 
     * Hint: for now, don't try to use an async/await function.
     * Instead, use `.then()` blocks to resolve the promises
     * from using `fetch`. We'll learn why after this challenge.
     */
    const [allMemeImages, setAllMemeImages] = useState([])
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImages(data))
    }, [])
    function getNewImage() {

        setMeme((prevMeme) => {
            return {
                ...prevMeme,
                randomImg: allMemeImages.data.memes[Math.floor(Math.random() * allMemeImages.data.memes.length)].url
            }
        })
    }
    function handleChange(event) {
        const { name, value } = event.target
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }
    return (
        <div className='flex flex-col items-center'>

            <div className='flex flex-col w-full'>
                <div className='grid w-full grid-cols-2 gap-6'>
                    <input type="text"
                        className='p-2 rounded-lg border border-black grow-1 '
                        placeholder='Top Text'
                        onChange={handleChange}
                        name="topText"
                        value={meme.topText}
                    />
                    <input
                        type="text"
                        className='p-2 rounded-lg border border-black grow-1'
                        placeholder='Bottom Text'
                        onChange={handleChange}
                        name="bottomText"
                        value={meme.bottomText}
                    />
                </div>
                <button onClick={getNewImage} className='mt-5 w-full bg-gradient-to-r from-[#672280] to-[#A626D3] py-3 rounded-lg text-white'>Get a new meme image</button>
            </div>
            <div className='relative'>
                <img src={meme.randomImg} className="mt-6 max-w-full h-auto object-contain" alt="" />
                <h2 className='meme--text top-0 translate-y-[50%]'>{meme.topText}</h2>
                <h2 className='meme--text bottom-0'>{meme.bottomText}</h2>
            </div>
        </div>
    )
}

export default Meme