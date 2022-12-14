import style from "/styles/Desktop/Misc/productViewSquare.module.css"
import {Product} from "../../../dataDemo/data";
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
import RatingStarDesk from "./ratingStarDesk";
import PriceView from "./priceView";
import {PriceViewProp} from "../../../Class/Misc/GlobalClass";

export default function ProductViewSquare({item, size}:
                                              { item: Product, size: number, isDisplayOffer: boolean }) {
    const priceViewProp: PriceViewProp = {
        Price: item.Price,
        DiscountPercent: item.DiscountPercent,
        IsBeforeText: true
    }

    let getSizeProduct = getProductSize()
    return (
        <div className={style.boxShadowPro} style={getSizeProduct.widthContainer}>
            {
                (item.DiscountPercent != null || item.Include != null) &&
                <div className={style.zindexListon}>
                    <Image layout={"fill"} src={GlobalConst.sourceImages.inOfferBanner} alt=""/>
                </div>
            }
            <div className={style.contImage}>
                <div className={style.aspectRatio}>
                    <Image layout={"fill"} src={item.ImagePath} alt=""/>
                </div>
            </div>
            <div className={style.gridInfoProduct}>
                {item.Name}
                {
                    item.Rating != null &&
                    <div className={style.paddingStar}>
                        <RatingStarDesk item={item.Rating}/>
                    </div>
                }
                <PriceView item={priceViewProp}/>
            </div>
        </div>
    )

    function getProductSize() {
        return {
            widthContainer: size != null ? {width: size} : {},
        }
    }
}