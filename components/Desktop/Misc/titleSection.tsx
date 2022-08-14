import style from "/styles/Desktop/Misc/titleSection.module.css"
import utilities from "/styles/utilities.module.css"

export default function TitleSection({children, darkModeState, titleLink, paddingTitle}) {
    let cssStyles = getCssStyles()
    return (
        <>
            <div style={cssStyles.padding} className={style.principalGrid}>
                <div className={cssStyles.fontTitle}>
                    {titleLink[0]}
                </div>
                <a className={`${cssStyles.styleLink} pt-0.5`}>
                    Ver mas
                </a>
            </div>
            {children}
        </>
    )

    function getCssStyles() {
        return {
            fontTitle: darkModeState ? utilities.fontTitleDarkMode : utilities.fontTitle,
            styleLink: darkModeState ? utilities.styleLinkDarkMode : utilities.styleLink,
            padding: paddingTitle != null ? {paddingBottom: paddingTitle} : {}
        }
    }
}