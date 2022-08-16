import utilities from "/styles/utilities.module.css"
import styles from "/styles/Desktop/Events/eventWithBanner.module.css"
import React, {useState} from "react";
import {GlobalConst} from "../../../public/globalConst";
import Image from "next/image";
import Link from "next/link";

const alignmentTextProduct: string = "text-center"


export default function EventWithBannerView({item, darkModeState}) {
    let cssStyles = getCssStyles();
    /*let [isActive, setIsActive] = useState(false);
    const handleClick = () => {
        setIsActive(isActive = !isActive);
    };*/
    let [visibility, setVisibility] = useState(true);

    return (
        <Link href={"/eventPage"}>
            <div className={`${cssStyles.borderCard} ${styles.widthContainer}`}>
                <div className="grid">
                    <div className="relative">
                        <div className={styles.sizeBannerEWB}>
                            <Image layout={"fill"} src={item.BannerPath} alt=""/>
                        </div>

                        <div className={styles.propertiesLogoEWB}>
                            <Image layout={"fill"} objectFit={"cover"} src={item.LogoPath} alt=""/>
                        </div>
                    </div>

                    <div className={`${cssStyles.bgInfo} pt-11 pb-3 grid justify-center justify-items-center`}>
                        <div className={`${cssStyles.fontSubTitle} ${alignmentTextProduct} mb-2`}>
                            {item.EventName}
                        </div>

                        <div className={`${utilities.gridMaxContent2} relative grid justify-center mb-2`}>
                            <div className={utilities.ratingStarsProperties}>
                                <Image layout={"fill"} objectFit={"cover"} src="/images/ratingNew.png" alt=""/>
                            </div>
                        </div>

                        <div className={`${cssStyles.fontPrimaryText} ${alignmentTextProduct} mb-3`}>
                            Expira en 00:05:23
                        </div>

                        <div className={`${utilities.gridMaxContent3} gap-1`}>
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
                        {/*<button onPointerOver={showArrow} onPointerOut={hiddeArrow}
                            className={`${styles.styleArrowEWBProducts} 
                                        ${styles.positionArrowEWBLeft}
                                        ${visibility ? utilities.opacity0 : ""}`}>
                        <span className={styles.styleArrowDailyOfferProducts}>
                        <Image layout={"fill"} objectFit={"cover"} src={GlobalConst.sourceImages.leftArrow} alt=""/>
                        </span>
                    </button>*/}

                        <div onPointerOver={showArrow} onPointerOut={hiddeArrow}
                             className={styles.overflowCarrouselProductsEWB}>
                            <div className={styles.gridCarrouselProductsEWB}>
                                {
                                    item.ListProducts.map(product =>
                                        <div key={product.Name}>
                                            <div className={`${styles.sizeProductEWB}`}>
                                                <Image layout={"fill"} objectFit={"cover"} src={product.ImagePath}
                                                       alt=""/>
                                            </div>
                                            <div
                                                className={`${utilities.fontPriceInclude} ${alignmentTextProduct} mb-1`}>
                                                ${product.Price}
                                            </div>
                                            <div
                                                className={`${utilities.fontSecundaryText} ${alignmentTextProduct} 
                                                        ${utilities.font12}`}>
                                                <span>Antes: </span>
                                                <span className="line-through">
                                                ${(product.Price * product.DiscountPercent / 100) + product.Price}
                                            </span>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>

                        {/*<button onPointerOver={showArrow} onPointerOut={hiddeArrow}
                            className={`${styles.styleArrowEWBProducts}
                                        ${styles.positionArrowEWBRight}
                                        ${visibility ? utilities.opacity0 : ""}`}>
                        <span className={styles.styleArrowDailyOfferProducts}>
                        <Image layout={"fill"} objectFit={"cover"} src={GlobalConst.sourceImages.rightArrow}
                               alt=""/>
                        </span>
                    </button>*/}
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
        }
    }

}