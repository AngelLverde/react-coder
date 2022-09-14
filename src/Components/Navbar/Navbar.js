import React from 'react'
import logo from '../../assets/logo.jpg'
import "./Navbar.css";
import { Nav } from '../Nav/Nav';



const Navbar = () => {

    const categorias = [
        {id:0, nombre: 'categoria 1'},
        {id:1, nombre: 'categoria 2'},
        {id:2, nombre: 'categoria 3'},
        {id:3, nombre: 'categoria 4'}, 
    ]


    return (
        <header>
        <img src={logo}  alt='logo'/>
        <h1> Mi primer pagina con React </h1>
        <Nav categorias={categorias}/>
   
        
        </header>
        
    )
}

export default Navbar
