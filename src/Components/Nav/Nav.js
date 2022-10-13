import React from "react";
import { Link } from 'react-router-dom'



export const Nav = ({categorias}) => {
    return (
        <nav>
        {categorias.map((categoria)=> {
            return <Link key={categoria.id} to={categoria.ruta}>{categoria.nombre}</Link>
        })}
        </nav>
    )

}