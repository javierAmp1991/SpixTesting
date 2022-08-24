import style from "/styles/Mobile/Misc/menuSpixMobile.module.css"

export default function MenuSpixMobile({listItemMenu, isDarkMode}) {
    let cssStyles = getCssStyle()
    return (
        <div className={cssStyles.bg}>
            <div className={style.gridTagsMenu}>
                {
                    listItemMenu.map(menuTag =>
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
            bg: isDarkMode ? style.bgMenuDarkMode : style.bgMenuMobile
        }
    }
}