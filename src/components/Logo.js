import { Film } from 'react-feather';

export const Logo = () => {
  return (
    <div className="flex items-center text-white">
      <Film className="text-red-600 mr-4" />
      <span className="text-xl font-bold">MoviesApp</span>
    </div>
  )
}