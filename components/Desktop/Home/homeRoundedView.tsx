import style from "/styles/Desktop/Home/homeRoundedView.module.css"
import utilities from "/styles/utilities.module.css"

export default function HomeRoundedView({info, darkModeState}) {
    let cssStyles = getCssStyles()
    return (
            <div className={`${cssStyles.borderCard} ${utilities.borderRadious50}`}>
                <div className={`${style.paddingGradient} ${utilities.borderRadious50} ${cssStyles.bgFirstGradient}`}>
                    <div className={`${style.paddingGradient} ${utilities.borderRadious50} ${cssStyles.bgSecondGradient}`}>
                        <img className={style.sizeImageRoundedCarrousel} src={info.CoverImage} alt=""/>
                    </div>
                </div>
            </div>
    )

    function getCssStyles() {
        return {
            borderCard: darkModeState? utilities.borderCardsDarkMode : utilities.borderCards,
            bgFirstGradient: darkModeState? utilities.bgFirstGradientDarkMode : utilities.bgFirstGradient,
            bgSecondGradient: darkModeState? utilities.bgSecondGradientDarkMode : utilities.bgSecondGradient
        }
    }
}