import style from "/styles/Desktop/Home/homeOwnPublicity.module.css"
import utilities from "/styles/utilities.module.css";
import Image from "next/image";
import Link from "next/link";

export default function HomeOwnPublicityDesktop({listItem, darkMode}) {
    let cssStyles = getCssStyles()
    return (
        <Link href={""}>
        <a className={`${style.PrincipalGrid}`}>
            {
                listItem.map((info, index) =>
                    <div key={index} className={`${style.gridOwnPublicity} 
                                                 ${cssStyles.borderCard} ${cssStyles.bgInfo}    
                                                 ${style.paddingContainerOwnPublicity}`}>
                        <div className={style.heightImageOwnPublicity}>
                            <Image layout={"fill"} src={info.LinkImage}
                                   alt=""/>
                        </div>
                        <div className={`${style.containerInfoProperties}`}>
                            <div className={cssStyles.fontTitle}>
                                {info.Title}
                            </div>
                            <div className={`${cssStyles.fontPrimaryText} ${style.fontMainText}`}>
                                <div className="mb-1">{info.FirstText}</div>
                                <div>{info.SecondText}</div>
                            </div>
                            <div className={cssStyles.buttonSeeMore}>
                                Ver mas
                            </div>
                        </div>
                    </div>
                )
            }
        </a>
        </Link>
    )

    function getCssStyles() {
        return {
            borderCard: darkMode ? utilities.borderCardDesktopDarkMode : utilities.borderCardDesktop,
            bgInfo: darkMode ? utilities.bgDarkModeInfo : utilities.bgNormalInfo,
            fontTitle: darkMode ? utilities.fontTitleDarkMode : utilities.fontTitle,
            fontPrimaryText: darkMode ? utilities.fontPrimaryTextDarkMode : utilities.fontPrimaryText,
            buttonSeeMore: darkMode ? style.buttonSeeMoreDarkMode : style.buttonSeeMore
        }
    }
}