import PropTypes from "prop-types";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({category}) => {

  const { images, isLoading } = useFetchGifs( category );

  return (
    <>  
        <h3>{category}</h3>
        {
          isLoading && ( <h2>Cargando....</h2> )
        }
    <div className="card-grid">
      {
        images.map( (image) =>(
          <GifItem 
          key={image.id}
          { ...image}  //Esparcimos todas las propiedades que vienen del image en el GifItem
          // title={image.title}
          // url={image.url}
          />
        ))
      }
    </div>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
}
