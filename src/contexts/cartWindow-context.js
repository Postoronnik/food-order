import React, {useState} from "react";

const CartWindowContext = React.createContext({
    isOpened: false,
    closeCartWindow: () => {},
    openCartWindow: () => {},
});

export const CartWindowContextProvider = ({children}) => {

    const [isOpened, setIsOpened] = useState(false);

    const openCartWindowHandler = () => {
        setIsOpened(true);
    }

    const closeCartWindowHandler = () => {
        setIsOpened(false);
    };

    return (
        <CartWindowContext.Provider
        value={{
            isOpened,
            closeCartWindow: closeCartWindowHandler,
            openCartWindow: openCartWindowHandler,
        }}>
            {children}
        </CartWindowContext.Provider>
    );
};

export default CartWindowContext;