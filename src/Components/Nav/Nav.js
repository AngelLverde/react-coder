import React from "react";


export const Nav = ({categorias}) => {
    return (
        <nav>
        {categorias.map((categoria)=> {
            return <a key={categoria.id} href=''>{categoria.nombre}</a>
        })}
        </nav>
    )

}