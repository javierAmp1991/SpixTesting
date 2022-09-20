import Image from "next/image";
import style from "/styles/Desktop/Events/imageGradientView.module.css"
import React, {useState} from "react";
import {BaseEventCardWithGradient, EventCardWithGradientPrice} from "../../../dataDemo/EventView/EventCardWithGradient";
import PrincipalInfoEvent, {PrincipalInfoEventProp} from "../Misc/principalInfoEvent";
import PriceIncludeInfoEvent from "../Misc/priceIncludeInfoEvent";
import utilities from "/styles/utilities.module.css";

export default function ImageGradientView({item, isDarkMode}:
                                              { item: BaseEventCardWithGradient, isDarkMode: boolean }) {

    let [stateVisible, setStatVisible] = useState(false)
    const cssStyle = getCssStyle()
    const itemWithPrice: EventCardWithGradientPrice = item as EventCardWithGradientPrice
    const principalInfoEventProp: PrincipalInfoEventProp = {
        Title: item.Title,
        Subtitle: item.Subtitle,
        Rating: item.Rating,
        isDarkMode: true
    }
    const priceIncludeInfo = {
        MaxPrice: itemWithPrice.MaxPrice,
        MinPrice: itemWithPrice.MinPrice,
        IsDarkMode: true
    }
    const handleShow = () => {
        setStatVisible(stateVisible = true)
    }
    const handleHidde = () => {
        setStatVisible(stateVisible = false)

    }

    return (
        <div className={cssStyle.border} onPointerOver={handleShow} onPointerOut={handleHidde}>
            <div className={style.mainDiv}>
                <div className={style.sizeImage}>
                    <Image layout={"fill"} objectFit={"cover"} src={item.PathImage} alt={""}/>
                </div>
                <div className={cssStyle.gradient}/>
                <div className={style.gradient2}/>

                <div className={style.mainDivInfo}>
                    <PrincipalInfoEvent item={principalInfoEventProp}/>
                    <div className={cssStyle.divPrice}>
                        <PriceIncludeInfoEvent item={priceIncludeInfo}/>
                    </div>
                </div>
            </div>
        </div>
    )

    function getCssStyle() {
        return {
            gradient: stateVisible ? style.gradientVisible : style.gradient,
            divPrice: stateVisible ? style.priceVisible : style.price,
            border: isDarkMode ? utilities.borderCardDesktopDarkModeNoHover : utilities.borderCardDesktopNoHover
        }

    }
}