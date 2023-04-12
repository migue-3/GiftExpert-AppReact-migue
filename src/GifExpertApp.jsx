import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['RICK AND MORTY']);

    const onAddCategory = (newCategory) =>{

      if(categories.includes(newCategory) ) return;
        // categories.push('Valorant'); --->>> NO FUNCIONA CON REACT
        // setCategories( cat => [...cat, 'Valorant' ] ); ---->>> OTRA MANERA PARA HACER UNA INSERCION EN UN ARREGLO
       setCategories([ newCategory.toUpperCase(), ...categories ]);
    }

  return (
    <>
    {/* titulo */}
    <h1>GifExpertApp</h1>

    {/* input */}
    < AddCategory
    //  setCategories={setCategories}
      onNewCategory={ newCategory => onAddCategory(newCategory) }
     />

    {/* listado de Gif */}
        {
        categories.map( (category) => (
           <GifGrid 
           key={ category }
           category={ category }
           />
        ))
        }

    </>
  )
}
