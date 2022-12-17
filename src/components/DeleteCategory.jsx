import { useState } from "react";


export const DeleteCategory = ( props ) => {

  const [ stateItem, setStateItem ] = useState( props.state );

  const singleDelete = () => {
        // Cambiamos el estado a true, para eliminar
        setStateItem(true); 
        // Verificar si está listo para eliminar
        if (stateItem == true){

            console.log('Eliminado:',props.category,stateItem);

            const newListCategories = props.categories.filter( cate => cate != props.category);
            console.log(newListCategories);
            props.setCategories(newListCategories); 

        }
    }

  return (
    <>
        <div className="buttonsSearch">{stateItem+']'}
            <div className="buttonsSearch__item" onClick={ singleDelete }>
                <div className="buttonsSearch__delete close icon"></div>
            </div>
        </div>
    </>
  )
}
