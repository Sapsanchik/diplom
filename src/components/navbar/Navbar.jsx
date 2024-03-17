import { Link, useNavigate } from 'react-router-dom';
import SearchBar from '../searchBar/SearchBar';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem('users'));
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear('users');
    navigate('/login');
  };

  const cartItems = useSelector((state) => state.cart);

  const navList = (
    <ul className="flex space-x-3 text-white font-medium text-md px-5 ">
      <li>
        <Link to={'/'}>Главная</Link>
      </li>

      <li>
        <Link to={'/allproduct'}>Товары</Link>
      </li>

      <li>
        <Link to={'/cart'}>Корзина({cartItems.length})</Link>
      </li>

      {!user ? (
        <li>
          <Link to={'/signup'}>Регистрация</Link>
        </li>
      ) : (
        ''
      )}

      {!user ? (
        <li>
          <Link to={'/login'}>Вход</Link>
        </li>
      ) : (
        ''
      )}

      {user?.role === 'user' && (
        <li>
          <Link to={'/user-dashboard'}>{user.name}</Link>
        </li>
      )}

      {user?.role === 'admin' && (
        <li>
          <Link to={'/admin-dashboard'}>{user.name}</Link>
        </li>
      )}

      {user && (
        <li className=" cursor-pointer" onClick={logout}>
          Выход
        </li>
      )}
    </ul>
  );
  return (
    <nav className=" bg-blue-gray-500 sticky top-0">
      <div className="lg:flex lg:justify-between items-center py-3 lg:px-3 ">
        <div className="py-3 lg:py-0">
          <Link to={'/'}>
            <h2 className="font-bold text-white text-2xl text-center">
              Интернет-магазин
            </h2>
          </Link>
        </div>

        <div className="flex justify-center mb-4 lg:mb-0">{navList}</div>

        <SearchBar />
      </div>
    </nav>
  );
};

export default Navbar;
