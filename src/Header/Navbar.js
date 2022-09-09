import React from 'react'
import logo from '../assets/logo.jpg';
import "./Navbar.css"
import {Nav} from './Nav/Nav';
import {CartWidget} from'./CartWidget/CartWidget';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';



const categorias = [
    {id:0, nombre: 'categoria 1'},
    {id:1, nombre: 'categoria 2'},
    {id:2, nombre: 'categoria 3'},
    {id:3, nombre: 'categoria 4'}, 
]

const Navbar = ({propgreeting}) => {
    return (
      
        <> 
        <header>
        <img src={logo}  alt='logo'/>
        <Nav categorias={categorias}/>
       <  ItemListContainer ={propgreeting} />
        <CartWidget />
        
      
       

        </header>
        </>
      
    ) 
}

export default Navbar

