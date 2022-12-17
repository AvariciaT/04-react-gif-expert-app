import { useState, useEffect } from "react";

import { GifGridItem } from "./GifGridItem.jsx";
import { useFecthGifs } from "../hooks/useFecthGifs.js";
import { DeleteCategory } from "./DeleteCategory.jsx";

export const GifGrid = ({ category, categories, setCategories }) => {

  const { images, isLoading } = useFecthGifs( category );

  return (
    <>
        {/* opciones para borrar */}
        <div className='headSearch'>
          <div className="headSearch__nameSearch">{ category }</div>  
          <DeleteCategory category={ category } state={ false } categories={categories} setCategories={ setCategories }/>  
        </div>

        {
          isLoading && (<h2>Cargando...</h2>)
        }
        
        <div className="card-grid">
          {  
            images.map(( image )  => (
              <GifGridItem 
                key={image.id}
                // esparcir todos los elementos dentro de la 'image'.
                { ...image }
              />
            ))

          }
       </div>
    </>
  )
}
// color libro : #F8F3E9  