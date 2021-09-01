import React, {useState} from "react";
import {AmountStyled} from "./Amount.styled";

const Amount = () => {

    const [amount, setAmount] = useState(0);

    const amountChangeHandler = (event) => {

        // console.log(('' + event.target.value).match(/0{2}/));

        if (('' + event.target.value).match(/0{2}/) !== null) {
            // console.log('Check for many 0');
            setAmount(0);
        }

        if (('' + event.target.value).match(/0[^0]/) !== null) {
            console.log('Check for 0 and num');

            let tempAmount = '' +  event.target.value;
            tempAmount = tempAmount.substring(1);
            console.log(tempAmount);

            setAmount(tempAmount);
        }

        if(event.target.value > 99){
            return;
        }
        setAmount(event.target.value);
    };

    const checkIsInputEmpty = (event) => {
        if (event.target.value === '') {
            setAmount(0);
        }
    }

    return (
        <AmountStyled>
            <label>Amount</label>
            <input
                type='number'
                min={0}
                max={99}
                step={1}
                value={amount}
                onChange={amountChangeHandler}
                onBlur={checkIsInputEmpty}
            />
        </AmountStyled>
    );
};

//TODO - add listener to input

export default Amount;