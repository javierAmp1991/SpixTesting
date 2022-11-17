import {ReactNode} from "react";
import style from "/styles/Mobile/Site/TypeSite/Misc/layoutMainPage.module.css"

export default function LayoutMainPageSitesMobile({children, IsMarginButton}:
                                                      { children: ReactNode, IsMarginButton: boolean }) {
    return (
        <div className={IsMarginButton ? style.mainDiv : style.mainDivNoMarginBottom}>
            {children}
        </div>
    )
}