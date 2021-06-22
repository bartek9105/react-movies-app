import { Film } from 'react-feather';
import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <Link to="/" className="flex items-center text-white">
      <div className="bg-red-600 p-2 rounded-full mr-4">
        <Film className="text-white" />
      </div>
      <span className="text-xl font-bold">
        <span className="text-xl font-bold">Movies</span>
        <span className="text-red-600">App</span>
      </span>
    </Link>
  )
}