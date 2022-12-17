import { useState } from "react";


export const DeleteCategory = ( props ) => {

  const [ stateItem, setStateItem ] = useState( props.state );

  const singleDelete = (event) => {
        // Cambiamos el estado a true, para eliminar
        setStateItem(true); 
        // Verificar si está listo para eliminar
        if (stateItem == true){

            console.log('Eliminado:',props.category,stateItem);

            const newListCategories = props.categories.filter( cate => cate != props.category);
            console.log(newListCategories);
            props.setCategories(newListCategories); 

        }else{
          
          // console.log( event.target.parentElement.parentElement.children[0].innerHTML);
          [...document.querySelectorAll('.headSearch__nameSearch')].forEach((element, index)=>{

            if(document.querySelectorAll('.headSearch__nameSearch')[index].innerHTML == `${props.category}`){
              // console.log(element); dbz  
              // console.log('Listo para borrar'); 
              element.nextElementSibling.children[0].style.background='orange';
              element.nextElementSibling.children[0].children[0].style.background='orange';
            }

          });

        }

    }

  return (
    <>
        <div className="buttonsSearch">
            <div className="buttonsSearch__item" onClick={ singleDelete }>
                <div className="buttonsSearch__delete close icon"></div>
            </div>
        </div>
    </>
  )
}
