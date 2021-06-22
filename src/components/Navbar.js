import { Logo } from '../components/Logo'

export const Navbar = () => {
  return (
    <nav className="flex justify-between p-8 max-w-screen-2xl m-auto">
      <Logo />
      <ul class="flex">
        <li className="mr-12 cursor-pointer text-white hover:text-red-600 transition delay-100 ease-in-out">Movies</li>
        <li className="mr-12 cursor-pointer text-white hover:text-red-600 transition delay-100 ease-in-out">TV Shows</li>
        <li className="cursor-pointer text-white hover:text-red-600 transition delay-100 ease-in-out">Actors</li>
      </ul>
    </nav>
  )
}