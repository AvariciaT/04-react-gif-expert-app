import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['dbz','javascript' ]);

  const onAddCategory = (newCategory) =>{
    
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);     
    // setCategories((categories)=>[inputValue,...categories]);    
  }

  return (
    <>
      <h1>GifExpertApp: Valeria NGN</h1>
      <AddCategory 
      onNewCategory={event=> onAddCategory(event)}
      />
      {
      // categories.map((category)=>{
      //     return (
      //       <li key={ category }> { category } </li>
      //     )
      //   })
      categories.map((category)=> ( 
          <GifGrid key={category} category={category} />
        ))
      }
    </>
  )
}
