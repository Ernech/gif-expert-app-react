import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
//import { getGIfs } from '../helpers/getGifs';
//import { GifGridItem } from './GifGridItem';



export const GifGrid =({category})=>{

//    const [images,setImages] = useState([]);


    const {data:images,loading} =useFetchGifs(category);
    console.log(loading);
   
 //   getGIfs();

    return(
        <>
        <h3>{category}</h3>
        {loading && <p>Loading</p>}
        <div className = "card-grid animate__animated animate__flash">
       
            {
                images.map(img =><GifGridItem key = {img.id} {...img}/>)
            }
       
        </div>
        </>
    )
}