import style from "/styles/Desktop/Home/homeInformation.module.css"
import utilities from "/styles/utilities.module.css"
import Image from "next/image";

export default function HomeInformation({listItem, darkModeState}) {
    let cssStyles = getCssStyles()
    return (
        <div className={`${cssStyles.bgInfo} ${cssStyles.borderCard}`}>
            <div className={`${style.gridHomeInformationDesk}`}>
                {
                    listItem.map((info) => (
                        info.LinkImage == null ?
                            <div className={style.paddingFirstInfo}>
                                <div className="grid gap-1 pr-3">
                                    <div className={cssStyles.fontSubTitle}>
                                        {info.Title}
                                    </div>
                                    <div
                                        className={`${cssStyles.fontPrimaryText} hypensText clamp2`}>
                                        {info.SubTitle}
                                    </div>
                                </div>
                            </div>
                            :
                            <a key={info.Title} className={style.gridInternalMinHeader}>
                                <div className="pl-4 grid content-center items-center">
                                    <div className="h-6 w-6 relative">
                                        <img src={info.LinkImage} alt=""/>
                                    </div>
                                </div>
                                <div className="grid gap-1 pr-3">
                                    <div
                                        className={cssStyles.fontSubTitle}>{info.Title}</div>
                                    <div
                                        className={`${cssStyles.fontPrimaryText} hypensText clamp2`}>{info.SubTitle}</div>
                                    <div className={cssStyles.styleLink}>Ver mas</div>
                                </div>
                            </a>
                    ))
                }
            </div>
            <div className={`${style.bgLineDown} w-full h-1`}></div>
        </div>
    )

    function getCssStyles() {
        return {
            borderCard: darkModeState ? "" : style.borderCardInformation,
            bgInfo: darkModeState ? utilities.bgDarkModeInfo : utilities.bgNormalInfo,
            styleLink: darkModeState ? utilities.styleLinkDarkMode : utilities.styleLink,
            fontPrimaryText: darkModeState ? utilities.fontPrimaryTextDarkMode : utilities.fontPrimaryText,
            fontSubTitle: darkModeState ? utilities.fontSubTitleDarkMode : utilities.fontSubTitle
        }
    }
}
