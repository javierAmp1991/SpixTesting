import utilities from "/styles/utilities.module.css"
import styles from "/styles/Mobile/Events/eventWithBannerMobile.module.css"
import React, {useEffect, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import PrincipalInfoEventMobile, {PrincipalInfoEventPropMob} from "../Misc/principalInfoEventMobile";
import {GlobalConst} from "../../../public/globalConst";
import ProductViewMobile from "../Misc/productViewMobile";

const alignmentTextProduct: string = "text-center"


export default function EventWithBannerMobile({item, darkModeState, displayLogoRating}) {
    let cssStyles = getCssStyles();
    const principalInfoEventProp: PrincipalInfoEventPropMob = {
        Title: item.EventName,
        Subtitle: item.Subtitle,
        Rating: item.Rating,
        isDarkMode: false
    }
    let [isActive, setIsActive] = useState(false);
    const handleClick = () => {
        setIsActive(isActive = !isActive);
    };
    let [visibility, setVisibility] = React.useState(true);
    let [timeOut, setTimeOut] = useState(new Date(2022, 8, 23, 23, 59, 59))
    let [seconds, setSeconds] = useState((timeOut.getSeconds() - new Date().getSeconds()).toLocaleString())
    let [minutes, setMinutes] = useState((timeOut.getMinutes() - new Date().getMinutes()).toLocaleString())
    let [hours, setHours] = useState((timeOut.getHours() - new Date().getHours()).toLocaleString())

    const handleTimer = () => {
        setSeconds(correctNumber((timeOut.getSeconds() - new Date().getSeconds())))
        setMinutes(correctNumber((timeOut.getMinutes() - new Date().getMinutes())))
        setHours(correctNumber((timeOut.getHours() - new Date().getHours())))
    }

    function correctNumber(num: number): string {
        if (num >= 0 && num <= 9) {
            return `0${num}`
        } else return `${num}`
    }

    useEffect(() => {
        const timerInt = setInterval(handleTimer, 1000)
        return () => clearInterval(timerInt)
    }, [])

    return (
        <Link href={"/eventPage"}>
            <div className={`${cssStyles.borderCard} ${styles.mainDiv}`}>
                <div className={styles.sizeBannerEWB}>
                    <Image layout={"fill"} objectFit={"cover"} src={item.BannerPath} alt=""/>
                </div>
                {/*{
                    displayLogoRating &&
                    <div className={`${styles.positionLogo} ${utilities.gradientLogoDesktop}`}>
                        <div className={styles.propertiesLogoEWB}>
                            <Image layout={"fill"} src={item.LogoPath} alt=""/>
                        </div>
                    </div>
                }*/}

                <div className={`${cssStyles.bgInfo} ${styles.mainDivInfo}`}>

                    <PrincipalInfoEventMobile item={principalInfoEventProp}/>

                    <div className={styles.mainDivTimer}>
                        <span>
                            Expira en
                        </span>
                        <span>
                            {hours}:{minutes}:{seconds}
                        </span>
                    </div>


                    <div className={styles.gridTags}>
                        {
                            item.Tags.map(offer =>
                                <div key={offer} className={utilities.styleSpixDiscountTag}>
                                    {offer}
                                </div>
                            )
                        }
                    </div>
                </div>

                <div className={styles.containerCarrouselEWB}>
                    <div onPointerOver={showArrow} onPointerOut={hiddeArrow}
                         className={styles.overflowCarrouselProductsEWB}>
                        <div className={styles.gridCarrouselProductsEWB}>
                            {
                                item.ListProducts.map((product, index) =>
                                        <ProductViewMobile key={index} isDisplayOffer={false} item={product} size={110}/>
                                    /*<div key={product.Name} className={styles.mainDivPro}>
                                        <div className="mb-2">
                                            <div className={`${styles.sizeProductEWB}`}>
                                                <Image layout={"fill"}
                                                       src={product.ImagePath} alt=""/>
                                            </div>
                                        </div>
                                        <div
                                            className={`${utilities.fontPriceInclude} mb-1 ${alignmentTextProduct} `}>
                                            ${Intl.NumberFormat("ES-CL"
                                        ).format(Math.round(product.Price))}
                                        </div>
                                        <div
                                            className={`${utilities.fontSecundaryText} ${alignmentTextProduct} 
                                                        ${utilities.font12}`}>
                                            <span>Antes: </span>
                                            <span className="line-through">
                                                    ${Intl.NumberFormat("ES-CL"
                                            ).format(Math.round((product.Price * product.DiscountPercent / 100) + product.Price))}
                                            </span>
                                        </div>
                                    </div>*/
                                )
                            }
                        </div>
                    </div>
                </div>

            </div>
        </Link>
    )

    function showArrow() {
        setVisibility(visibility = false);
    }

    function hiddeArrow() {
        setVisibility(visibility = true)
    }

    function getCssStyles() {
        return {
            borderCard: darkModeState ? utilities.borderCardsNoHoverDarkMode : utilities.borderCardsNoHover,
            bgInfo: darkModeState ? utilities.bgDarkModeInfo : utilities.bgNormalInfo,
            fontSubTitle: darkModeState ? utilities.fontSubTitleDarkMode : utilities.fontSubTitle,
            fontPrimaryText: darkModeState ? utilities.fontPrimaryTextDarkMode : utilities.fontPrimaryText,
            paddingUnderLogo: displayLogoRating ? "pt-10" : "pt-4"
        }
    }

}