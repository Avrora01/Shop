import { Link, useLocation } from 'react-router-dom'
import { LocationEditIcon, Menu, Phone } from 'lucide-react'
import logo from '../../assets/image/logo (1) 1.png'

const Header = () => {
  const location = useLocation()
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-[#EC1C24] font-bold' : 'text-gray-800'
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="flex justify-around items-center py-4">
        <Link to="/">
          <img src={logo} alt="Логотип" className="h-10" />
        </Link>
        
        <nav className="flex gap-8 items-center">
          <Link 
            to="/" 
            className={`uppercase text-[14px] cursor-pointer hover:text-[#EC1C24] transition ${isActive('/')}`}
          >
            Главная
          </Link>
          <Link 
            to="/hotels" 
            className={`uppercase text-[14px] cursor-pointer hover:text-[#EC1C24] transition ${isActive('/hotels')}`}
          >
            Отели
          </Link>
          <Link 
            to="/reviews" 
            className={`uppercase text-[14px] cursor-pointer hover:text-[#EC1C24] transition ${isActive('/reviews')}`}
          >
            Отзывы
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <button className="uppercase rounded-full border border-[#6A6A6A] text-[12px] px-4 py-2 hover:bg-[#EC1C24] hover:text-white transition">
            оставить заявку
          </button>
          <Phone
            size={20}
            className="text-[#000000] cursor-pointer hover:text-[#EC1C24]"
          />
          <LocationEditIcon
            size={20}
            className="text-[#000000] cursor-pointer hover:text-[#EC1C24]"
          />
          <Menu
            size={20}
            className="text-[#000000] cursor-pointer hover:text-[#EC1C24]"
          />
        </div>
      </div>
    </header>
  )
}

export default Header