import { useState } from "react"
import { X } from "react-feather"
import { useFetchByQuery } from '../hooks/useFetch'

export const SearchModal = ({ setShowModal }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const { data } = useFetchByQuery(searchQuery)

  return (
    <div className="w-full h-full bg-gray-700 text-white fixed top-0 left-0 z-10 bg-opacity-70">
      <div className="absolute bg-gray-800 text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow rounded-lg px-16 py-8 w-6/12">
        <div className="flex justify-between">
          <h3 className="font-bold text-lg mb-8">Search for a movie, tv show or a person</h3>
          <X className="cursor-pointer" onClick={() => setShowModal(false)} />
        </div>
        <form className="text-white w-full">
          <input type="text" className="bg-gray-700 px-6 py-4 rounded-lg mr-4 w-full" placeholder="Search" onChange={(e) => setSearchQuery(e.target.value)} />
        </form>
      </div>
    </div>
  )
}