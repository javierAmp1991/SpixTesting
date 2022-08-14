import style from "/styles/Desktop/CRM/newView.module.css"
import utilities from "/styles/utilities.module.css"
const readNew: string = "Leer notica"
import Image from "next/image";

export default function NewView({homeNew, darkModeState}){
    let cssStyles = getCssStyles()
    return(
        <div className={`${style.widthContainerNew} ${cssStyles.borderCard}`}>
            <Image layout={"intrinsic"} className={style.heightImageNews} src={homeNew.PathImage} alt=""/>
                <div className={`${cssStyles.bgInfo} grid content-start gap-1 p-3`}>
                    <h3 className={`${cssStyles.fontSubTitle} ${utilities.clamp2}`}>
                        {homeNew.Title}
                    </h3>
                    <p className={`${cssStyles.fontPrimaryText} ${utilities.clamp2} mb-1`}>
                        {homeNew.SubTitle}
                    </p>
                    <a className={cssStyles.styleLink}>
                        {readNew}
                    </a>
                </div>
        </div>
    )
    function getCssStyles(){
        return {
            borderCard: darkModeState ? utilities.borderCardsDarkMode : utilities.borderCards,
            bgInfo: darkModeState? utilities.bgDarkModeInfo: utilities.bgNormalInfo,
            fontSubTitle: darkModeState? utilities.fontSubTitleDarkMode : utilities.fontSubTitle,
            fontPrimaryText: darkModeState? utilities.fontPrimaryTextDarkMode: utilities.fontPrimaryText,
            styleLink: darkModeState? utilities.styleLinkDarkMode: utilities.styleLink
        }
    }
}