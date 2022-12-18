
export const GifGridItem = ({id, title, url, onDeleteCard}) => {
  // const {id, title, url} = props.image ;
  return (
    <>
      {/* <div>GifGridItem</div> */}
        <div className="card">
          <img src={ url.url } alt={ title } /> 

          <div className="buttonsSearch">
            <p>{ title }</p>
            <div className="buttonsSearch__item bg-indigo-500 hover:bg-indigo-600" onClick={ (e) => onDeleteCard(id) } > 
              <div className="buttonsSearch__delete bg-indigo-500 hover:bg-indigo-600 close icon"></div>
            </div>
          </div>

        </div>
    </>
  )
}
