import style from "/styles/Mobile/Misc/menuSpixMobile.module.css"
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
import utilities from "/styles/utilities.module.css";
import Link from "next/link";
import {MenuHeader} from "../../../dataDemo/data";

export default function MenuSpixMobile({listItemMenu, isDarkMode} : {listItemMenu: MenuHeader[], isDarkMode: boolean}) {
    let cssStyles = getCssStyle()
    return (
        <div className={`${cssStyles.bg} ${style.principalGrid}`}>
            <div className={style.gridTagsMenu}>
                {
                    listItemMenu.map(menuTag =>
                        <Link key={menuTag.Id} href={menuTag.Link}>
                            <a className={style.styleTagsMenu}>
                                <div>{menuTag.Name}</div>
                            </a>
                        </Link>
                    )
                }
            </div>
            {/*<a className={`${utilities.gridMaxContent2} gap-3`}>
                <div>
                    <div className={style.sizeIconLoggin}>
                        <Image layout={"fill"}
                               src={GlobalConst.sourceImages.logginHeaderDesktop}
                               alt=""/>
                    </div>
                </div>
                <div className={style.colorTextHeader}>
                    <div className={style.firstText}>Iniciar</div>
                    <div className={style.secondText}>Sesion</div>
                </div>
            </a>*/}
        </div>
    )

    function getCssStyle() {
        return {
            bg: isDarkMode ? style.bgMenuDarkMode : style.bgMenuMobile
        }
    }
}