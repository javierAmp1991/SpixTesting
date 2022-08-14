import utilities from "/styles/utilities.module.css"
import styles from "/styles/zzzold/homeStyles/homeDailyOffer.module.css"
import React, {useState} from "react";
const alignmentTextProduct: string = "text-center"


export default function HomeDailyOffer({dailyOfferInfo, darkModeState}) {
    const [isActive, setIsActive] = useState(false);
    const handleClick = event => {
        setIsActive(current => !current);
    };
    const [visibility, setVisibility] = React.useState(true);
    let cssStyles = getCssStyles();

    return (
            <div className={cssStyles.borderCard}>
                <div className="grid">
                    <div className="relative">
                        <img className={styles.sizeBannerDailyOffer} src={dailyOfferInfo.BannerPath} alt=""/>

                        <img className={styles.propertiesLogoDailyOffer}
                             src={dailyOfferInfo.LogoPath} alt=""/>
                    </div>

                    <div className={`${cssStyles.bgInfo} pt-10 pb-3 grid justify-center justify-items-center`}>
                        <div className={`${cssStyles.fontSubTitle} ${alignmentTextProduct} mb-2`}>
                            {dailyOfferInfo.EventName}
                        </div>

                        <div className={`${utilities.gridMaxContent2} grid justify-center mb-3`}>
                            <img className={utilities.ratingStarsProperties} src="images/ratingNew.png"/>
                        </div>

                        <div className={`${cssStyles.fontPrimaryText} ${alignmentTextProduct} mb-3`}>
                            Expira en 00:05:23
                        </div>

                        <div className={`${utilities.gridMaxContent3} gap-1`}>
                            {
                                dailyOfferInfo.Tags.map(offer =>
                                    <div key={offer} className={utilities.styleSpixDiscountTag}>
                                        {offer}
                                    </div>
                                )
                            }
                        </div>
                    </div>

                    <div className={styles.containerCarrouselProductsDailyOffer}>
                        <button onPointerOver={showArrow} onPointerOut={hiddeArrow}
                                className={`${styles.arrowDailyOfferProductsProperties} 
                                        ${styles.positionArrowDailyOfferProductsLeft}
                                        ${visibility ? utilities.opacity0 : ""}`}>
                            <img className={styles.styleArrowDailyOfferProducts} src="/images/leftArrowN1.png"/>
                        </button>

                        <div onPointerOver={showArrow} onPointerOut={hiddeArrow}
                             className={styles.overflowCarrouselProductsDailyOffer}>
                            <div className={styles.gridCarrouselProductsDailyOffer}>
                                {
                                    dailyOfferInfo.ListProducts.map(product =>
                                        <div key={product.Name}>
                                            <div className="mb-2">
                                                <img className={`${styles.sizeProductDailyOffer} m-auto`}
                                                     src={product.ImagePath} alt=""/>
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

                        <button onPointerOver={showArrow} onPointerOut={hiddeArrow}
                                className={`${styles.arrowDailyOfferProductsProperties}
                                        ${styles.positionArrowDailyOfferProductsRight}
                                        ${visibility ? utilities.opacity0 : ""}`}>
                            <img className={styles.styleArrowDailyOfferProducts} src="images/rightArrowN1.png" alt=""/>
                        </button>
                    </div>
                </div>
            </div>
    )

    function getCssStyles() {
        return {
            borderCard: darkModeState ? utilities.borderCardsNoHoverDarkMode : utilities.borderCardsNoHover,
            bgInfo: darkModeState ? utilities.bgDarkModeInfo : utilities.bgNormalInfo,
            fontSubTitle: darkModeState? utilities.fontSubTitleDarkMode : utilities.fontSubTitle,
            fontPrimaryText: darkModeState ? utilities.fontPrimaryTextDarkMode : utilities.fontPrimaryText,
        }
    }

    function showArrow() {
        setVisibility(visibility => false);
    }

    function hiddeArrow() {
        setVisibility(visibility => true)
    }
}