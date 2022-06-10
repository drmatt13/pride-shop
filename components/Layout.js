import { useRef, useState, useContext } from "react";

// context
import _appContext from "../context/_appContext";

// components
import Cart from "./Cart";
import LoginModal from "./LoginModal";
import StickyAutoHideContainer from "./StickyAutoHideContainer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const { user } = useContext(_appContext);

  const containerRef = useRef(null);
  const [cart, setCart] = useState(false);
  const [loginModal, setLoginModal] = useState(false);

  return (
    <>
      <style jsx>{`
        .h-screen {
          background-image: url("https://img.freepik.com/free-photo/blur-pastel-colour-background_66899-866.jpg?w=1060");
          background-size: cover;
          background-position: center;
        }
      `}</style>
      <div className="h-screen overflow-y-scroll" ref={containerRef}>
        <LoginModal loginModal={loginModal} setLoginModal={setLoginModal} />
        <Cart cart={cart} setCart={setCart} />
        <StickyAutoHideContainer parentRef={containerRef}>
          <Navbar setCart={setCart} setLoginModal={setLoginModal} />
        </StickyAutoHideContainer>
        <div className="min-h-screen w-full flex flex-col">
          <div className="w-full">
            <div className="w-full h-6 smaller:h-10 bg-gradient-to-r from-sky-300 via-purple-300 to-pink-200"></div>
            <video
              className="mb-10 h-56 sm:h-64 md:h-[40vw] lg:h-[26rem] xl:h-[30rem] 2xl:h-[34rem] w-full object-cover object-top pointer-events-none"
              src="\videos\210210_02_Oxford_4k_048.mp4"
              playsInline={true}
              autoPlay={true}
              muted={true}
              loop={true}
            ></video>
          </div>
          {children}
          <footer className="mt-16 h-24 bg-black flex items-center justify-center">
            <div className="text-center text-white text-sm">
              © {new Date().getFullYear()}, Built by
              {` `}
              <a
                className="text-blue-400 underline hover:text-gray-300"
                href="https://portfolio-min.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Matthew
              </a>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Layout;
