import style from "/styles/Desktop/Site/TypeSite/Misc/layoutMainPageSites.module.css"
import {ReactNode} from "react";

export default function LayoutMainPageSites({children, IsMarginBottom}:
                                                { children: ReactNode, IsMarginBottom: boolean }) {
    return (
        <div className={IsMarginBottom ? style.mainDiv : style.mainDivNoMarginBottom}>
            {children}
        </div>
    )
}