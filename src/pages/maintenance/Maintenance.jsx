import { NavLink } from "react-router-dom"

const Maintenance = () => {
  return (
    <div className="flex flex-col text-white justify-center items-center h-screen">
      <h1 className="text-xl">Perbaikan dulu...</h1>
      <NavLink to="/">
        <button className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded">
          Kembali ke Homepage
        </button>
      </NavLink>
    </div>
  )
}

export default Maintenance