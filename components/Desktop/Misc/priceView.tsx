import style from "/styles/Desktop/Misc/priceView.module.css"
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
import {PriceViewProp} from "../../../Class/Misc/GlobalClass";

const defaultStyle = {
    Size: 18,
    PaddingTop: 0,
    PaddingBottom: 0
}
const beforeText: string = "Antes:"

export default function PriceView({item}: { item: PriceViewProp }) {
    const cssStyle = getCssStyle()

    return (
        <div style={{paddingTop: cssStyle.PaddingTop, paddingBottom: cssStyle.PaddingBottom, justifyContent: cssStyle.JustifyContent }}
            className={`${cssStyle.grid} ${style.mainDiv}`}>
            <div className={`${style.gridPriceIcon} ${cssStyle.JustifyPrice}`}>
                <div className={style.price} style={{fontSize: cssStyle.fontSize}}>
                    ${getMoneyValue(item.Price)}
                </div>
                {
                    (item.DiscountPercent != null && item.IsDiscountUp == null) &&
                    <div className={style.discountBox}>
                        <Image width={12} height={8} src={GlobalConst.sourceImages.dollarUp} alt={""}/>
                        <div className={style.discountStyle}>
                            {item.DiscountPercent}%
                        </div>
                    </div>
                }
            </div>

            {
                item.DiscountPercent != null &&
                <div className={style.beforePriceGrid}>
                    {
                        item.IsBeforeText &&
                        <div>{beforeText}</div>
                    }
                    {
                        (item.IsDiscountUp != null) &&
                        <div className={style.discountBox}>
                            <Image width={12} height={8} src={GlobalConst.sourceImages.dollarUp} alt={""}/>
                            <div className={style.discountStyle}>
                                {item.DiscountPercent}%
                            </div>
                        </div>
                    }
                    <div className={style.beforePrice}>
                        ${getMoneyValue((item.Price * item.DiscountPercent / 100) + item.Price)}
                    </div>
                </div>
            }
        </div>
    )

    function getCssStyle() {
        return {
            fontSize: item.SizePrice == null ? defaultStyle.Size : item.SizePrice,
            grid: item.TypeGrid != null && style.gridMainPrice,
            PaddingTop: item.PaddingTop == null? defaultStyle.PaddingTop : item.PaddingTop,
            PaddingBottom: item.PaddingBottom == null? defaultStyle.PaddingBottom : item.PaddingBottom,
            JustifyContent: item.JustifyContent != null && item.JustifyContent,
            JustifyPrice: item.JustifyPrice != null && style.justifyPrice
        }
    }
    function getMoneyValue(num: number): string {
        return Intl.NumberFormat("ES-CL").format(Math.round(num))
    }
}