import { useState, useEffect, useRef, useCallback } from "react";

const Navbar = ({ parentRef, children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isBlock, setIsBlock] = useState(false);
  const [scrollDistance] = useState(80);
  const stickyRef = useRef(true);
  const prevY = useRef(0);
  const prevDirection = useRef("up");
  const Y = useRef(0);

  const scrollHandler = useCallback(
    (e) => {
      if (e.target.scrollTop === 0) {
        setIsBlock(false);
        setIsOpen(true);
        stickyRef.current = true;
        prevY.current = 0;
        Y.current = 0;
        return;
      } else if (e.target.scrollTop < scrollDistance) {
        if (stickyRef.current !== true) {
          setIsBlock(true);
        }
        return;
      }
      if (e.target.scrollTop <= prevY.current) {
        if (prevDirection.current !== "up") {
          Y.current = e.target.scrollTop;
          prevDirection.current = "up";
        }
      } else {
        if (prevDirection.current !== "down") {
          Y.current = e.target.scrollTop;
          prevDirection.current = "down";
        }
      }
      if (e.target.scrollTop - Y.current > scrollDistance * 3.5) {
        setIsOpen(false);
        stickyRef.current = false;
      }
      if (e.target.scrollTop - Y.current < -scrollDistance * 3) {
        setIsOpen(true);
        stickyRef.current = true;
      }
      prevY.current = e.target.scrollTop;
    },
    [scrollDistance, setIsBlock, setIsOpen, stickyRef, Y, prevY, prevDirection]
  );

  useEffect(() => {
    parentRef.current.addEventListener("scroll", scrollHandler);
    return () => {
      parentRef.current.removeEventListener("scroll", scrollHandler);
    };
  }, [parentRef, scrollHandler]);

  return (
    <div
      className={`top-0 
        ${isBlock ? "block" : "sticky transition-all duration-200 ease-out"} 
        ${isOpen || isBlock ? "" : "-translate-y-full"}`}
    >
      {children}
    </div>
  );
};

export default Navbar;
