import style from "/styles/Desktop/Misc/productPopUp.module.css"
import {ProductItem, TypeProducts} from "../../../Class/Misc/GlobalClass";
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
import utilities from "/styles/utilities.module.css";

const textService: string = "servicio?"
const textProduct: string = "producto?"
const qualifyThisText: string = "¿Como califica este"

export default function ProductPopUp({item}: { item: ProductItem }) {
    return (
        <div className={style.mainDiv}>
            <div className={style.mainGrid}>
                <div className={style.sizeImage}>
                    <Image layout={"fill"} src={item.ImagePath} alt={""}/>
                    {
                        (item.Type == TypeProducts.Service && item.Time != null) &&
                        <div className={style.sizeTimeIcon}>
                    <span className={style.colorTime}>
                        {item.Time}
                    </span>
                            <span className={style.colorTime}>
                        min
                    </span>
                        </div>
                    }
                </div>
                <div className={style.mainContInfo}>
                    <div className={style.name}>
                        {item.Name}
                    </div>
                    <div>
                        <div className={style.gridRating}>
                            {
                                [...Array(5)].map((e, index) =>
                                    item.Type == TypeProducts.Service ?
                                        <div className={style.sizeRating}>
                                            <Image layout={"fill"} src={GlobalConst.sourceImages.ratingIndVoid} alt={""}/>
                                        </div>
                                        :
                                        <div className={style.sizeRating}>
                                            <Image layout={"fill"} src={GlobalConst.sourceImages.hamburguerIcon} alt={""}/>
                                        </div>
                                )
                            }
                        </div>
                        <div className={style.qualify}>
                            {qualifyThisText} {item.Type == TypeProducts.Service ? textService : textProduct}
                        </div>
                    </div>
                    <div className={style.description}>
                        {item.Description}
                    </div>
                    <div className={style.separationLine}/>
                    <div className={style.gridPriceICon}>
                        <div className={style.price}>
                            ${getMoneyValue(item.Price)}
                        </div>

                        {
                            item.DiscountPercent != null &&
                            <div className={style.discountBox}>
                                <div className={style.sizeDollarUp}>
                                    <Image layout={"fill"} src={GlobalConst.sourceImages.dollarUp} alt={""}/>
                                </div>
                                <span className={style.discountStyle}>{item.DiscountPercent}%</span>
                            </div>
                        }

                        {
                            (item.DiscountPercent != null || item.Include != null) &&
                            <div className={`${utilities.fontSecundaryText}`}>
                                {
                                    item.Include != null ?
                                        <div className={`${style.discountBox} ${style.discountStyle}`}>
                                            {item.Include}
                                        </div>
                                        :
                                        <div className="line-through">
                                            ${getMoneyValue((item.Price * item.DiscountPercent / 100) + item.Price)}
                                        </div>
                                }
                            </div>
                        }
                    </div>
                    <div>
                        <div className={style.button}>
                            Comprar
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    function getMoneyValue(num: number): string {
        return Intl.NumberFormat("ES-CL").format(Math.round(num))
    }
}