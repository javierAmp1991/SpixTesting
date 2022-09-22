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
        Rating: null,
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

                <div className={`${cssStyles.bgInfo} ${styles.mainDivInfo}`}>
                    <div>
                        <PrincipalInfoEventMobile item={principalInfoEventProp}/>
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
                    <div className={styles.mainDivTimer}>
                        <div>
                            Expira en
                        </div>
                        <div>
                            {hours}:{minutes}:{seconds}
                        </div>
                    </div>
                </div>

                <div className={styles.containerCarrouselEWB}>
                    <div onPointerOver={showArrow} onPointerOut={hiddeArrow}
                         className={styles.overflowCarrouselProductsEWB}>
                        <div className={styles.gridCarrouselProductsEWB}>
                            {
                                item.ListProducts.map((product, index) =>
                                    index >= 0 && index <= 2 &&
                                    <ProductViewMobile key={index} isDisplayOffer={false} item={product} size={null}/>
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