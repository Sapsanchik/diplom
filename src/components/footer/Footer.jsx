import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font bg-blue-gray-500">
        <div className="container px-5 py-5 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <span className="text-xl font-bold">Интернет-магазин</span>
          </a>

          <p className="text-sm text-gray-100 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © {new Date().getFullYear()} Copyright Text
            <Link
              to={'/'}
              className="text-gray-100 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              Веремейчик Александр
            </Link>
          </p>

          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a
              target="_blank"
              href="https://vk.com/trenero4ek"
              className="ml-3 text-gray-100 cursor-pointer"
            >
              <img
                className="h-6"
                src="https://cdn-icons-png.flaticon.com/128/5968/5968835.png"
                alt=""
              />
            </a>

            <a
              className="ml-3 text-gray-100 cursor-pointer"
              target="_blank"
              href="https://github.com/Sapsanchik"
            >
              <img
                className="h-6"
                src="https://cdn-icons-png.flaticon.com/128/25/25657.png"
                alt=""
              />
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
