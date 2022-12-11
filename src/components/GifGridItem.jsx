
export const GifGridItem = ({id, title, url}) => {
  // const {id, title, url} = props.image ;
  return (
    <>
      {/* <div>GifGridItem</div> */}
        <div className="card">
          <img src={ url.url } alt={ title } />
          <p>{ title }</p>
        </div>
    </>
  )
}
