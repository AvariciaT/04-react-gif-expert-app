import { useState, useEffect } from "react";

import { GifGridItem } from "./GifGridItem.jsx";
import { useFecthGifs } from "../hooks/useFecthGifs.js";

export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFecthGifs( category );

  return (
    <>
        <h3>{category}</h3>
        {
          isLoading && (<h2>Cargando...</h2>)
        }
        
        <div className="card-grid">
          {  
            images.map(( image )  => (
              <GifGridItem 
                key={image.id}
                // esparcir todos los elementos dentro de la 'image'
                { ...image }
              />
            ))

          }
       </div>
    </>
  )
}
// color libro : #F8F3E9  