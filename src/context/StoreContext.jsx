import { createContext, useState, useEffect } from 'react';
import { food_list } from '../assets/assets';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId) => {
        setCartItems((prev) => {
            const newQuantity = prev[itemId] ? prev[itemId] + 1 : 1;
            return { ...prev, [itemId]: newQuantity };
        });
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            const newQuantity = (prev[itemId] || 0) - 1;
            if (newQuantity > 0) {
                return { ...prev, [itemId]: newQuantity };
            } else {
                const newCartItems = { ...prev };
                delete newCartItems[itemId];
                return newCartItems;
            }
        });
    };

    const getTotalCartAmt =()=>{
        let totalAmt=0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo= food_list.find((product)=>product._id===item);
                totalAmt += itemInfo.price * cartItems[item];
            }
        }
        return totalAmt;
    }

    // useEffect(() => {
    //     console.log(cartItems);
    // }, [cartItems]);

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmt
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
