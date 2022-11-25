import ProductViewCart from "./productViewCart";
import {AmountCounterProp, PriceViewProp} from "../../../Class/Misc/GlobalClass";
import AmountCounter from "../Misc/amountCounter";
import {ProductCartPage, ProviderCartPage} from "../../../Class/CartPage/CartPageClass";
import PriceView from "../Misc/priceView";
import {useContext} from "react";
import {ProductsCartContext} from "../../Providers/CartPage/CartPageProvider";
import style from "/styles/Desktop/CartPage/productRow.module.css";
import styleCart from "/styles/Desktop/CartPage/productsCart.module.css"

export default function ProductRow({item}: { item?: ProductCartPage }) {
    const cartProvider: ProviderCartPage = useContext(ProductsCartContext)
    const isGuest: boolean = cartProvider.ListGuest.length > 1
    const amountCounter: AmountCounterProp = {
        IdTarget: item.Id,
        InitialAmount: item.Amount,
        MaxAmount: item.MaxAMount,
        GetActualAmount: cartProvider.HandleAmount
    }
    const priceView: PriceViewProp = {
        Price: (item.Product.Price * item.Amount),
        DiscountPercent: item.Product.DiscountPercent,
        SizePrice: 24,
    }
    const handleChangeGuest = (e) => {
        cartProvider.ListGuest.forEach(item2 => {
            if (item2.Id == e.target.value) cartProvider.HandleBelongTo(item.Id, item2)
        })

    }
    const handleDeleteProduct = () => cartProvider.HandleDeleteProduct(item.Id)
    return (
        <div className={`${isGuest ? styleCart.gridSectionGuest : styleCart.gridSection} ${style.mainDiv}`}>
            <ProductViewCart deleteItem={handleDeleteProduct} item={item.Product}/>
            <div className={style.contCenter}>
                <AmountCounter item={amountCounter}/>
            </div>
            {
                isGuest &&
                <select onChange={handleChangeGuest} className={style.select}>
                    <option className={style.option} value={item.BelongTo.Id}>
                        {item.BelongTo.Name}
                    </option>
                    {
                        cartProvider.ListGuest.map((item2) =>
                            item2.Id != item.BelongTo.Id &&
                            <option className={style.option} value={item2.Id}>
                                {item2.Name}
                            </option>)
                    }
                </select>
            }
            <div className={style.contCenter}>
                <PriceView item={priceView}/>
            </div>
        </div>
    )
}