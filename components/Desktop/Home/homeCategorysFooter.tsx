import style from "/styles/Desktop/Home/homeCategorysFooter.module.css"
import utilities from "/styles/utilities.module.css"
import Image from "next/image";

export default function HomeCategorysFooter({item, darkModeState}) {
    let cssStyles = getCssStyles()
    return (

        <div key={item.Title} className={cssStyles.borderCard}>
            <div className={` ${cssStyles.fontName} ${cssStyles.bgInfo} p-2`}>
                {item.Title}
            </div>

            <div className={style.heightImageAtribute}>
                <Image layout={"fill"} objectFit={"cover"}  src={item.LinkImage} alt=""/>
            </div>
        </div>
    )

    function getCssStyles() {
        return {
            borderCard: darkModeState ? utilities.borderCardsNoHoverDarkMode : utilities.borderCardsNoHover,
            fontName: darkModeState ? utilities.fontNameDarkMode : utilities.fontName,
            bgInfo: darkModeState ? utilities.bgDarkModeInfo : utilities.bgNormalInfo
        }
    }
}