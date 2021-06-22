import React from 'react'

export const MovieItem = ({ title, poster_path, release_date, vote_average }) => {
  const imgUrl = `http://image.tmdb.org/t/p/w200${poster_path}`

  return (
    <article className="text-white cursor-pointer">
      <img src={imgUrl} alt={title} className="rounded-lg mb-6" />
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <div className="flex text-gray-300">
        <span>{release_date}</span>
        <span>{vote_average}</span>
      </div>
    </article>
  )
}
