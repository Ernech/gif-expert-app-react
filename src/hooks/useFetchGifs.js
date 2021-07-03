import { useState, useEffect } from 'react'
import { getGIfs } from '../helpers/getGifs';

export const useFetchGifs = (category)=>{
   const[state,setState]= useState({
       data:[],
       loading:true
   });

   useEffect(()=>{
      
           getGIfs(category).then(img =>{
               setState({data:img,loading:false})
           }
           );
           
      
   },[category]);
 
   return state;
}