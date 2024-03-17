/* eslint-disable react/prop-types */
import { Button, Dialog, DialogBody } from '@material-tailwind/react';
import { useState } from 'react';

const BuyNowModal = ({ addressInfo, setAddressInfo, buyNowFunction }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <>
      <Button
        type="button"
        onClick={handleOpen}
        className="w-full px-4 py-3 text-center text-gray-100 bg-blue-gray-600 border border-transparent dark:border-blue-gray-700 hover:border-blue-500 hover:text-blue-gray-700 hover:bg-gray-50 rounded-xl"
      >
        Оформить заказ
      </Button>
      <Dialog open={open} handler={handleOpen} className=" bg-white">
        <DialogBody className="">
          <div className="mb-3">
            <input
              type="text"
              name="name"
              value={addressInfo.name}
              onChange={(e) => {
                setAddressInfo({
                  ...addressInfo,
                  name: e.target.value,
                });
              }}
              placeholder="Введите ваше имя"
              className=" bg-gray-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none text-blue-gray-600 placeholder-blue-gray-300"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="address"
              value={addressInfo.address}
              onChange={(e) => {
                setAddressInfo({
                  ...addressInfo,
                  address: e.target.value,
                });
              }}
              placeholder="Введите ваш адрес"
              className="bg-gray-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none text-blue-gray-600 placeholder-blue-gray-300"
            />
          </div>

          <div className="mb-3">
            <input
              type="number"
              name="pincode"
              value={addressInfo.pincode}
              onChange={(e) => {
                setAddressInfo({
                  ...addressInfo,
                  pincode: e.target.value,
                });
              }}
              placeholder="Введите ваш пароль"
              className="bg-gray-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none text-blue-gray-600 placeholder-blue-gray-300"
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              name="mobileNumber"
              value={addressInfo.mobileNumber}
              onChange={(e) => {
                setAddressInfo({
                  ...addressInfo,
                  mobileNumber: e.target.value,
                });
              }}
              placeholder="Введите номер телефона"
              className="bg-gray-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none text-blue-gray-600 placeholder-blue-gray-300"
            />
          </div>

          <div className="">
            <Button
              type="button"
              onClick={() => {
                handleOpen();
                buyNowFunction();
              }}
              className="w-full px-4 py-3 text-center text-gray-100 bg-blue-gray-600 border border-transparent dark:border-gray-700 rounded-lg"
            >
              Оформить
            </Button>
          </div>
        </DialogBody>
      </Dialog>
    </>
  );
};

export default BuyNowModal;
