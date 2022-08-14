import style from "/styles/Desktop/Misc/menuSpixDesktop.module.css"

export default function MenuSpixDesktop({listItemMEnu, darkMode}) {
    let cssStyles = getCssStyle()
    return (
        <div className={`${cssStyles.bg} pl-8 py-2 w-full m-auto`}>
            <div className={style.gridTagsMenu}>
                {
                    listItemMEnu.map(menuTag =>
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
            bg: darkMode ? style.bgMenuDarkMode : style.bgMenu
        }
    }
}