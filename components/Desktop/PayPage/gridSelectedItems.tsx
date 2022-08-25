import style from "/styles/Desktop/PayPage/gridSelectedItems.module.css"
import utilities from "/styles/utilities.module.css"

const titleSection: string = "Productos seleccionados"
import {GuestProducts} from "../../../dataDemo/data";
import PayPageProductSelectedView from "./productSelectedView";

export default function GridSelectedItems({guestProducts, isLast}:
{ guestProducts: GuestProducts, isLast:boolean }) {
    return (
        <div className={style.mainCont}>
            <div className={`${utilities.fontTitle} ${style.marginBottom}`}>
                {guestProducts.NameGuest} ({guestProducts.ListProducts.length})
            </div>

            <div className={isLast? style.gridLast : style.grid}>
                {
                    guestProducts.ListProducts.map((item, index) =>
                        <PayPageProductSelectedView item={item} key={index}/>
                    )
                }
            </div>
        </div>
    )
}