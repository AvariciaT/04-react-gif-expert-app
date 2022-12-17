import { useState, useEffect } from "react";

import { GifGridItem } from "./GifGridItem.jsx";
import { useFecthGifs } from "../hooks/useFecthGifs.js";

export const GifGrid = ({ category, onDelete }) => {

  const { images, isLoading } = useFecthGifs( category );

  return (
    <>
        {/* opcion para borrar */}
        <div className='headSearch'>
          <div className="headSearch__nameSearch">{ category }</div>  
          <div className="buttonsSearch">
            <div className="buttonsSearch__item" onClick={ (e) => onDelete(category) }> 
                <div className="buttonsSearch__delete close icon"></div>
            </div>
          </div>
        </div>

        {
          isLoading && (<h2>Cargando...</h2>)
        }
        
        <div className="card-grid">
          {  
            images.map(( image )  => (
              <GifGridItem 
                key={image.id}
                // Esparcir todos los elementos dentro de la 'image'.
                { ...image }
              />
            ))

          }
       </div>
    </>
  )
}
// color libro : #F8F3E9  