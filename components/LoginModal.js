import React from "react";

const LoginModal = ({ loginModal, setLoginModal }) => {
  return (
    <div
      className={`${
        loginModal ? "pointer-events-auto" : "pointer-events-none"
      } absolute top-0 left-0 h-screen w-screen z-10 overflow-hidden flex justify-center items-center`}
    >
      <div
        className={`${
          loginModal ? "bg-black/25" : ""
        } absolute top-0 left-0 h-full w-full transition-colors`}
        onClick={() => setLoginModal(false)}
      />
      <div
        className={`${
          loginModal ? "opacity-100" : "opacity-0"
        } py-3 flex flex-col w-52 bg-white/50 backdrop-blur-lg transition-opacity duration-300 ease-out rounded-lg`}
      >
        <div className="text-center underline">Login</div>
        <form>
          <div className="flex flex-col items-center">
            <input
              type="email"
              required={true}
              placeholder="email"
              className="my-3 px-2 py-1 w-[90%] rounded active:ring-1 focus:ring ring-pink-400/75 outline-0"
            />
            <input
              type="password"
              required={true}
              placeholder="password"
              className="mb-3 px-2 py-1 w-[90%] rounded active:ring-1 focus:ring ring-pink-400/75 outline-0"
            />
            <input
              type="submit"
              value="SEND"
              className="mb-2 bg-pink-500 text-white text-sm font-bold py-2 w-[90%] rounded cursor-pointer hover:bg-pink-400"
            />
          </div>
          <div className="flex justify-center">
            <a className="px-4 text-xs underline text-black cursor-pointer">
              register for an account
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
