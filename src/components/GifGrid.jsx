import propTypes from "prop-types";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifItem from "./GifItem";

const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);
  
  if (isLoading) {
    return <p>Loading...</p>;
  }
  
  

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
      {
        images.map(images => (
         <GifItem key={images.id}
         {...images}
         />
        ))
      }

      </div>
      
     
    </>
  );
};

GifGrid.propTypes = {
  category: propTypes.string.isRequired,
};

export default GifGrid;
