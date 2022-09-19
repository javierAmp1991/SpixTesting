import Image from "next/image";
import style from "/styles/Desktop/Search/productOfferSearch.module.css"
import utilities from "/styles/utilities.module.css";

export default function ProductOfferSearch() {
    return (
        <div className={style.mainDiv}>
            <div className={style.maindContImage}>
                <div className={style.sizeImage}>
                    <Image layout={"fill"} src={"/images/product6.jpg"} alt={""}/>
                </div>
            </div>
            <div className={style.divInfo}>
                <div className={style.contTimer}>
                    <div className={style.timerCont}>
                        00:07:18
                    </div>
                </div>
                <div className={style.contName}>
                    Producto numero uno
                </div>
                <div className={style.stylePrice}>
                    $18.990
                </div>
                <div>
                    <span className={utilities.fontPriceBeforeText}> Antes </span>
                    <span className={utilities.fontPriceBeforeDesktop}> $11.990</span>
                </div>
                {/*<div className={style.discountStyle}>
                    50% de descuento
                </div>*/}
                <div className={`${utilities.styleLink} ${style.styleLink}`}>
                    Tributo Red Hot Chilli Pepper
                </div>
            </div>
        </div>
    )
}