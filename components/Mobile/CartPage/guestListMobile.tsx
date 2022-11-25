import style from "/styles/Mobile/CartPage/guestList.module.css"
import {BelongToGuest, ProviderCartPage} from "../../../Class/CartPage/CartPageClass";
import {useContext} from "react";
import {ProductsCartContext} from "../../Providers/CartPage/CartPageProvider";
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";

const myGuests: string = "Mis invitados"
const productsText: string = "productos"

export default function GuestListMobile() {
    const cartProvider: ProviderCartPage = useContext(ProductsCartContext)
    const isGuest: boolean = cartProvider.ListGuest.length == 0
    const handleDelete = (item: BelongToGuest) => cartProvider.HandleGuest(item, false)

    return (
        isGuest ?
            <>
            </>
            :
            <div className={style.mainDiv}>
                <div className={style.title}>
                    {myGuests}
                </div>
                <div className={style.gridGuests}>
                    {
                        cartProvider.ListGuest.map((item, index) =>
                            <div key={item.Id} className={style.gridGuestIcon}>
                                <span>{item.Name}: {getNumberProducts(item.Name)} {productsText}</span>
                                {
                                    index != 0 &&
                                    <button type={"button"} onClick={() => handleDelete(item)}
                                            className={style.deleteIcon}>
                                        <Image layout={"fill"} src={GlobalConst.sourceImages.closeX} alt={""}/>
                                    </button>
                                }
                            </div>
                        )
                    }
                </div>
            </div>
    )

    function getNumberProducts(name: string): number {
        let control = 0
        cartProvider.Products.forEach(item => {
            if (item.BelongTo.Name == name) control += item.Amount
        })
        return control

    }
}