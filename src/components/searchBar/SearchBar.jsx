import { useContext, useState } from 'react';
import myContext from '../../context/myContext';
import { useNavigate } from 'react-router';

const SearchBar = () => {
  const context = useContext(myContext);
  const { getAllProduct } = context;

  const [search, setSearch] = useState('');

  const filterSearchData = getAllProduct
    .filter((obj) => obj.title.toLowerCase().includes(search))
    .slice(0, 8);

  const navigate = useNavigate();

  return (
    <div className="">
      <div className="input flex justify-center">
        <input
          type="text"
          placeholder="Поиск по имени..."
          onChange={(e) => setSearch(e.target.value)}
          className=" bg-gray-200 placeholder-gray-400 rounded-lg px-2 py-2 w-96 lg:w-96 md:w-96 outline-none text-black "
        />
      </div>

      <div className=" flex justify-center">
        {search && (
          <div className="block absolute bg-gray-200 w-96 md:w-96 lg:w-96 z-50 my-1 rounded-lg px-2 py-2">
            {filterSearchData.length > 0 ? (
              <>
                {filterSearchData.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="py-2 px-2 cursor-pointer"
                      onClick={() => navigate(`/productinfo/${item.id}`)}
                    >
                      <div className="flex items-center gap-2">
                        <img className="w-10" src={item.productImageUrl} alt="" />
                        {item.title}
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              <>
                <div className="flex justify-center">
                  <img
                    className=" w-20"
                    src="https://cdn-icons-png.flaticon.com/128/10437/10437090.png"
                    alt="img"
                  />
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
