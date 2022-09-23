import style from "/styles/Desktop/Misc/productView.module.css"
import utilities from "/styles/utilities.module.css"
import {Product} from "../../../dataDemo/data";
import {GlobalConst} from "../../../public/globalConst";
import Image from "next/image";

export default function ProductViewDesk({item, size, isDisplayOffer}:
                                            { item: Product, size: number, isDisplayOffer: boolean }) {


    let getSizeProduct = getProductSize()
    return (
        <div className={style.boxShadowPro} style={getSizeProduct.widthContainer}>
            <div style={getSizeProduct.sizeImage} className={style.aspectRatio}>
                <div className={style.aspectImage}>
                    <Image layout={"fill"} src={item.ImagePath} alt=""/>
                </div>
            </div>

            {
                item.Include != null || item.DiscountPercent != null &&
                <div className={`${utilities.positionLastTicket} ${style.zindexListon}`}>
                    <Image layout={"fill"} src={GlobalConst.sourceImages.inOfferBanner} alt=""/>
                </div>
            }


            <div className={style.gridInfoProduct}>
                <div className={`${utilities.fontPrimaryText} ${utilities.clamp1}`}>
                    {item.Name}
                </div>
                <div className={`${utilities.fontPriceInclude} ${style.gridPriceICon}`}>
                    ${getMoneyValue(item.Price)}
                    {
                        item.DiscountPercent != null &&
                        <div className={style.discountBox}>
                            <Image width={12} height={8} src={"/images/dollarUp.png"}/>
                            <span className={style.discountStyle}>
                            {item.DiscountPercent}%
                        </span>
                        </div>
                    }
                </div>

                {
                    isDisplayOffer &&
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
                    </div>
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
            sizeImage: size != null ? {height: (size - 10), width: (size - 10)} : {}
        }
    }
}