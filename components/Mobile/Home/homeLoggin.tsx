import style from "/styles/Mobile/Home/homeLoggin.module.css"
import utilities from "../../../styles/utilities.module.css";
import {GlobalConst} from "../../../public/globalConst";

const firstText: string = "Inicia sesion en Spix"
const secondText: string = "Y ten accesos a todos los beneficios de nuestra plataforma"

export default function HomeLoggin({isDarkMode}) {
    let cssStyles = getCssStyles()
    return (
        <div className={`$ ${cssStyles.bgInfo}`}>
            <div className={style.gridLog}>
                <div className="grid content-center">
                    <img className="h-6 w-auto" src={GlobalConst.sourceImages.homeLoggin} alt=""/>
                </div>
                <div className="grid gap-1 text-left">
                    <div className={cssStyles.fontSubTitle}>{firstText}</div>
                    <div className={` ${cssStyles.fontPrimaryText} hypensText clamp2`}>
                        {secondText}
                    </div>
                    <div className={cssStyles.styleLink}>Iniciar sesion</div>
                </div>
            </div>
        </div>
    )

    function getCssStyles() {
        return {
            borderCard: isDarkMode ? "" : style.borderCardInformation,
            bgInfo: isDarkMode ? utilities.bgDarkModeInfo : utilities.bgNormalInfo,
            styleLink: isDarkMode ? utilities.styleLinkDarkMode : utilities.styleLink,
            fontPrimaryText: isDarkMode ? utilities.fontPrimaryTextDarkMode : utilities.fontPrimaryText,
            fontSubTitle: isDarkMode ? utilities.fontSubTitleDarkMode : utilities.fontSubTitle
        }
    }
}