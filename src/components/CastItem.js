export const CastItem = ({ character, profile_path, name }) => {
  const imgUrl = `http://image.tmdb.org/t/p/w200${profile_path}`

  return (
    <article className="text-white cursor-pointer" style={{ maxWidth: '200px' }}>
      <img src={imgUrl} alt={name} className="rounded-lg mb-6 hover:opacity-40 transition delay-100 ease-in-out" />
      <div>
        <h2 className="text-lg font-bold truncate mb-2">{character}</h2>
        <span className="truncate">{name}</span>
      </div>
    </article>
  )
}