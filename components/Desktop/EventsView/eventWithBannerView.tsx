import utilities from "/styles/utilities.module.css"
import styles from "/styles/Desktop/Events/eventWithBanner.module.css"
import React, {useEffect, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import PrincipalInfoEvent, {PrincipalInfoEventProp} from "../Misc/principalInfoEvent";
import ProductViewDesk from "../Misc/productViewDesk";

export default function EventWithBannerView({item, darkModeState, sizeImageProduct}) {
    const darkModeFalse: boolean = false;
    const principalInfoEventProp: PrincipalInfoEventProp = {
        Title: item.EventName,
        Subtitle: item.Subtitle,
        Rating: null,
        isDarkMode: darkModeFalse
    }
    let cssStyles = getCssStyles();
    let [timeOut] = useState(new Date(2023, 11, 23, 23, 59, 59))
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

        <div className={`${cssStyles.borderCard} ${cssStyles.bgInfo} ${styles.widthContainer}`}>
            <Link href={"/eventPage"}>
                <div className={styles.sizeBannerEWB}>
                    <Image layout={"fill"} src={item.BannerPath} alt=""/>
                </div>
            </Link>

            <div className={styles.mainContainerInfo}>
                <div className={styles.mainDivInfoQ}>
                    <div className={styles.grid1Info}>
                        <div>
                            <PrincipalInfoEvent item={principalInfoEventProp}/>
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
                        <div className={styles.mainDivTimer}>
                            <span>Expira en </span>
                            <span>{hours}:{minutes}:{seconds}</span>
                        </div>
                    </div>
                    <div className={styles.containerCarrouselEWB}>
                        <div className={styles.gridCarrouselProductsEWB}>
                            {
                                item.ListProducts.map((item, index) =>
                                    index >= 0 && index < 3 &&
                                    <ProductViewDesk item={item} size={sizeImageProduct}
                                                     isDisplayOffer={true} key={index}/>
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
            borderCard: darkModeState ? utilities.borderCardDesktopDarkModeNoHover : utilities.borderCardDesktopNoHover,
            bgInfo: darkModeFalse ? utilities.bgDarkModeInfoDesktop : utilities.bgNormalInfoDesktop,
        }
    }

}