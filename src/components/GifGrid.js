import React from "react";
import PropTypes from "prop-types";
import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
//import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
  //const [images, setImages] = useState([]);

  const { data: images, loading } = useFetchGifs(category);

  // useEffect(() => {
  //   //getGifs();
  //   getGifs(category).then(setImages);
  // }, [category]);

  //getGifs();

  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{category}</h3>

      {loading && <p className="animate__animated animate__flash">Loading</p>}

      {/* {loading ? "Cargando..." : "Data cargada"} */}

      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
