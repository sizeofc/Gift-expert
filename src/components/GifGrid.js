import React from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';




export const GifGrid = ({category} ) => {
  
    const {data,loading} = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>

            {loading? "cargando....":"datos Cargados!"}
        <div className='card-grid'>

            {
                data.map(img => (
                    <GifGridItem
                        key={img.id}
                        {...img} /> //en ves de mandar cada prop individual puedo usar desestructuracion
                                    //en img tiene los atributos id, title, url
                ))
            }

        </div>
        </>
    )
}
