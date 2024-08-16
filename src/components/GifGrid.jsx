import propTypes from "prop-types";
import { getGifs } from "../helpers/getGifs";
import { useEffect } from "react";

const GifGrid = ({ category }) => {

  useEffect(() => {
  getGifs(category);
  }, [category]);

  return (
    <>
      <h3>{category}</h3>
      {
        
      }
      
    </>
  );
};

GifGrid.propTypes = {
  category: propTypes.string.isRequired,
};

export default GifGrid;
