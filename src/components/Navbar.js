import { Logo } from '../components/Logo'
import { Searchbar } from '../components/Searchbar'
import { UserAvatar } from '../components/UserAvatar'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="flex justify-between py-8 max-w-screen-2xl m-auto">
      <div className="flex items-center">
        <Logo />
        <ul className="flex ml-16">
          <NavLink exact to="/" activeClassName="text-red-600" className="mr-12 cursor-pointer text-white hover:text-red-600 transition delay-100 ease-in-out">Movies</NavLink>
          <li className="mr-12 cursor-pointer text-white hover:text-red-600 transition delay-100 ease-in-out">TV Shows</li>
          <li className="cursor-pointer text-white hover:text-red-600 transition delay-100 ease-in-out">Actors</li>
        </ul>
      </div>
      <div className="flex items-center">
        <div className="mr-8">
          <Searchbar />
        </div>
        <UserAvatar />
      </div>
    </nav>
  )
}