import React, {useContext, useState} from "react";
import ItemContext from "../../../contexts/item-context";
import * as Styles from '../MenuItem/MenuItem.styled';

const MenuItem = ({itemKey, name, description, price}) => {

    const [amount, setAmount] = useState(1);
    const menuItemContext = useContext(ItemContext);

    const amountChangeHandler = (event) => {

        if (event.target.value === '') {
            setAmount(1);
        }

        if (event.target.value > 99) {
            return;
        }
        setAmount(event.target.value);
    };

    const checkIsInputEmpty = (event) => {
        if (event.target.value === '') {
            setAmount(1);
        }
    };

    const addProductHandler = (event) => {
        event.preventDefault();

        menuItemContext.addItemToCart({
            itemKey,
            name,
            description,
            price,
            amount,
        });
    };

    return (
        <Styles.MenuItem>
            <Styles.Description>
                <label>
                    {name}
                </label>

                <div>
                    {description}
                </div>
                <span>
                ${price}
                </span>
            </Styles.Description>
            <Styles.Control>
                <Styles.Amount>
                    <label>Amount</label>
                    <input
                        type='number'
                        min={1}
                        max={99}
                        step={1}
                        value={amount}
                        onChange={amountChangeHandler}
                        onBlur={checkIsInputEmpty}
                    />
                </Styles.Amount>
                <Styles.AddButton onClick={addProductHandler}>+ Add</Styles.AddButton>
            </Styles.Control>
        </Styles.MenuItem>
    );
};

export default MenuItem;