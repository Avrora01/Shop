import { Link } from 'react-router-dom'
import logo from '../../assets/image/logo (1) 1.png'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/">
              <img src={logo} alt="Логотип" className="h-10 mb-4" />
            </Link>
            <p className="text-gray-400">
              Путешествия, которые меняют жизнь. 
              Создаем незабываемые впечатления.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/tours" className="text-gray-400 hover:text-white transition">
                  Туры
                </Link>
              </li>
              <li>
                <Link to="/hotels" className="text-gray-400 hover:text-white transition">
                  Отели
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="text-gray-400 hover:text-white transition">
                  Отзывы
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <ul className="space-y-2 text-gray-400">
              <li>📞 +7 (999) 123-45-67</li>
              <li>✉️ info@traveldreams.ru</li>
              <li>📍 Москва, ул. Путешественников, 15</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Подписка</h3>
            <p className="text-gray-400 mb-4">
              Получайте лучшие предложения
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-grow px-4 py-2 rounded-l-lg text-gray-900"
              />
              <button className="bg-[#EC1C24] px-4 py-2 rounded-r-lg hover:bg-red-600 transition">
                →
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>© 2024 Travel Dreams. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer