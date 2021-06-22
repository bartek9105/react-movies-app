import { Search } from "react-feather"

export const Searchbar = () => {
  return (
    <form className="text-white flex items-center">
      <input type="text" className="bg-gray-700 px-6 py-2 rounded-3xl mr-4" placeholder="Search" />
      <Search className="cursor-pointer" />
    </form>
  )
}