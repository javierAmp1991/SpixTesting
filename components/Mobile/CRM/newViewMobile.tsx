import style from "/styles/Mobile/CRM/newViewMobile.module.css"
import utilities from "/styles/utilities.module.css"
import Image from "next/image";

const readNew: string = "Leer notica"

export default function NewViewMobile({item, isDarkMode}) {
    let cssStyles = getCssStyles()
    return (
        <div className={`${style.widthContainerNew} ${cssStyles.borderCard}`}>
            <div className={style.heightImageNews}>
                <Image layout={"fill"} src={item.PathImage} alt=""/>
            </div>
            <div className={`${cssStyles.bgInfo} grid content-start gap-1 p-3`}>
                <h3 className={`${cssStyles.fontSubTitle} ${utilities.clamp2}`}>
                    {item.Title}
                </h3>
                <p className={`${cssStyles.fontPrimaryText} ${utilities.clamp2} mb-1`}>
                    {item.SubTitle}
                </p>
                <a className={cssStyles.styleLink}>
                    {readNew}
                </a>
            </div>
        </div>
    )

    function getCssStyles() {
        return {
            borderCard: isDarkMode ? utilities.borderCardsDarkMode : utilities.borderCards,
            bgInfo: isDarkMode ? utilities.bgDarkModeInfo : utilities.bgNormalInfo,
            fontSubTitle: isDarkMode ? utilities.fontSubTitleDarkMode : utilities.fontSubTitle,
            fontPrimaryText: isDarkMode ? utilities.fontPrimaryTextDarkMode : utilities.fontPrimaryText,
            styleLink: isDarkMode ? utilities.styleLinkDarkMode : utilities.styleLink
        }
    }
}