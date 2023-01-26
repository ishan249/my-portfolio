import React from 'react'
import "../Homepage/Homepage.css"
import {motion } from 'framer-motion'
import {Link} from "react-router-dom";
function HomePageBtn() {
  return (
    <div className='mainDiv mt-4'>
        <div className='mainBody'>
            <motion.div
            initial={{opacity:0,translateY:40}}
            animate={{opacity:1,translateY:0}}
            transition={{duration:1.6}}
            className='flex justify-center'>
            <Link to="/Contact">
            <button className='font-AlbertSans bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded m-4'>Get in Touch</button>
            </Link>
            <Link to="/Blogs">
            <button className='font-AlbertSans bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-500 rounded m-4'>Blogs</button>
            </Link>
            </motion.div>
        </div>
    </div>
  )
}

export default HomePageBtn