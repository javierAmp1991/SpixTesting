import style from "/styles/Mobile/CartPage/productsCart.module.css"
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
import {useContext, useState} from "react";
import {ProductsCartContext} from "../../Providers/CartPage/CartPageProvider";
import {ColumnAlignment, ProviderCartPage} from "../../../Class/CartPage/CartPageClass";
import ProductRowMobile from "./productRowMobile";

const columnAlignment: ColumnAlignment[] = [
    {
        Id: "idALignment001",
        Name: "Cantidad",
        State: false,
        Index: 1
    },
    {
        Id: "idALignment002",
        Name: "Invitados",
        State: false,
        Index: 2
    },
    {
        Id: "idALignment003",
        Name: "Precio total",
        State: false,
        Index: 3
    }
]
const controlGuest: number = 2
const translateUp: string = `rotate(-180deg)`
const translateDown: string = `rotate(0)`

export default function ProductsCartMobile() {
    const cartProvider: ProviderCartPage = useContext(ProductsCartContext)
    const isGuest: boolean = cartProvider.ListGuest.length > 1
    let [alignment, setAlignment] = useState(columnAlignment)
    const handleSort = (num: number, orderBy: boolean) => {
        if (num != 0) {
            if (num == 1) cartProvider.SortByAMount(orderBy)
            if (num == 2) cartProvider.SortByBelongTo(orderBy)
            if (num == 3) cartProvider.SortByPrice(orderBy)
            let newALignment = alignment.map(item => {
                if (item.Index == num) return {...item, State: !orderBy}
                else return {...item}
            })
            setAlignment(newALignment)
        }
    }

    return (
        <div className={style.mainDiv}>
            <div className={`${style.contFilter} ${style.lineUnder}`}>
                <div className={`${isGuest? style.grid3 : style.grid2} ${style.gridSection}`}>
                    {
                        alignment.map((item, index) =>
                            item.Index == controlGuest ?
                                isGuest &&
                                <button onClick={() => handleSort(item.Index, item.State)}
                                        className={style.columnText} key={item.Id}>{item.Name}
                                    <div style={{transform: getRotateArrow(item.State)}}
                                        className={style.sizeBottomArrow}>
                                        <Image layout={"fill"} src={GlobalConst.sourceImages.bottomArrow} alt={""}/>
                                    </div>
                                </button>
                                :
                                <button onClick={() => handleSort(item.Index, item.State)} className={style.columnText}
                                        key={item.Id}>
                                    {item.Name}
                                    <div style={{transform: getRotateArrow(item.State)}}
                                        className={style.sizeBottomArrow}>
                                        <Image layout={"fill"} src={GlobalConst.sourceImages.bottomArrow} alt={""}/>
                                    </div>
                                </button>
                        )
                    }
                </div>
            </div>

            <div className={style.gridProducts}>
                {cartProvider.Products.map(item => <ProductRowMobile key={item.Id} item={item}/>)}
            </div>
        </div>
    )
    function getRotateArrow(isUp) {
        return isUp ? translateUp : translateDown
    }
}