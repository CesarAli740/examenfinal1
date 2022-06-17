import React from 'react'

function Cards({name, precio}) {
    return (
        <div className='card-contenedor'>
                <img src="" alt="Imagen de pelota" />
                <hr/>
                <span> {name} </span>
                <span> {precio} </span>
        </div>
    )
}

export {Cards}