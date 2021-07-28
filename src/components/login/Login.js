import React from 'react'
import './Login.scss'
import { loginUrl } from '../../app/spotify'
import SpotifyLogo from '../../assets/spotifylogo.jpeg'

function Login() {
    return (
        <div className='login'>
            {/* <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" /> */}
            <img src={SpotifyLogo} alt="Logo" />
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login