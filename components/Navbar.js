import { useContext, useState } from "react";
import Image from "next/image";

// context
import _appContext from "../context/_appContext";

// images
import logo from "../public/svg/rainbow.svg";

const Navbar = ({ setCart, setLoginModal }) => {
  const { isMobile, user } = useContext(_appContext);

  return (
    <>
      <style jsx>{`
        nav {
          font-family: "Julius Sans One", sans-serif;
          line-height: 1;
        }
        .custom-underline {
          background: #fc5c7d; /* fallback for old browsers */
          background: -webkit-linear-gradient(
            to right,
            #6a82fb,
            #fc5c7d
          ); /* Chrome 10-25, Safari 5.1-6 */
          background: linear-gradient(
            to right,
            #6a82fb,
            #fc5c7d
          ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        }
      `}</style>
      <nav className="bg-white border-b border-black/10 shadow noselect">
        <div className="h-20 flex justify-between mx-6 sm:mx-8 lg:mx-10">
          <div className="flex items-center">
            <Image
              src={logo}
              width={50}
              height={50}
              className="cursor-pointer"
              alt="logo"
            />
            <div className="relative group ml-5 smaller:ml-6 cursor-pointer text-xs smaller:text-sm sm:text-lg leading-4 translate-y-1 hover:text-gray-900 transition-colors">
              <div>Pride Shop</div>
              <div
                className={`${
                  isMobile ? "group-active:w-full" : "group-hover:w-full"
                } absolute -bottom-.5 left-0 w-0 custom-underline h-[1px] rounded-full transition-all`}
              />
            </div>
          </div>
          <div className="flex items-center text-xs smaller:text-sm sm:text-base leading-4 translate-y-1">
            <div className="relative group mr-7 hover:text-gray-900 transition-colors">
              <div className="cursor-pointer">shop</div>

              <div className="absolute -left-2 sm:-left-3 h-0 group-hover:h-[6.25rem] sm:group-hover:h-[7.5rem] group-hover:border-x opacity-0 group-hover:opacity-100 min-w-[7rem] bg-white flex flex-col overflow-hidden transition-all ease-out shadow-xl rounded duration-300">
                <div className="pt-3 pb-1.5 pl-3 pr-4 cursor-pointer hover:bg-gray-100">
                  Tops
                </div>
                <div className="py-2 pl-3 pr-4 cursor-pointer hover:bg-gray-100">
                  Bottoms
                </div>
                <div className="pt-1.5 pb-3 pl-3 pr-4 cursor-pointer hover:bg-gray-100">
                  accessories
                </div>
              </div>
            </div>
            {!user && (
              <div className="relative group mr-7 cursor-pointer hover:text-gray-900 transition-colors">
                <div onClick={() => setLoginModal(true)}>sign in</div>
                <div
                  className={`${
                    isMobile ? "group-active:w-full" : "group-hover:w-full"
                  } absolute -bottom-.5 left-0 w-0 custom-underline h-[1px] rounded-full transition-all`}
                />
              </div>
            )}
            <div>
              <i
                onClick={() => setCart(true)}
                className="fa-solid fa-cart-shopping leading-4 hover:text-gray-900 transition-colors cursor-pointer"
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
