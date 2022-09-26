import style from "/styles/Desktop/Home/homeRoundedView.module.css"
import utilities from "/styles/utilities.module.css"
import Image from "next/image";
import Link from "next/link";

export default function HomeRoundedView({info, darkModeState}) {
    let cssStyles = getCssStyles()
    return (
        <Link href={""}>
            <a className={`${utilities.borderRadious50} ${cssStyles.borderCard}`}>
                <div className={`${style.paddingGradient} ${utilities.borderRadious50} ${cssStyles.bgFirstGradient}`}>
                    <div
                        className={`${style.paddingGradient} ${utilities.borderRadious50} ${cssStyles.bgSecondGradient}`}>
                        <div className={style.sizeImageRoundedCarrousel}>
                            <Image layout={"fill"} src={info.CoverImage} alt=""/>
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    )

    function getCssStyles() {
        return {
            borderCard: darkModeState ? utilities.borderCardDesktopDarkMode : utilities.borderCardDesktop,
            bgFirstGradient: darkModeState ? utilities.bgFirstGradientDarkMode : utilities.bgFirstGradient,
            bgSecondGradient: darkModeState ? utilities.bgSecondGradientDarkMode : utilities.bgSecondGradient
        }
    }
}