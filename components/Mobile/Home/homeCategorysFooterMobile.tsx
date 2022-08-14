import style from "/styles/Mobile/Home/homeCategorysFooterMobile.module.css"
import utilities from "/styles/utilities.module.css"

export default function HomeCategorysFooterMobile({item, isDarkMode}) {
    let cssStyles = getCssStyles()
    return (
        <div key={item.Title} className={cssStyles.borderCard}>
            <div className={` ${cssStyles.fontName} ${cssStyles.bgInfo} p-2`}>
                {item.Title}
            </div>

            <div>
                <img className={style.heightImageAtribute} src={item.LinkImage}/>
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