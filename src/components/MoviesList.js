import React from 'react'
import Slider from "react-slick";

import { MovieItem } from "./MovieItem"

export const MoviesList = ({ movies, title }) => {
  const settings = {
    dots: false,
    slidesToShow: 6
  }
  return (
    <section className="mb-24">
      <h2 className="text-xl font-bold mb-8 text-gray-100">{title}</h2>
      <Slider {...settings}>
        {movies.map(movie => <MovieItem {...movie} key={movie.id} />)}
      </Slider>
    </section>
  )
}