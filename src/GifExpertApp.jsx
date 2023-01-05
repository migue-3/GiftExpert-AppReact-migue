import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['DRAGON BALL']);

    const onAddCategory = (newCategory) =>{

      if(categories.includes(newCategory) ) return;
        // categories.push('Valorant'); --->>> NO FUNCIONA CON REACT
       setCategories([ newCategory.toUpperCase(), ...categories ]);
        // setCategories( cat => [...cat, 'Valorant' ] ); ---->>> OTRA MANERA PARA HACER UNA INSERCION EN UN ARREGLO
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
