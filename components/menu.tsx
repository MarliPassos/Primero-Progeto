import { FaRegBell } from 'react-icons/fa'

const Menu = () => {
  return (
    <div className="flex flex-wrap items-center">
      <img src="/log.jpeg" alt="logo" className="w-40" />
      <span className="test-2xl">Cursos</span>
      <FaRegBell className="inline" />
      <span className="pl-2"> (__) Fracisca Moraes </span>
    </div>
  )
}

Menu.displayName = 'Menu'

export default Menu
