import utilities from "/styles/utilities.module.css"
import styles from "/styles/Desktop/Events/eventWithBanner.module.css"
import React, {useEffect, useState} from "react";
import {GlobalConst} from "../../../public/globalConst";
import Image from "next/image";
import Link from "next/link";
import PrincipalInfoEvent, {PrincipalInfoEventProp} from "../Misc/principalInfoEvent";

const alignmentTextProduct: string = "text-center"


export default function EventWithBannerView({item, darkModeState}) {
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

                <div className={`${utilities.gradientLogoDesktop} ${styles.positionLogo}`}>
                    <div className={styles.propertiesLogoEWB}>
                        <Image layout={"fill"} objectFit={"cover"} src={item.LogoPath} alt=""/>
                    </div>
                </div>


                <div className={`${cssStyles.bgInfo} ${styles.mainContainerInfo}`}>
                    {/*                   <div className={styles.propertiesLogoEWB}>
                        <Image layout={"fill"} objectFit={"cover"} src={item.LogoPath} alt=""/>
                    </div>*/}

                    <PrincipalInfoEvent item={principalInfoEventProp}/>

                    <div className={styles.mainDivTimer}>
                        <span className={styles.timerIconProp}>
                            <Image layout={"fill"} src={GlobalConst.sourceImages.timerIcon}/>
                        </span>
                        <span>
                            Expira en
                        </span>
                        <span>
                            {hours}:{minutes}:{seconds}
                        </span>
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
                                item.ListProducts.map(product =>
                                    <div key={product.Name}>
                                        <div className={`${styles.sizeProductEWB}`}>
                                            <Image layout={"fill"} objectFit={"cover"} src={product.ImagePath}
                                                   alt=""/>
                                        </div>
                                        <div
                                            className={`${utilities.fontPriceInclude} ${alignmentTextProduct} mb-1 mt-1`}>
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
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>

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