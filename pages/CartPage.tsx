import CartPageDefault from "../components/Globals/CartPageDefault";
import CartPageProvider from "../components/Providers/CartPage/CartPageProvider";

export default function CartPage() {
    return (
        <CartPageProvider>
            <CartPageDefault/>
        </CartPageProvider>
    )
}