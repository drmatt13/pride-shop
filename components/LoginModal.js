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
        } pt-3 pb-1 flex flex-col w-52 bg-white/50 backdrop-blur-lg transition-opacity duration-300 ease-out rounded-lg`}
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
              value="SIGN IN"
              className="mb-2 bg-pink-500 text-white text-sm font-bold py-2 w-[90%] rounded cursor-pointer hover:bg-pink-400"
            />
          </div>
          <div className="mx-auto text-center mb-1.5 bg-purple-500 text-white text-sm font-bold py-2 w-[90%] rounded cursor-pointer hover:bg-purple-400">
            REGISTER
          </div>
          <div className="text-center mb-1.5">or</div>
          <div className="px-2 flex flex-col text-xs /[&>div]:shadow [&>div]:cursor-pointer [&>div]:rounded [&>div]:text-center [&>div]:py-1 [&>div]:mb-2">
            <div className="bg-white flex justify-center">
              <span className="flex justify-center items-center">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                  className="h-[.75rem] mr-1.5"
                />
              </span>
              Continue with Google
            </div>
            <div className="bg-white">
              <i className="devicon-apple-original mr-1.5" />
              Continue with Apple
            </div>
            <div className="bg-white">
              <i className="devicon-facebook-plain mr-1.5 text-blue-600" />
              Continue with Facebook
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
