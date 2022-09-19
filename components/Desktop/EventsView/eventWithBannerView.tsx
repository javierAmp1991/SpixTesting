import utilities from "/styles/utilities.module.css"
import styles from "/styles/Desktop/Events/eventWithBanner.module.css"
import React, {useEffect, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import PrincipalInfoEvent, {PrincipalInfoEventProp} from "../Misc/principalInfoEvent";
import ProductViewHorizontal from "../Misc/ProductViewHorizontal";

export default function EventWithBannerView({item, darkModeState, sizeImageProduct}) {
    const principalInfoEventProp: PrincipalInfoEventProp = {
        Title: item.EventName,
        Subtitle: item.Subtitle,
        Rating: item.Rating,
        isDarkMode: false
    }
    let cssStyles = getCssStyles();
    let [timeOut, setTimeOut] = useState(new Date(2023, 11, 23, 23, 59, 59))
    let [seconds, setSeconds] = useState("00")
    let [minutes, setMinutes] = useState("00")
    let [hours, setHours] = useState("00")

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
    })

    return (

        <div className={`${cssStyles.borderCard} ${styles.widthContainer}`}>
            <div className="grid">
                <Link href={"/eventPage"}>
                    <div className={styles.sizeBannerEWB}>
                        <Image layout={"fill"} src={item.BannerPath} alt=""/>
                    </div>
                </Link>

                <div className={`${cssStyles.bgInfo} ${styles.mainContainerInfo}`}>
                    <div className={styles.mainDivInfoQ}>
                        <div className={styles.grid1Info}>
                            <PrincipalInfoEvent item={principalInfoEventProp}/>
                            <div className={styles.mainDivTimer}>
                                <span>Expira en </span>
                                <span>{hours}:{minutes}:{seconds}</span>
                            </div>
                            <div className={styles.gridTags}>
                                {
                                    item.Tags.map((offer, index) =>
                                        <div key={index} className={utilities.styleSpixDiscountTag}>
                                            {offer}
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        <div className={styles.containerCarrouselEWB}>
                            <div className={styles.overflowCarrouselProductsEWB}>
                                <div className={styles.gridCarrouselProductsEWB}>
                                    {
                                        item.ListProducts.map((item, index) =>
                                            index >= 0 && index <= 6 &&
                                            <ProductViewHorizontal item={item} size={sizeImageProduct} isDisplayOffer={true} key={index}/>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                        {/*<div className={styles.gridAdInfo}>
                            <div className={utilities.fontPrimaryTextText}>
                                <span>Categoria: </span>
                                <span>{item.Category}</span>
                            </div>

                            <div className={styles.mainDivTimer}>
                                <span>Expira en </span>
                                <span>{hours}:{minutes}:{seconds}</span>
                            </div>

                            <div className={styles.gridTags}>
                                {
                                    item.Tags.map((offer, index) =>
                                        <div key={index} className={utilities.styleSpixDiscountTag}>
                                            {offer}
                                        </div>
                                    )
                                }
                            </div>
                        </div>*/}
                        {/*<div className={styles.gridAtributes}>
                                <div className={utilities.fontPrimaryText}>
                                    Atributos:
                                </div>
                                {
                                    item.ListAtributes.map((item, index) =>
                                        index != item.length - 1 ?
                                            <a className={utilities.fontSecundaryText} key={index}>{item},</a>
                                            :
                                            <a className={utilities.fontSecundaryText} key={index}>{item}.</a>
                                    )
                                }
                            </div>*/}

                        {/*<div className={styles.mainDivTimer}>
                            <span>Expira en </span>
                            <span>{hours}:{minutes}:{seconds}</span>
                        </div>*/}
                    </div>
                </div>

                {/*<div className={styles.containerCarrouselEWB}>
                    <div className={styles.overflowCarrouselProductsEWB}>
                        <div className={styles.gridCarrouselProductsEWB}>
                            {
                                item.ListProducts.map((item, index) =>
                                    index >= 0 && index <= 6 &&
                                    <ProductViewHorizontal item={item} size={sizeImageProduct} isDisplayOffer={true} key={index}/>
                                )
                            }
                        </div>
                    </div>
                </div>*/}

            </div>
        </div>
    )

    function getCssStyles() {
        return {
            borderCard: darkModeState ? utilities.borderCardsNoHoverDarkMode : utilities.borderCardsNoHover,
            bgInfo: darkModeState ? utilities.bgDarkModeInfo : utilities.bgNormalInfo,
            fontSubTitle: darkModeState ? utilities.fontSubTitleDarkMode : utilities.fontSubTitle,
            fontPrimaryText: darkModeState ? utilities.fontPrimaryTextDarkMode : utilities.fontPrimaryText,
        }
    }

}