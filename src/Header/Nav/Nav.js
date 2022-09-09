import React from "react";
import Navbar from "../Navbar";

export const Nav = ({categorias}) => {
    return (
        <nav>
        {categorias.map((categoria)=> {
            return <a key={categoria.id} href=''>{categoria.nombre}</a>
        })}
        </nav>
    )

}

export default Navbar