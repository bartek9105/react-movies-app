import React from 'react'
import Slider from "react-slick";

import { MovieItem } from "./MovieItem"

export const MoviesList = ({ movies }) => {
  const settings = {
    dots: false,
    slidesToShow: 6
  }
  return (
    <section>
      <h2 className="text-xl font-bold mb-8 text-gray-100">Popular movies</h2>
      <Slider {...settings}>
        {movies.map(movie => <MovieItem {...movie} key={movie.id} />)}
      </Slider>
    </section>
  )
}