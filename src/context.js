import React, { useState, useEffect, useContext } from 'react';
import products from './catalog';

const AppContext = React.createContext()


// const initialItems = {
//     cart: [],
//     amount: 0,
//     total: 0,
// }

const AppProvider = ({children}) => {
    const {name, src, price, description, category} = products

    const [amount, setAmount] = useState(1);

    const [cartAmount, setCartAmount] = useState(0);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const [showBtn, setShowBtn] = useState(false);

    // const [initialCart, setInitialCart] = useState(initialItems);

    const sumAmount = () => {
        setAmount(amount + 1)
    }
    const restAmount = () => {
        if(amount > 1){
            return setAmount(amount - 1)
        }
    }

    const addToCart = (selectedItem, shopAmount) => {
        const {id, price} = selectedItem

        const itemId = id;
        selectedItem.quantity += shopAmount;
        const itemTotalPrice = price * shopAmount

        const findId = cartItems.includes(itemId)
        if (!findId) {
            return(
                setCartItems([...cartItems, selectedItem]),
                setCartAmount(cartAmount + shopAmount),
                setAmount(1),
                setTotalPrice(totalPrice + itemTotalPrice),
                setShowBtn(true)
                )
            }
    }

    const removeCartItem = (id, itemQuantity, price) => {
        setCartAmount(cartAmount - itemQuantity)
        const itemTotalPrice = price * itemQuantity
        setTotalPrice(totalPrice - itemTotalPrice)

        let newItem = cartItems.find((item) => item.id == id)
        newItem.quantity = 0
        setCartItems(cartItems.filter((cartItem)=> cartItem.id !== id))
    }
    

    const sumAmountInCart = (id, price) => {
        setTotalPrice(totalPrice + price)
        setCartAmount(cartAmount + 1)
        let newItem = cartItems.find((item) => item.id == id)
        newItem.quantity += 1 
    }

    const restAmountInCart = (id, price) => {

        setTotalPrice(totalPrice - price)
        setCartAmount(cartAmount - 1)
        let newItem = cartItems.find((item) => item.id == id)
        newItem.quantity -= 1 
    }


    useEffect(()=>{
        deleteRepeatedID()
    }, [cartAmount])

    //LIMPIA EL ARREGLO DE cartItems. SINO, SALEN OBJETOS DUPLICADOS CON EL MISMO ID
    const deleteRepeatedID = () => {
        for(let i = cartItems.length -1; i >=0; i--){
            if(cartItems.indexOf(cartItems[i]) !== i) cartItems.splice(i,1);
            }
    }


    console.log(cartItems)
    console.log(totalPrice)


    
    return (
        <AppContext.Provider 
            value={{
            products,
            amount,
            sumAmount,
            restAmount,
            cartAmount,
            addToCart,
            cartItems,
            totalPrice,
            removeCartItem,
            sumAmountInCart,
            restAmountInCart,
            showBtn,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }

