import style from "/styles/Mobile/Misc/headerSpixMobile.module.css"
import SearchBarMobile from "./searchBarMobile";
import Image from "next/image";

const styleSearchBar: boolean = false
import {GlobalConst} from "../../../public/globalConst";

export default function HeaderSpixMobile({isDarkMode, displaySug}) {
    let cssStyles = getCssStyles()
    return (
        <div className={`${cssStyles.bgHeader} ${style.gridHeader}`}>
            <div className={style.gridLogoBar}>
                <div className={style.sizeLogoSpix}>
                    <Image layout={"fill"} src={GlobalConst.sourceImages.spixAloneWhite}/>
                </div>
                <SearchBarMobile isSug={false}
                                 styleSearchBar={styleSearchBar}
                                 isDisplaySug={displaySug}
                                 showSug={null}
                                 hiddeSug={null}
                                 getTextInput={null}
                />
                <div className={style.sizeLogoMenu}>
                    <Image layout={"fill"} src={GlobalConst.sourceImages.menuIcon}/>
                </div>
            </div>
        </div>
    )

    function getCssStyles() {
        return {
            bgHeader: isDarkMode ? style.bgHeaderSpixDarkMode : style.bgHeaderSpix
        }
    }
}