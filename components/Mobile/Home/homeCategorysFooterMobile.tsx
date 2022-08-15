import style from "/styles/Mobile/Home/homeCategorysFooterMobile.module.css"
import utilities from "/styles/utilities.module.css"
import Image from "next/image";

export default function HomeCategorysFooterMobile({item, isDarkMode}) {
    let cssStyles = getCssStyles()
    return (
        <div key={item.Title} className={cssStyles.borderCard}>
            <div className={` ${cssStyles.fontName} ${cssStyles.bgInfo} p-2`}>
                {item.Title}
            </div>

            <div className={style.heightImageAtribute}>
                <Image layout={"fill"} src={item.LinkImage} alt=""/>
            </div>
        </div>
    )

    function getCssStyles() {
        return {
            borderCard: isDarkMode ? utilities.borderCardsNoHoverDarkMode : utilities.borderCardsNoHover,
            fontName: isDarkMode ? utilities.fontNameDarkMode : utilities.fontName,
            bgInfo: isDarkMode ? utilities.bgDarkModeInfo : utilities.bgNormalInfo
        }
    }
}