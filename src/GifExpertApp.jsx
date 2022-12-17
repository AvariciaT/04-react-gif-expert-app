import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components';
import './GitExpertApp.css';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['dbz','javascript' ]);

  const onAddCategory = (newCategory) =>{
    
    if (categories.includes(newCategory)) return;
    const temp = [...categories];
    temp.unshift(newCategory);
    setCategories(temp);
    // setCategories([newCategory, ...categories]);     
    // setCategories((categories)=>[inputValue,...categories]);    
  }

  function handleDelete(nameCategoryItem) {
    
    const newListCategories = categories.filter( element => element != nameCategoryItem);
    setCategories(newListCategories);
    // console.log('Quedan:', newListCategories);

  }

  return (
    <>
      <h1>GifExpertApp:</h1>
      <AddCategory 
      onNewCategory={event=> onAddCategory(event)}
      />
      
      <div className='headSearch'>
        <div className="buttonsSearch">
          <input className="buttonsSearch__item buttonsSearch__deleteAll" type="submit" value="Delete All" />          
        </div>  
      </div>
      
      {
      // categories.map((category)=>{
      //     return (
      //       <li key={ category }> { category } </li>
      //     )
      //   })
      categories.map(( category )=> ( <GifGrid key={category} category={category} onDelete={handleDelete} /> )) 
      }
    </>
  )
}
