import style from "/styles/Mobile/Misc/headerSpixMobile.module.css"
import SearchBarMobile from "./searchBarMobile";
import Image from "next/image";

const styleSearchBar: boolean = false
import {GlobalConst} from "../../../public/globalConst";
import Link from "next/link";

export default function HeaderSpixMobile({isDarkMode, displaySug, isDesplegable}) {
    let cssStyles = getCssStyles()
    return (
        <div className={`${cssStyles.bgHeader} ${style.gridHeader}`}>
            <div className={style.gridLogoBar}>
                <Link href={"/"}>
                <div className={style.sizeLogoSpix}>
                    <Image layout={"fill"} src={GlobalConst.sourceImages.spixAloneWhite}/>
                </div>
                </Link>
                <SearchBarMobile isSug={false}
                                 styleSearchBar={styleSearchBar}
                                 isDisplaySug={displaySug}
                                 showSug={null}
                                 hiddeSug={null}
                                 getTextInput={null}
                />
                <button onClick={isDesplegable} className={style.sizeLogoMenu}>
                    <Image layout={"fill"} src={GlobalConst.sourceImages.menuIcon}/>
                </button>
            </div>
        </div>
    )

    function getCssStyles() {
        return {
            bgHeader: isDarkMode ? style.bgHeaderSpixDarkMode : style.bgHeaderSpix
        }
    }
}