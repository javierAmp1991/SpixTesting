import style from "/styles/Desktop/Misc/productViewSquare.module.css"
import utilities from "/styles/utilities.module.css"
import {Product} from "../../../dataDemo/data";
import Image from "next/image";

export default function ProductViewSquare({item, size, isDisplayOffer}:
                                              { item: Product, size: number, isDisplayOffer: boolean }) {


    let getSizeProduct = getProductSize()
    return (
        <div className={style.boxShadowPro} style={getSizeProduct.widthContainer}>
            <div className={style.contImage}>
                <div className={style.aspectRatio}>
                    <Image layout={"fill"} src={item.ImagePath} alt=""/>
                </div>
            </div>
            <div className={style.gridInfoProduct}>
                <div>
                    {item.Name}
                </div>
                <div className={`${utilities.fontPriceInclude}`}>
                    ${getMoneyValue(item.Price)}
                </div>
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
            </div>
            {/*<div className={utilities.positionLastTicket}>
                <Image layout={"fill"} src={GlobalConst.sourceImages.inOfferBanner} alt=""/>
            </div>*/}
        </div>
    )

    function getMoneyValue(num: number): string {
        return Intl.NumberFormat("ES-CL").format(Math.round(num))
    }

    function getProductSize() {
        return {
            widthContainer: size != null ? {height: size, width: size} : {},
            sizeImage: size != null ? {width: size - 57} : {}
        }
    }
}