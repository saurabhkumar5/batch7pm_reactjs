import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div>
         <header>
               <div className='logo'>Swiggy</div>
               <ul className='nav'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/service'>services</Link>
               </ul>
             </header>

    </div>
  )
}

export default Header;