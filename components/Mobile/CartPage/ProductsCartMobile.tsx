import style from "/styles/Mobile/CartPage/productsCart.module.css"
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
import {useContext} from "react";
import {ProductsCartContext} from "../../Providers/CartPage/CartPageProvider";
import {ProviderCartPage} from "../../../Class/CartPage/CartPageClass";
import ProductRowMobile from "./productRowMobile";


const listSections: string[] = ["Cantidad", "Invitados", "Precio total"]
const controlGuest: number = 1
const noProductsCart: string = "No hay productos en tu carrito"
const filterBy: string = "Filtrar por: "

export default function ProductsCartMobile() {
    const cartProvider: ProviderCartPage = useContext(ProductsCartContext)
    const isGuest: boolean = cartProvider.ListGuest.length > 1
    const isEmpty: boolean = cartProvider.Products.length == 0
    const handleSort = (num: number) => {
        if (num == 1) cartProvider.SortByAMount(true)
        else if (num == 2) cartProvider.SortByBelongTo(true)
        else cartProvider.SortByPrice(true)
    }

    return (
        <div className={style.mainDiv}>
            {
                !isEmpty &&
                <div className={`${style.contFilter} ${style.lineUnder}`}>
                    <div className={style.filterBy}>
                        {filterBy}
                    </div>
                    <div className={style.gridSection}>
                        {
                            listSections.map((item, index) =>
                                index == controlGuest ?
                                    isGuest &&
                                    <button onClick={() => handleSort(index)}
                                            className={style.columnText} key={item}>{item}
                                        <div className={style.sizeBottomArrow}>
                                            <Image layout={"fill"} src={GlobalConst.sourceImages.bottomArrow} alt={""}/>
                                        </div>
                                    </button>
                                    :
                                    <button onClick={() => handleSort(index)} className={style.columnText}
                                            key={item}>
                                        {item}
                                        <div className={style.sizeBottomArrow}>
                                            <Image layout={"fill"} src={GlobalConst.sourceImages.bottomArrow} alt={""}/>
                                        </div>
                                    </button>
                            )
                        }
                    </div>
                </div>
            }

            {
                isEmpty ?
                    <div className={style.noProducts}>
                        {noProductsCart}
                    </div>
                    :
                    <div className={style.gridProducts}>
                        {cartProvider.Products.map(item => <ProductRowMobile key={item.Id} item={item}/>)}
                    </div>
            }
        </div>
    )
}