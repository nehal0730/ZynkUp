import React from 'react'
import "../App.css"
import { Link, useNavigate } from 'react-router-dom'

export default function LandingPage() {

  const router = useNavigate();

  return (
    <div className='landingPageContainer'>
      <nav>
        <div className='navHeader'>
          <h2>ZynkUp</h2>
        </div>

        <div className='navlist'>
          
          <p className='nav1' onClick={() => {
            router("/vrnhj34")
          }}>Join as Guest</p>

          <p className='nav2' onClick={() => {
            router("/auth")
          }}>Register</p>

          <div className='nav3' onClick={() => {
            router("/auth")
          }} role='button'>
            <p>Login</p>

          </div>
        </div>
      </nav>

      <div className='landingMainContainer'>
        <div>
          <h1><span style={{color: "#FF9839"}}>Connect</span> with your loved Ones</h1>
          <p>Cover a distance by ZynkUp</p>
          <div role='button'>
            <Link to={"/auth"}>Get Started</Link>
          </div>
        </div>

        <div>
          <img src="/mobile.png"></img>
        </div>
      </div>
    </div>
  )
}
