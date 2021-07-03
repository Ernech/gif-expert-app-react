import React,{useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GiffExpertApp = () =>{


    const [categories,setCategories] = useState(['Music'])

    // const handleAdd = (e)=>{
      
    //   setCategories(categories =>[...categories,'Crash Bandicoot']);
    
    // }

    return(
      <>
      <h2>GiffExpertApp</h2>

    <AddCategory setCategories = {setCategories}/>

      <hr/>

      <ol>
        { 
            categories.map(category => 
                <GifGrid key ={category}
                category={category}/>
            )
        }
      </ol>
      </>
    );
  
  }

export default GiffExpertApp;