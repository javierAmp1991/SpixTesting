import style from "/styles/misc/menuSpix.module.css"
import {Menu} from "../../dataDemo/data";

export default function MenuSpix({darkModeState}) {
    let cssStyles = getCssStyle()
    return (
        <div className={`${cssStyles.bg} pl-8 py-2 w-full m-auto`}>
            <div className={style.gridTagsContentBarMenu}>
                {
                    Menu.listMenu.map(menuTag =>
                        <a key={menuTag} className={style.styleTagsMenu}>
                            <div>{menuTag}</div>
                        </a>
                    )
                }
            </div>
        </div>
    )
    function getCssStyle(){
        return{
            bg: darkModeState ? style.bgMenuDarkMode : style.bgMenu
        }
    }
}

