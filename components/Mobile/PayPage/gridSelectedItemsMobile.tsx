import utilities from "/styles/utilities.module.css"
import style from "/styles/Mobile/PayPage/gridSelectedItems.module.css"
import {GuestProducts} from "../../../dataDemo/data";
import ProductSelectedViewMobile from "../eventProducts/productSelectedViewDesk";
import PayPageProductSelectedViewMobile from "./productSelectedViewMobile";

const returntext: string = "Volver"

const titleSection = "Productos seleccionados"
export default function GridSelectedItemsMobile({guestProducts, isLast, returnDisplay}:
                                                    {
                                                        guestProducts: GuestProducts,
                                                        isLast: boolean,
                                                        returnDisplay: any
                                                    }) {
    {
        return (
            <div className={isLast? style.mainContLast : style.mainCont}>
                <div className={style.gridTitleCar}>
                    <div className={`${utilities.fontSubTitle}`}>
                        {guestProducts.NameGuest} ({guestProducts.ListProducts.length})
                    </div>
                </div>
                <div className={style.grid}>
                    {
                        guestProducts.ListProducts.map((item, index) =>
                            <PayPageProductSelectedViewMobile key={index} item={item}/>
                        )
                    }
                </div>
            </div>
        )
    }
}