import React from "react";

const Cart = ({ cart, setCart }) => {
  return (
    <div
      className={`${
        cart ? "pointer-events-auto" : "pointer-events-none"
      } absolute top-0 left-0 h-screen w-screen z-10 overflow-hidden`}
    >
      <div
        className={`${
          cart ? "bg-black/25" : ""
        } absolute top-0 left-0 h-full w-full transition-colors duration-300 ease-out`}
        onClick={() => setCart(false)}
      />
      <div
        className={`${
          cart ? "opacity-100" : "/opacity-50 translate-x-full"
        } absolute flex flex-col top-0 right-0 h-full w-72 sm:w-80 lg:w-96 bg-white/50 backdrop-blur-lg transition-all duration-300 ease-out`}
      >
        <div className="absolute h-6 w-6 top-2.5 left-2.5 flex justify-center items-center">
          <i
            className="fa-solid fa-times text-gray-900 cursor-pointer"
            onClick={() => setCart(false)}
          />
        </div>
        <div className="text-center underline mt-4">Shopping Cart</div>
      </div>
    </div>
  );
};

export default Cart;
