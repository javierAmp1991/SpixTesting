import {createContext, useState} from "react";
import {CartProviderProps} from "../../Class/Global/global";

export const AddToCartContext = createContext(null)

export default function CartProvider({children}) {
    let [amountItems, setAmountItems] = useState(0)
    const handleAddProduct = () => setAmountItems(amountItems += 1)
    let providerCart: CartProviderProps = {
        NumberItems: amountItems,
        AddItems: handleAddProduct
    }
    return (
        <AddToCartContext.Provider value={providerCart}>
            {children}
        </AddToCartContext.Provider>
    )
}