export const ReviewItem = ({ author_details, content, created_at }) => {
  const imgUrl = `http://image.tmdb.org/t/p/w45${author_details.avatar_path}`
  console.log(author_details.avatar_path)

  return (
    <article className="text-white mb-8 flex items-start bg-gray-700 rounded-md p-6">
      <img src={author_details.avatar_path ? imgUrl : '/no-avatar.png'} alt={author_details.username} className="mr-8 rounded-full" style={{ width: '45px' }} />
      <div>
        <div className="flex flex-col mb-6">
          <h4 className="font-bold">{author_details.username}</h4>
          <span className="text-gray-400">{new Date(created_at).toLocaleString()}</span>
        </div>
        <p className="text-gray-100 line-clamp-3">{content}</p>
      </div>
    </article>
  )
}