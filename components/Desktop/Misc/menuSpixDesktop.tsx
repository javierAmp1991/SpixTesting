import style from "/styles/Desktop/Misc/menuSpixDesktop.module.css"
import {MenuHeader} from "../../../dataDemo/data";
import Link from "next/link";

export default function MenuSpixDesktop({listItemMEnu, darkMode}:
                                            { listItemMEnu: MenuHeader[], darkMode: boolean }) {
    let cssStyles = getCssStyle()
    return (
        <div className={`${cssStyles.bg} pl-8 py-2 w-full m-auto`}>
            <div className={style.gridTagsMenu}>
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
            bg: darkMode ? style.bgMenuDarkMode : style.bgMenu
        }
    }
}