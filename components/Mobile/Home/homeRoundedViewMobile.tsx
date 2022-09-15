import style from "/styles/Mobile/Home/homeRoundedViewMobile.module.css"
import utilities from "/styles/utilities.module.css"
import Image from "next/image";

export default function HomeRoundedViewMobile({item, isDarkMode}) {
    let cssStyles = getCssStyles()
    return (
        <div className={`${cssStyles.borderCard} ${utilities.borderRadious50} ${style.mainDiv}`}>
            <div className={`${style.paddingGradient} ${utilities.borderRadious50} ${cssStyles.bgFirstGradient}`}>
                <div className={`${style.paddingGradient} ${utilities.borderRadious50} ${cssStyles.bgSecondGradient}`}>
                    <div className={style.sizeImageRoundedCarrousel}>
                    <Image layout={"fill"} src={item.CoverImage} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )

    function getCssStyles() {
        return {
            borderCard: isDarkMode? utilities.borderCardsDarkMode : utilities.borderCards,
            bgFirstGradient: isDarkMode? utilities.bgFirstGradientDarkMode : utilities.bgFirstGradient,
            bgSecondGradient: isDarkMode? utilities.bgSecondGradientDarkMode : utilities.bgSecondGradient
        }
    }
}