import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
        <div className="nav">

          <div className="h2">
              <img src="https://bellissimo.uz/_next/image?url=%2Fimages%2Flogo.png&w=320&q=75" alt="" />
          </div>

          <div className="h3">
           <img src="https://bellissimo.uz/_next/image?url=%2Fimages%2Fhalal.png&w=64&q=75" alt="" />
           <Link to="/">
            Home
           </Link>
           <Link to="/card">
            Savatcha
           </Link>
          </div>
          

       
        </div>
    </>
  )
}

export default Nav