'use client' // client site rendering

import Link from "next/link"
import Image from "next/image"


const Clicked = () => {
   alert ("Clicked")
}


// create function and export

let Home = () => {
     return( 
        <div>
        
        <h1> heading </h1>
        <Link href="about">hasan</Link>
        
        <button onClick={Clicked}>click me</button>
        
        </div>
        
     )
}

export default Home