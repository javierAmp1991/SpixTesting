import style from "/styles/Mobile/Home/homeOwnPublicityMobile.module.css"
import utilities from "/styles/utilities.module.css";
import Image from "next/image";

export default function HomeOwnPublicityMobile({listItem, darkMode}) {
    let cssStyles = getCssStyles()
    return (
        <div className={style.PrincipalGrid}>
            {
                listItem.map((info, index) =>
                    <div key={index}
                        className={`${style.gridOwnPublicity} ${cssStyles.bgInfo} ${style.paddingContainerOwnPublicity} ${cssStyles.borderCard}`}>
                        <div className="grid content-center">
                            <div className={style.heightImageOwnPublicity}>
                            <Image layout={"fill"}  src={info.LinkImage}
                                 alt=""/>
                            </div>
                        </div>
                        <div className={`${style.containerInfoProperties}`}>
                            <div className={cssStyles.fontTitle}>
                                {info.Title}
                            </div>
                            <div className={`${cssStyles.fontPrimaryText} ${style.fontMainText}`}>
                                <div className="mb-1">{info.FirstText}</div>
                                <div>{info.SecondText}</div>
                            </div>
                            <div>
                                <div className={cssStyles.buttonSeeMore}>
                                    Ver mas
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )

    function getCssStyles(){
        return {
            borderCard: darkMode ? utilities.borderCardsDarkMode : utilities.borderCards,
            bgInfo: darkMode? utilities.bgDarkModeInfo: utilities.bgNormalInfo,
            fontTitle: darkMode? utilities.fontTitleDarkMode : utilities.fontTitle,
            fontPrimaryText: darkMode? utilities.fontPrimaryTextDarkMode: utilities.fontPrimaryText,
            buttonSeeMore: darkMode? style.buttonSeeMoreDarkMode: style.buttonSeeMore
        }
    }
}