import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCard = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const newItems = { ...prev };
      if (newItems[itemId] === 1) {
        delete newItems[itemId];
      } else {
        newItems[itemId] -= 1;
      }
      return newItems;
    });
  };

  const getTotalCartAmount = () => {
    return food_list.reduce((total, item) => {
        const itemTotal = cartItems[item._id] ? item.price * cartItems[item._id] : 0;
        return total + itemTotal;
    }, 0);
};


  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCard,
    removeFromCart,
    getTotalCartAmount
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
