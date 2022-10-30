import style from "/styles/Mobile/Misc/productViewHor.module.css"
import utilities from "/styles/utilities.module.css"
import Image from "next/image";
import {ProductItem} from "../../../Class/Misc/GlobalClass";
import {GlobalConst} from "../../../public/globalConst";
import RatingStarMob from "./ratingStarMob";

export default function ProductViewHorMobile({item, isDisplayOffer}:
                                           { item: ProductItem, isDisplayOffer: boolean }) {
    return (
        <div className={style.mainGrid}>
            <div className={style.mainDivImage}>
                <div className={style.sizeImage}>
                    <Image layout={"fill"} src={item.ImagePath} alt=""/>
                </div>
                {
                    item.DiscountPercent != null || item.Include != null ?
                        < div className={utilities.positionLastTicket}>
                            <Image layout={"fill"} src={GlobalConst.sourceImages.inOfferBanner} alt=""/>
                        </div> : <></>
                }
            </div>

            <div className={style.gridInfoProductHorizontal}>
                <div className={`${utilities.fontPrimaryText} ${utilities.clamp1}`}>
                    {item.Name}
                </div>
                {
                    item.Rating != null &&
                    <RatingStarMob item={item.Rating}/>
                }
                <div className={`${utilities.fontPrimaryText} ${utilities.clamp3}`}>
                    {item.Description}
                </div>
                <div className={style.gridPriceICon}>
                    <div className={utilities.fontPriceInclude}>
                        ${getMoneyValue(item.Price)}
                    </div>
                    {
                        item.DiscountPercent != null &&
                        <div className={style.discountBox}>
                            <Image width={12} height={8} src={"/images/dollarUp.png"} alt={""}/>
                            <span className={style.discountStyle}>
                            {item.DiscountPercent}%
                        </span>
                        </div>
                    }

                    {
                        isDisplayOffer &&
                        item.DiscountPercent != null || item.Include != null ?
                            <div className={`${utilities.fontSecundaryText}`}>
                                {
                                    item.Include != null ?
                                        <>
                                            {item.Include}
                                        </>
                                        :
                                        <>
                                            {/*<span>Antes: </span>*/}
                                            <span className="line-through">
                                    ${getMoneyValue((item.Price * item.DiscountPercent / 100) + item.Price)}
                                            </span>
                                        </>
                                }
                            </div> : <></>
                    }
                </div>


            </div>
        </div>
    )

    function getMoneyValue(num: number): string {
        return Intl.NumberFormat("ES-CL").format(Math.round(num))
    }
}