// import { useEffect,useState } from "react"
// import { getGifs } from "../helpers/getGifs"
import { useFectchGifs } from "../hooks/useFectchGifs"
import { GifItem } from "./GifItem"

export const GifGrid = ({ category }) => {
  const {images, isLoading} = useFectchGifs(category) /* Custom Hook */

  return (
    <>
      <h4>{category}</h4>
      {
        isLoading && (<h2>Cargando ...</h2>)
      }
      <div className="card-grid">
      {
        images.map((image) => (
          <GifItem 
            key={image.id} 
            {...image}
          />
        ))
      }
      </div>
    </>
  )
}
