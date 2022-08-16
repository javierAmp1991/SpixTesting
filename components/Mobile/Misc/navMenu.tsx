import utilities from "/styles/utilities.module.css"
import style from "/styles/Mobile/Misc/navMenu.module.css"
import {GlobalConst} from "../../../public/globalConst";
import Image from "next/image";

export default function NavMenu({isLogged, isDarkMode, isActiveDarkModeButton, toggleDarkMode}) {
    let cssStyle = getCssStyle()
    let imageStyle = getImageStyle()
    return (
        <div className={`${cssStyle.bgInfo} ${style.navBarMenuContainer}`}>
            <div className={cssStyle.gridStyle}>
                {
                    isLogged ?
                        <div className="heightContainerImageNavBar gradientImage rounded50">
                            <Image className="heightImageNavBar m-px rounded50" src="/Image/foto perfil.jpg" alt=""/>
                        </div>
                        :
                        <div className={style.heightIcon}>
                            <Image layout={"fill"} src={imageStyle.logginIcon} alt=""/>
                        </div>
                }
                <a>
                    <div className={style.heightIcon}>
                        <Image layout={"fill"} src={imageStyle.home} alt=""/>
                    </div>
                </a>

                <div className={style.heightIcon}>
                    <img src={imageStyle.star} alt=""/>
                </div>

                {/*<div className="relative">
                    <img className={style.heightIcon} src={imageStyle.buyCar}/>
                    <div className={`${style.numberCarProperties} ${cssStyle.numbercarColor}`}>
                        0
                    </div>
                </div>*/}
                {
                    isActiveDarkModeButton?
                        <button onClick={toggleDarkMode}>
                            <div className={style.heightIcon}>
                            <Image layout={"fill"} src={imageStyle.darkModeIcon} alt=""/>
                            </div>
                        </button>
                        :
                        <></>
                }
            </div>
        </div>
    )

    function getCssStyle() {
        return {
            bgInfo: isDarkMode ? utilities.bgDarkModeInfo : utilities.bgNormalInfo,
            gridStyle: isActiveDarkModeButton ? style.gridNavBarMenuNoDarkMode : style.gridNavBarMenu,
            numbercarColor: isDarkMode ? style.colorNumberCarDarkMode : style.colorNumberCar
        }
    }

    function getImageStyle() {
        return {
            logginIcon: isDarkMode ? GlobalConst.sourceImages.logginIconDarkMode :
                GlobalConst.sourceImages.logginIconNormal,
            home: isDarkMode ? GlobalConst.sourceImages.homeNavMenuDarkMode :
                GlobalConst.sourceImages.homeNavMenuNormal,
            star: isDarkMode ? GlobalConst.sourceImages.starNavMenuDarkMode :
                GlobalConst.sourceImages.starNavMenuNormal,
            buyCar: isDarkMode ? GlobalConst.sourceImages.buyCarDarkMode :
                GlobalConst.sourceImages.buyCarNormal,
            darkModeIcon: isDarkMode ? GlobalConst.sourceImages.darkModeNavMenu :
                GlobalConst.sourceImages.lightModeNavMenu
        }
    }
}