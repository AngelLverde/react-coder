import React from 'react'
import logo from '../../assets/logo.jpg'

import "./Header.css"



const Navbar = () => {
    return (
        <header>
        <img src={logo}  alt='logo'/>
        <h1> Mi primer pagina con React </h1>
        <nav>
        <a href=''> Categoria 1</a>
        <a href=''> Categoria 1</a>
        <a href=''> Categoria 1</a>
        </nav>
        
        </header>
        
    )
}

export default Navbar
