import { useState, useEffect } from "react";

const useHotItems = () => {
  const [hotItems, setHotItems] = useState([
    // {
    //   id: 1,
    //   name: "Item 1",
    //   price: "$1.99",
    //   image: "https://picsum.photos/200/300",
    //   description: "This is a description",
    //   category: "Tops",
    //   color: "Red",
    // }
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return { hotItems, loading };
};

export default useHotItems;
