import React from 'react'
import { Link } from 'react-router-dom'

export default function LandingPage(){
    return(
        <div>
            <h1>Welcome to my Pokemon App</h1>
            <Link to='/Home'>
                <button>Let's go!</button>
            </Link>
        </div>
    )
}