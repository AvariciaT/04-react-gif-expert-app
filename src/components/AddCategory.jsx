import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {
  
    const [inputValue, setInputValue] = useState('')
    // Captar la escritura dentro del input
    const onInputChange = ({target}) => {
      setInputValue(target.value);
    };
    // Enviar palabra para añadir una búsqueda
    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;
        // setCategories((categories)=>[inputValue,...categories]);    
        onNewCategory(inputValue.trim().toLowerCase());
        setInputValue('');   
        
    };

  return (
    <form onSubmit={onSubmit}>
         <input 
        type="text"
        placeholder="Buscar Gif"
        value={inputValue}
        onChange={(event)=>{return onInputChange(event)}}
        />
    </form>
  )

}
