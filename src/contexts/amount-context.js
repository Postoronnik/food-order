import React, {useState} from "react";


const AmountContext = React.createContext({
    amount: 0,
    addAmount: () => {}
});

export const AmountContextProvider = ({children}) => {

    const [amount, setAmount] = useState(0);

    const setAmountHandler = (amount) => {
        setAmount(amount);
    };

    return (
        <AmountContext.Provider
            value={{
                amount: amount,
                addAmount: setAmountHandler
            }}
        >
            {children}
        </AmountContext.Provider>
    );
};



