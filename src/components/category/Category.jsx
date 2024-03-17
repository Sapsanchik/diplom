import { useNavigate } from 'react-router';

// category
const category = [
  {
    image: 'https://cdn-icons-png.flaticon.com/256/8545/8545260.png',
    name: 'monitor',
  },
  {
    image: 'https://cdn-icons-png.flaticon.com/256/6558/6558597.png',
    name: 'pc',
  },
  {
    image: 'https://cdn-icons-png.flaticon.com/256/12142/12142416.png',
    name: 'laptop',
  },
  {
    image: 'https://cdn-icons-png.flaticon.com/256/7001/7001302.png',
    name: 'periphery',
  },
  {
    image: 'https://cdn-icons-png.flaticon.com/256/7648/7648246.png',
    name: 'phone',
  },
  {
    image: 'https://cdn-icons-png.flaticon.com/256/12114/12114279.png',
    name: 'kitchen',
  },

  {
    image: 'https://cdn-icons-png.flaticon.com/256/6639/6639789.png',
    name: 'style',
  },

  {
    image: 'https://cdn-icons-png.flaticon.com/256/11257/11257145.png',
    name: 'sale',
  },
];

const Category = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col mt-5">
        <div className="flex overflow-x-scroll hide-scroll-bar">
          <div className="flex flex-col">
            {category.map((item, index) => {
              return (
                <div key={index} className="px-3 lg:px-10">
                  <div
                    onClick={() => navigate(`/category/${item.name}`)}
                    className=" w-16 h-16 lg:w-24 lg:h-24 max-w-xs rounded-full bg-blue-gray-600 transition-all hover:bg-blue-gray-400 cursor-pointer mb-1 "
                  >
                    <div className="flex justify-center mb-12">
                      <img src={item.image} alt="img" />
                    </div>
                  </div>

                  <h1 className=" text-sm lg:text-lg text-center font-medium title-font first-letter:uppercase mb-2">
                    {item.name}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n.hide-scroll-bar {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.hide-scroll-bar::-webkit-scrollbar {\n  display: none;\n}\n',
        }}
      />
    </div>
  );
};

export default Category;
