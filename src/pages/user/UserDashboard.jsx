import { useContext } from 'react';
import Layout from '../../components/layout/Layout';
import myContext from '../../context/myContext';
import Loader from '../../components/loader/Loader';

const UserDashboard = () => {
  const user = JSON.parse(localStorage.getItem('users'));

  const context = useContext(myContext);
  const { loading, getAllOrder } = context;

  return (
    <Layout>
      <div className=" container mx-auto px-4 py-5 lg:py-8">
        <div className="top ">
          <div className=" bg-pink-50 py-5 rounded-xl border border-pink-100">
            <div className="flex justify-center h-44">
              <img src="https://cdn-icons-png.flaticon.com/256/7102/7102054.png" alt="" />
            </div>

            <div className="">
              <h1 className=" text-center text-lg">
                <span className=" font-bold">Имя : </span>
                {user?.name}
              </h1>

              <h1 className=" text-center text-lg">
                <span className=" font-bold">Емаил : </span>
                {user?.email}
              </h1>

              <h1 className=" text-center text-lg">
                <span className=" font-bold">Дата : </span>
                {user?.date}
              </h1>

              <h1 className=" text-center text-lg">
                <span className=" font-bold">Роль : </span>
                {user?.role}
              </h1>
            </div>
          </div>
        </div>

        <div className="bottom">
          <div className="mx-auto my-4 max-w-6xl px-2 md:my-6 md:px-0">
            <h2 className=" text-2xl lg:text-3xl font-bold">Детали покупок</h2>

            <div className="flex justify-center relative top-10">
              {loading && <Loader />}
            </div>

            {getAllOrder
              .filter((obj) => obj.userid === user?.uid)
              .map((order, index) => {
                return (
                  <div key={index}>
                    {order.cartItems.map((item, index) => {
                      const {
                        id,
                        date,
                        quantity,
                        price,
                        title,
                        productImageUrl,
                        category,
                      } = item;

                      const { status } = order;
                      return (
                        <div
                          key={index}
                          className="mt-5 flex flex-col overflow-hidden rounded-xl border border-pink-100 md:flex-row"
                        >
                          <div className="w-full border-r border-pink-100 bg-pink-50 md:max-w-xs">
                            <div className="p-8">
                              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-1">
                                <div className="mb-4">
                                  <div className="text-sm font-semibold text-black">
                                    ID Товара
                                  </div>
                                  <div className="text-sm font-medium text-gray-900">
                                    #{id}
                                  </div>
                                </div>

                                <div className="mb-4">
                                  <div className="text-sm font-semibold">Дата</div>
                                  <div className="text-sm font-medium text-gray-900">
                                    {date}
                                  </div>
                                </div>

                                <div className="mb-4">
                                  <div className="text-sm font-semibold">Цена</div>
                                  <div className="text-sm font-medium text-gray-900">
                                    {price * quantity} &#8381;
                                  </div>
                                </div>

                                <div className="mb-4">
                                  <div className="text-sm font-semibold">Статус</div>
                                  {status === 'pending' ? (
                                    <div className="text-sm font-medium text-red-800 first-letter:uppercase">
                                      {status}
                                    </div>
                                  ) : (
                                    <div className="text-sm font-medium text-green-800 first-letter:uppercase">
                                      {status}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="flex-1">
                            <div className="p-8">
                              <ul className="-my-7 divide-y divide-gray-200">
                                <li className="flex flex-col justify-between space-x-5 py-7 md:flex-row">
                                  <div className="flex flex-1 items-stretch">
                                    <div className="flex-shrink-0">
                                      <img
                                        className="h-40 bg-gray-200 w-40 rounded-lg border border-gray-200 object-contain"
                                        src={productImageUrl}
                                        alt="img"
                                      />
                                    </div>

                                    <div className="ml-5 flex flex-col justify-between">
                                      <div className="flex-1">
                                        <p className="text-sm font-bold text-gray-900">
                                          {title}
                                        </p>
                                        <p className="mt-1.5 text-sm font-medium text-gray-700">
                                          {category}
                                        </p>
                                      </div>

                                      <p className="mt-4 text-sm font-medium text-gray-700">
                                        x {quantity}
                                      </p>
                                    </div>
                                  </div>

                                  <div className="ml-auto flex flex-col items-end justify-between">
                                    <p className="text-right text-sm font-bold text-gray-900">
                                      {price} &#8381;
                                    </p>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserDashboard;
