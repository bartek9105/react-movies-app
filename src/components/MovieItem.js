import React from 'react'
import { Star, Heart } from 'react-feather'
import { Link } from 'react-router-dom'

export const MovieItem = ({ id, title, poster_path, release_date, vote_average }) => {
  const imgUrl = `http://image.tmdb.org/t/p/w200${poster_path}`

  return (
    <Link to={`/movie/${id}`}>
      <article className="text-white cursor-pointer" style={{ maxWidth: '200px' }}>
        <img src={imgUrl} alt={title} className="rounded-lg mb-6 hover:opacity-40 transition delay-100 ease-in-out" />
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold truncate mr-2">{title}</h2>
          <Heart size={16} />
        </div>
        <div className="flex justify-between text-gray-300">
          <span className="mr-4">{release_date}</span>
          <span className="flex items-center">
            <Star className="text-yellow-500 mr-2" size={16} />
            {vote_average}
          </span>
        </div>
      </article>
    </Link >
  )
}
