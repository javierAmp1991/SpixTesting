import style from "/styles/Desktop/CartPage/productsCart.module.css"
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";

const title: string = "Mi carrito"
const addInv: string = "Agregar invitados"
export default function ProductsCart() {
    return (
        <div className={style.mainDiv}>
            <div className={style.gridTitleAdd}>
                <div>
                    {title}
                </div>
                <div className={style.gridAddIcon}>
                    {addInv}
                    <div className={style.sizeAddImage}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.addIcon}/>
                    </div>
                </div>
            </div>
        </div>
    )
}