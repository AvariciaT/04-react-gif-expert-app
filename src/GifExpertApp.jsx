import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components';
import './GitExpertApp.css';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['adfgh','dbz','javascript' ]);

  const onAddCategory = (newCategory) =>{
    
    if (categories.includes(newCategory)) return;

    const temp = [...categories];
    temp.unshift(newCategory);
    setCategories(temp);
    // setCategories([newCategory, ...categories]);     
    // setCategories((categories)=>[inputValue,...categories]);    
  }

  function handleDeleteSection(nameCategoryItem) {
    
    const newListCategories = categories.filter( element => element != nameCategoryItem);
    setCategories(newListCategories);
    // console.log('Quedan:', newListCategories);

  }

  function handleUpdateSection(nameCategorySection, newNameSection = 'bulma') {

    if (categories.includes(newNameSection)) return;

    if (categories.includes(nameCategorySection)){
      const newListCategoriesx = categories.filter( element => element != nameCategorySection);
      // posicion del elemento - 1: reemplazar, 0: agregar - valor
      newListCategoriesx.splice(categories.indexOf(nameCategorySection), 0, newNameSection);
      setCategories(newListCategoriesx);
      // console.log(newListCategoriesx);
    }

  }
  
  function handleDeleteAll(event) {
    if (categories.length == 0) return;
    setCategories([]);
    // console.log('Eliminados:',categories);
  }

  return (
    <>
      <h1 className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-700 px-4 py-2 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:text-2xl">GifExpertApp-Main</h1>
      <AddCategory 
      onNewCategory={event=> onAddCategory(event)}
      />
      
      <div className='headSearch'>
        <div className="buttonsSearch">
          <input className="buttonsSearch__item buttonsSearch__deleteAll inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 sm:ml-3 sm:w-auto sm:text-sm" type="submit" value="Delete All" onClick={ (event) => handleDeleteAll(event) } />          
        </div>  
      </div>
      
      {
      // categories.map((category)=>{
      //     return (
      //       <li key={ category }> { category } </li>
      //     )
      //   })
      categories.map(( category )=> ( <GifGrid key={category} category={category} onDeleteSection={handleDeleteSection} onUpdateSection={handleUpdateSection} /> )) 
      }
    </>
  )
}
