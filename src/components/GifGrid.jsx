import { useState, useEffect } from "react";

import { GifGridItem } from "./GifGridItem.jsx";
import { useFecthGifs } from "../hooks/useFecthGifs.js";

export const GifGrid = ({ category, onDeleteSection, onUpdateSection }) => {

  const { images, isLoading, setImages } = useFecthGifs( category );
  
  const [inputValueSection, setInputValueSection] = useState(category);
  
  const [isEdit, setIsEdit] = useState(false);

  // Para eliminar cards de la sección
  function handleDeleteCard(idCategoryItem) {
    const newListCategoriesItem = images.filter( element => element.id != idCategoryItem);
    setImages(newListCategoriesItem);
    // console.log('Quedan:', newListCategoriesItem);
  }
  // Captar la escritura dentro del input
  const onInputChangeSection = ({target}) => {
    setInputValueSection(target.value);
  };
  // Enviar palabra para modificar la sección
  const onSubmitSection = (event) => {
      event.preventDefault();
      if (inputValueSection.trim().length <= 1) return;
      onUpdateSection(category, inputValueSection.trim().toLowerCase());
      setInputValueSection('');   
  };
  // Habilitar formulario para actualizar la sección
  function ButtonEdit() {
    return (
      <div className="buttonsSearch__item bg-yellow-500 hover:bg-yellow-600" onClick={ (e) => setIsEdit(true) }> 
        <div className="buttonsSearch__edit edit icon"></div>
      </div>
    )
  }

  return (
    <>
        {/* opcion para borrar */}
        <div className='headSearch'>
          <div className="headSearch__nameSearch">{ category }</div>  
          <div className="buttonsSearch">

            { isEdit ? 
            (
              <form onSubmit={onSubmitSection}>
                <div className="buttonsSearch__item"> 
                  <input 
                  className="buttonsSearch__newEdit"
                  type="text" 
                  placeholder="Update" 
                  onChange={onInputChangeSection}
                  value={inputValueSection} />
                </div>
              </form> 
            ) : ( <ButtonEdit /> )
            }
          
            <div className="buttonsSearch__item" onClick={ (e) => onDeleteSection(category) }> 
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
                onDeleteCard={handleDeleteCard}
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