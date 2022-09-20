import Image from "next/image";
import style from "/styles/Mobile/Events/imageGradientView.module.css"
import RatingStar from "../Misc/ratingStar";
import React, {useState} from "react";
import {BaseEventCardWithGradient, EventCardWithGradientPrice} from "../../../dataDemo/EventView/EventCardWithGradient";
import {GlobalConst} from "../../../public/globalConst";

export default function ImageGradientViewMobile({item}: { item: BaseEventCardWithGradient }) {
    let itemWithPrice: EventCardWithGradientPrice = item as EventCardWithGradientPrice
    let [stateVisible, setStatVisible] = useState(false)
    const handleShow = () => {
        setStatVisible(stateVisible = true)
    }
    const handleHidde = () => {
        setStatVisible(stateVisible = false)

    }
    function getMoneyValue(num: number): string {
        return Intl.NumberFormat("ES-CL").format(Math.round(num))
    }

    return (
        <div className={style.principalDiv}>
            <div className={style.mainDiv}>
                <div className={style.sizeImage}>
                    <Image layout={"fill"} objectFit={"cover"} src={item.PathImage} alt={""}/>
                </div>
                <div className={stateVisible ? style.gradientVisible : style.gradient}/>
                <div className={style.gradient2}/>
                <div className={style.mainDivInfo}>
                    <div className={style.title}>
                        {item.Title}
                    </div>
                    <div className={style.subtitle}>
                        {item.Subtitle}
                    </div>
                    <div className={style.contRating}>
                        <RatingStar item={1}/>
                    </div>
                    <div className={`${style.gridIconInfo} ${stateVisible ? style.priceVisible : style.price}`}>
                        <div className={style.sizeIcon}>
                            <Image layout={"fill"} src={GlobalConst.sourceImages.ticketIconWhite} alt={""}/>
                        </div>
                        {
                            itemWithPrice.MinPrice == itemWithPrice.MaxPrice ?
                                <div>
                                    {getMoneyValue(itemWithPrice.MinPrice)}
                                </div>
                                :
                                <div>
                                    {getMoneyValue(itemWithPrice.MinPrice)} - {getMoneyValue(itemWithPrice.MaxPrice)}
                                </div>
                        }
                    </div>
                    {/*<div className={stateVisible ? style.priceVisible : style.price}>
                        $12.990 <span className={style.beforePriceText}>Antes </span><span
                        className={style.beforePrice}>$20.990</span>
                    </div>*/}
                </div>
            </div>
        </div>
    )
}