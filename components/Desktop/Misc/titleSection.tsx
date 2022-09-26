import style from "/styles/Desktop/Misc/titleSection.module.css"
import utilities from "/styles/utilities.module.css"
import Link from "next/link";

export default function TitleSection({children, darkModeState, titleLink, paddingTitle}) {
    let cssStyles = getCssStyles()
    return (
        <>
            <div style={cssStyles.padding} className={style.principalGrid}>
                <div className={cssStyles.fontTitle}>
                    {titleLink[0]}
                </div>
                {
                    titleLink[1] != null &&
                    <Link href={titleLink[1]}>
                        <a className={`${cssStyles.styleLink} pt-0.5`}>
                            Ver mas
                        </a>
                    </Link>
                }

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