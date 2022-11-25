import {AmountCounterProp, PriceViewProp} from "../../../Class/Misc/GlobalClass";
import {ProductCartPage, ProviderCartPage} from "../../../Class/CartPage/CartPageClass";
import {useContext} from "react";
import {ProductsCartContext} from "../../Providers/CartPage/CartPageProvider";
import style from "/styles/Mobile/CartPage/productRow.module.css";
import AmountCounter from "../../Desktop/Misc/amountCounter";
import PriceView from "../../Desktop/Misc/priceView";
import ProductViewCartMobile from "./productViewCartMobile";

export default function ProductRowMobile({item}: { item?: ProductCartPage }) {
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
        TypeGrid: true
    }
    const handleChangeGuest = (e) => {
        cartProvider.ListGuest.forEach(item2 => {
            if (item2.Id == e.target.value) cartProvider.HandleBelongTo(item.Id, item2)
        })

    }
    const handleDeleteProduct = () => cartProvider.HandleDeleteProduct(item.Id)
    return (
        <div className={style.mainDiv}>
            <ProductViewCartMobile deleteItem={handleDeleteProduct} item={item.Product}/>
            <PriceView item={priceView}/>
            <div className={style.gridAmountGuest}>
                <AmountCounter item={amountCounter}/>
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
            </div>
        </div>
    )
}