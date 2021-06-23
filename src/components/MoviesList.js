import React from 'react'
import Slider from "react-slick";

import { MovieItem } from "./MovieItem"

export const MoviesList = ({ results, title, loading }) => {
  const settings = {
    dots: false,
    slidesToShow: 6
  }
  return (
    <section className="mb-24">
      <h2 className="text-xl font-bold mb-8 text-gray-100">{title}</h2>
      <Slider {...settings}>
        {!loading && results.map(movie => <MovieItem {...movie} key={movie.id} />)}
      </Slider>
    </section>
  )
}