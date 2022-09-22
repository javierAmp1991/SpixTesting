import style from "/styles/Desktop/Misc/menuSpixDesktop.module.css"
import {MenuHeader} from "../../../dataDemo/data";
import Link from "next/link";
import utilities from "/styles/utilities.module.css";

export default function MenuSpixDesktop({listItemMEnu, darkMode, limit}:
                                            { listItemMEnu: MenuHeader[], darkMode: boolean, limit: boolean }) {
    let cssStyles = getCssStyle()
    return (
        <div className={`${cssStyles.bg} ${cssStyles.StyleLimit}`}>
            <div className={`${style.gridTagsMenu} ${cssStyles.limitDiv}`}>
                {
                    listItemMEnu.map(menuTag =>
                        <Link key={menuTag.Id} href={menuTag.Link}>
                            <a className={style.styleTagsMenu}>
                                <div>{menuTag.Name}</div>
                            </a>
                        </Link>
                    )
                }
            </div>
        </div>
    )

    function getCssStyle() {
        return {
            bg: darkMode ? style.bgMenuDarkMode : style.bgMenu,
            StyleLimit: limit? style.mainContMenuLimit : style.mainContMenu,
            limitDiv: limit && utilities.maxWidthBodyContentSpix
        }
    }
}