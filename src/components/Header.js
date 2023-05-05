import React from 'react'
import troll from "../images/troll-face.svg"
function Header() {
    return (
        <div className='flex items-center justify-between px-10 py-3 bg-gradient-to-r from-[#672280] to-[#A626D3]'>
            <div className='flex items-center'>
                <img src={troll} alt="" />
                <h1 className='text-white font-bold text-xl ml-2'>Meme Generator</h1>
            </div>
            <span className='text-white text-sm'>React Course - Project 3</span>
        </div>
    )
}

export default Header