import React from 'react'
import '../../styles/navbar.css'
import avatartIcon from '../../assets/icon/avatar.svg'
import badmintionIcon from '../../assets/icon/badminton-logo.png'
import nemuIcon from '../../assets/icon/menu.svg'

const Navbar = () => {
  return (
    <div className='nav-container'>
        <ul>
            <li>
                <div className='nav-menu'>
                    <img src={nemuIcon} alt='nemuIcon'></img>
                </div>
            </li>
            <li>
                <div className='nav-logo-container'>
                    <div className='nav-logo'>
                        <img src={badmintionIcon} alt='badmintionIcon'></img>
                    </div>
                    <div className='nav-title'>
                        <p>badminton</p>
                        <hr></hr>
                    </div>
                </div>
            </li>
            <li>
                <div className='nav-login-info'>
                    <div className='nav-info-title'>cuong vo</div>
                    <div className='nav-info-icon'>
                        <img src={avatartIcon} alt='avatartIcon'></img>
                    </div>
                </div>
            </li>
        </ul>
        
    </div>
  )
}

export default Navbar