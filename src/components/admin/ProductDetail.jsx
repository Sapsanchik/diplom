import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import myContext from '../../context/myContext';
import Loader from '../loader/Loader';
import { deleteDoc, doc } from 'firebase/firestore';
import { fireDB } from '../../firebase/FirebaseConfig';
import toast from 'react-hot-toast';

const ProductDetail = () => {
  const context = useContext(myContext);
  const { loading, setLoading, getAllProduct, getAllProductFunction } = context;

  const navigate = useNavigate();

  const deleteProduct = async (id) => {
    setLoading(true);
    try {
      await deleteDoc(doc(fireDB, 'products', id));
      toast.success('Информация о товарах обновлена');
      getAllProductFunction();
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <div>
      <div className="py-5 flex justify-between items-center">
        <h1 className=" text-xl text-pink-300 font-bold">Все товары</h1>

        <Link to={'/addproduct'}>
          <button className="px-5 py-2 bg-pink-50 border border-pink-100 rounded-lg">
            Добавить товар
          </button>
        </Link>
      </div>

      <div className="flex justify-center relative top-20">{loading && <Loader />}</div>

      <div className="w-full overflow-x-auto mb-5">
        <table className="w-full text-left border border-collapse sm:border-separate border-pink-100 text-pink-400">
          <tbody>
            <tr>
              <th
                scope="col"
                className="h-12 px-6 text-center text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold fontPara"
              >
                №
              </th>
              <th
                scope="col"
                className="h-12 text-center px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold fontPara"
              >
                Изображение
              </th>
              <th
                scope="col"
                className="h-12 text-center px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100"
              >
                Название
              </th>
              <th
                scope="col"
                className="h-12 text-center px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100"
              >
                Цена
              </th>
              <th
                scope="col"
                className="h-12 text-center px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100"
              >
                Категория
              </th>
              <th
                scope="col"
                className="h-12 text-center px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100"
              >
                Дата
              </th>
              <th
                scope="col"
                className="h-12 text-center px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100"
              >
                Редактирование
              </th>
              <th
                scope="col"
                className="h-12 text-center px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100"
              >
                Удаление
              </th>
            </tr>
            {getAllProduct.map((item, index) => {
              const { id, title, price, category, date, productImageUrl } = item;
              return (
                <tr key={index} className="text-pink-300">
                  <td className="h-12 text-center px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 ">
                    {index + 1}.
                  </td>
                  <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                    <div className="flex justify-center">
                      <img className="h-20" src={productImageUrl} alt="" />
                    </div>
                  </td>
                  <td className="h-12 text-center px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                    {title}
                  </td>
                  <td className="h-12 text-center px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                    {price} &#8381;
                  </td>
                  <td className="h-12 text-center px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                    {category}
                  </td>
                  <td className="h-12 text-center px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                    {date}
                  </td>
                  <td
                    onClick={() => navigate(`/updateproduct/${id}`)}
                    className="h-12 text-center px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 text-green-500 cursor-pointer "
                  >
                    Редактировать
                  </td>
                  <td
                    onClick={() => deleteProduct(id)}
                    className="h-12 text-center px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 text-red-500 cursor-pointer "
                  >
                    Удалить
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductDetail;
