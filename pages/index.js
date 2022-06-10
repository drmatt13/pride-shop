import { useContext } from "react";
import Head from "next/head";

// context
import _appContext from "../context/_appContext";

export default function Home() {
  const { isMobile } = useContext(_appContext);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <style jsx>{`
        div {
          font-family: "Julius Sans One", sans-serif;
        }
      `}</style>
      <div className="text-center text-xl mb-10">🔥 Hot Items! 🔥</div>
      <div className="mx-12 smaller:mx-16 sm:mx-24 md:mx-20 lg:mx-[10vw] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        <div
          className={`bg-white/80 rounded h-[50vw] sm:h-[45vw] md:h-[32vw] lg:h-[24vw] xl:h-72 xl:min-h-[20vw] shadow transition-shadow ${
            isMobile
              ? "active:shadow-lg active:shadow-pink-400"
              : "hover:shadow-lg hover:shadow-pink-400"
          }`}
        ></div>
        <div
          className={`bg-white/80 rounded h-[50vw] sm:h-[45vw] md:h-[32vw] lg:h-[24vw] xl:h-72 xl:min-h-[20vw] shadow transition-shadow ${
            isMobile
              ? "active:shadow-lg active:shadow-pink-400"
              : "hover:shadow-lg hover:shadow-pink-400"
          }`}
        ></div>
        <div
          className={`bg-white/80 rounded h-[50vw] sm:h-[45vw] md:h-[32vw] lg:h-[24vw] xl:h-72 xl:min-h-[20vw] shadow transition-shadow ${
            isMobile
              ? "active:shadow-lg active:shadow-pink-400"
              : "hover:shadow-lg hover:shadow-pink-400"
          }`}
        ></div>
        <div
          className={`bg-white/80 rounded h-[50vw] sm:h-[45vw] md:h-[32vw] lg:h-[24vw] xl:h-72 xl:min-h-[20vw] shadow transition-shadow ${
            isMobile
              ? "active:shadow-lg active:shadow-pink-400"
              : "hover:shadow-lg hover:shadow-pink-400"
          }`}
        ></div>
        <div
          className={`bg-white/80 rounded h-[50vw] sm:h-[45vw] md:h-[32vw] lg:h-[24vw] xl:h-72 xl:min-h-[20vw] shadow transition-shadow ${
            isMobile
              ? "active:shadow-lg active:shadow-pink-400"
              : "hover:shadow-lg hover:shadow-pink-400"
          }`}
        ></div>
        <div
          className={`bg-white/80 rounded h-[50vw] sm:h-[45vw] md:h-[32vw] lg:h-[24vw] xl:h-72 xl:min-h-[20vw] shadow transition-shadow ${
            isMobile
              ? "active:shadow-lg active:shadow-pink-400"
              : "hover:shadow-lg hover:shadow-pink-400"
          }`}
        ></div>
        <div
          className={`bg-white/80 rounded h-[50vw] sm:h-[45vw] md:h-[32vw] lg:h-[24vw] xl:h-72 xl:min-h-[20vw] shadow transition-shadow ${
            isMobile
              ? "active:shadow-lg active:shadow-pink-400"
              : "hover:shadow-lg hover:shadow-pink-400"
          }`}
        ></div>
      </div>
    </>
  );
}