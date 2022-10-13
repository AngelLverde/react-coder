import React from 'react'
import logo from '../../assets/icono-carrito-compra.png'
import "./Navbar.css";
import { Nav } from '../Nav/Nav';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';



const Navbar = () => {

    const categorias = [
        { nombre: 'Home', ruta: ''},
        {id:0, nombre: 'Celulares', ruta:'/categoria/Celulares'},
        {id:1, nombre: 'Tablets', ruta:'/categoria/Tablets'},
        {id:2, nombre: 'Parlantes', ruta:'/categoria/Parlantes'},
        {id:3, nombre: 'Computadoras', ruta:'/categoria/Computadoras'}, 
    ]

 
    return (
        <header>
            <NavLink to={"/"}>
            <img src={logo}  alt='logo'/>
            </NavLink>
      
        <h1> Tienda Online </h1>
        <NavLink>
<Nav categorias={categorias} />
        </NavLink>
        
        <NavLink to= "/cart"> 
        <CartWidget /> 
        </NavLink>
        
        
        
        </header>
        
    )
}

export default Navbar
