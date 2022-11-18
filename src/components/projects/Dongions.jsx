import React from 'react'
import { NavLink } from 'react-router-dom'

function Dongions() {
  return (
    <div className='project-text-box'>
        <strong>DonGions</strong>
        <div>What's it about</div>
        <article>Web Page based on a role game created by me, used as an additional tool to create a character, visit a shop, create notes, count lots of different statistics, 
        find and filter information, complete guide about the game
        </article>
        <div>What I used:</div>
        <article>Express.js, HTTP-errors, Morgan, Mongoose, Multer, Bcrypt and Cloudinary, React.js, Moment, Framer-motion, CORS, Bootstrap and Font-Awesome, among others.</article>
        <a href="https://www.google.com">Link to the Web Page</a>
    </div>
  )
}

export default Dongions