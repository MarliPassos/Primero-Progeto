import { FaRegBell } from 'react-icons/fa'
import { HiOutlineChevronDown } from 'react-icons/hi'

const Menu = () => {
  return (
    <div className="w-full flex flex-wrap items-center ">
      <div className="w-2/12">
        <img src="/log.jpeg" alt="logo" className="w-40" />
      </div>
      <div className="w-10/12 flex flex-wrap justify-end wfu-6/12 full ">
        <span className="mr-4">Cursos</span>
        <FaRegBell size={24} className="inline pl-2" />
        <span className="pl-4"> (__) Fracisca Moraes </span>
        <HiOutlineChevronDown size={24} className="inline pl-2 pr-4" />
      </div>
    </div>
  )
}

Menu.displayName = 'Menu'

export default Menu
