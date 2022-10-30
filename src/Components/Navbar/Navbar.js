import React from 'react'
import logopagina from '../../assets/logopagina.png'
import "./Navbar.css";
import { Nav } from '../Nav/Nav';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
import Styled from 'styled-components';


const Navbar = () => {

    const categorias  = [
        {nombre: 'Home', ruta: ''},
        {id:0, nombre: 'Celulares', ruta:'/categoria/Celulares'},
        {id:1, nombre: 'Tablets', ruta:'/categoria/Tablets'},
        {id:2, nombre: 'Parlantes', ruta:'/categoria/Parlantes'},
        {id:3, nombre: 'Computadoras', ruta:'/categoria/Computadoras'}, 
    ]

 
    return (

        <>
        
        <NavContainer> 

            <NavLink to={"/"}>
            <img  src={logopagina}  alt='logo'/>
            </NavLink>
      
        <h1> <span> Shop Online </span> </h1>
        <NavLink>
            <div className='category'> 
                
                < Nav categorias={categorias}  />
             
            
            </div>

        </NavLink>
        
        <NavLink to= "/cart"> 
        <CartWidget /> 
        </NavLink>

        </NavContainer>
        
        </>
        
    )
}

const NavContainer = Styled.nav`
h1{
    color: white;
    font-weight: 500px;
span{
    font-weigth: bold;
}

}
padding: ;
background-color: #333333;
display: flex;
align-items: center;
justify-content: space-around;
}

img{
    width: 80px;
    padding: 0px;
}

div {
    color: white;
}

`







export default Navbar
