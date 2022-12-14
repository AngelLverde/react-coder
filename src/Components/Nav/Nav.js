import React from "react";
import { Link } from 'react-router-dom'



export const Nav = ({categorias}) => {
    return (
        <nav className="categorias">
        {categorias.map((categoria)=> {
            return <Link key={categoria.id} to={categoria.ruta}>{categoria.nombre}</Link>
        })}
        </nav>
    )

}





