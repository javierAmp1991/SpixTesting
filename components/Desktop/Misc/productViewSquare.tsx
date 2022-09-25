import style from "/styles/Desktop/Misc/productViewSquare.module.css"
import utilities from "/styles/utilities.module.css"
import {Product} from "../../../dataDemo/data";
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";

export default function ProductViewSquare({item, size, isDisplayOffer}:
                                              { item: Product, size: number, isDisplayOffer: boolean }) {


    let getSizeProduct = getProductSize()
    return (
        <div className={style.boxShadowPro} style={getSizeProduct.widthContainer}>
            {
                item.DiscountPercent != null || item.Include != null ?
                <div className={`${utilities.positionLastTicket} ${style.zindexListon}`}>
                    <Image layout={"fill"} src={GlobalConst.sourceImages.inOfferBanner} alt=""/>
                </div> : <></>
            }
            <div className={style.contImage}>
                <div className={style.aspectRatio}>
                    <Image layout={"fill"} src={item.ImagePath} alt=""/>
                </div>
            </div>
            <div className={style.gridInfoProduct}>
                {item.Name}
                <div className={`${utilities.fontPriceIncludeDesktop} ${style.gridPriceICon}`}>
                    ${getMoneyValue(item.Price)}
                    {
                        item.DiscountPercent != null &&
                        <div className={style.discountBox}>
                            <Image width={12} height={8} src={"/images/dollarUp.png"} alt={""}/>
                            <span className={style.discountStyle}>
                            {item.DiscountPercent}%
                        </span>
                        </div>
                    }
                </div>
                {
                    item.DiscountPercent != null || item.Include != null ?
                    <div className={`${utilities.fontSecundaryText}`}>
                        {
                            item.Include != null ?
                                <>
                                    {item.Include}
                                </>
                                :
                                <>
                                    <span>Antes: </span>
                                    <span className="line-through">
                                    ${getMoneyValue((item.Price * item.DiscountPercent / 100) + item.Price)}
                                </span>
                                </>
                        }
                    </div> : <></>
                }

            </div>
        </div>
    )

    function getMoneyValue(num: number): string {
        return Intl.NumberFormat("ES-CL").format(Math.round(num))
    }

    function getProductSize() {
        return {
            widthContainer: size != null ? {width: size} : {},
        }
    }
}