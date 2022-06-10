import { useContext } from "react";

// context
import _appContext from "../context/_appContext";

const Card = () => {
  const { isMobile } = useContext(_appContext);

  return (
    <div
      className={`bg-white/80 rounded h-[50vw] sm:h-[45vw] md:h-[32vw] lg:h-[24vw] xl:h-72 xl:min-h-[20vw] shadow transition-shadow ${
        isMobile
          ? "active:shadow-lg active:shadow-pink-400"
          : "hover:shadow-lg hover:shadow-pink-400"
      }`}
    ></div>
  );
};

export default Card;
