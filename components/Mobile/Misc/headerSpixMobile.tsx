import style from "/styles/Mobile/Misc/headerSpixMobile.module.css"
import SearchBarMobile from "./searchBarMobile";
const styleSearchBar: boolean = false

export default function HeaderSpixMobile({isDarkMode, displaySug}) {
    let cssStyles = getCssStyles()
    return (
        <div className={`${cssStyles.bgHeader} grid items-center w-full`}>
            <div className="p-2 relative">
                <SearchBarMobile styleSearchBar={styleSearchBar}
                                 isDisplaySug={displaySug}
                                 showSug={null}
                                 hiddeSug={null}
                                 getTextInput={null}
                />
            </div>
        </div>
    )
    function getCssStyles() {
        return {
            bgHeader: isDarkMode ? style.bgHeaderSpixDarkMode : style.bgHeaderSpix
        }
    }
}