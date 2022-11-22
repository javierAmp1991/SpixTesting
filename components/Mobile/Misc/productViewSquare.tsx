import style from "/styles/Mobile/Misc/productViewSquare.module.css"
import utilities from "/styles/utilities.module.css"
import {Product} from "../../../dataDemo/data";
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
import PriceView from "../../Desktop/Misc/priceView";
import {PriceViewProp} from "../../../Class/Misc/GlobalClass";

export default function ProductViewSquareMobile({item, size, isDisplayOffer}:
                                                    { item: Product, size: number, isDisplayOffer: boolean }) {


    let getSizeProduct = getProductSize()
    const priceViewProp: PriceViewProp = {
        SizePrice: 21,
        Price: item.Price,
        DiscountPercent: item.DiscountPercent,
        IsBeforeText: false,
        TypeGrid: true,
    }

    return (
        <div className={style.boxShadowPro} style={getSizeProduct.widthContainer}>
            {
                item.Include != null || item.DiscountPercent != null ?
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
               <PriceView item={priceViewProp}/>
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