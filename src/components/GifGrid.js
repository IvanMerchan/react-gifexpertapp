// import React, { useEffect, useState } from 'react'
// import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { category } ) => {
    

    const { data: images, loading } = useFetchGifs( category );

    return (
        <>
            <h3 className="animate__animated animate__bounce animate__fadeIn">{ category }</h3>

            { loading && <p className="card animate__animated animate__bounce animate__flash">loading</p>}
      
            <div className='card-grid'>
                
                {   images.map(  img  => (
                        <GifGridItem 
                            key = { img.id }
                            { ...img } 
                        />
                    ))  
                }
            
            </div>
        </>
  )
}
