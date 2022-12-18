import { useEffect, useState} from 'react'
import { getGifs } from '../helpers/getGif';

export const useFecthGifs = ( category ) => {

  const [images, setImages] = useState([ ]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () =>{
    const newImages= await getGifs(  category );
    // if (newImages.length == 0) return;
    setImages(  newImages );
    setIsLoading( false );
    
  }         
  // Efecto activado por default , al inicio
    useEffect( ()=> {
      getImages();
    }, [] );

  return {
    images,
    setImages,
    isLoading
  }
}
