import style from "/styles/Desktop/Search/orderBy.module.css";
import utilities from "/styles/utilities.module.css";
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
import React, {useState} from "react";
import {CategoryFilter} from "../../../dataDemo/data";

export default function OrderBy({
                                    listPrincipalFilter,
                                    isDarkMode
                                }: { listPrincipalFilter: CategoryFilter[], isDarkMode }) {
    const cssStyle = getCssStyle()
    let [principalFilters, setPrincipalFilters] = useState(listPrincipalFilter)
    const handleClickPrincipalFilters = (idFilter: string, isClicked: boolean) => {
        const newListFilter = principalFilters.map(item => {
            if (item.Id == idFilter) {
                return {...item, IsSelected: isClicked}
            } else return {...item, IsSelected: false}
        })
        setPrincipalFilters(principalFilters = newListFilter)
    }
    return (
        <div className={style.mainDiv}>
            <div className={style.gridOrderBy}>
                <div className={`${cssStyle.fontName}`}>
                    Ordenar por:
                </div>
                {
                    principalFilters.map((item, index) =>
                        <button key={item.Id}
                                onClick={() => handleClickPrincipalFilters(item.Id, !item.IsSelected)}
                                className={item.IsSelected ? style.gridButtonSelected : style.gridButton}>
                            <div
                                className={style.imageSizeButton}>
                                <Image layout={"fill"} src={item.ImagePath} alt={""}/>
                            </div>
                            <div className={`${utilities.fontPrimarText} ${style.paddingText}`}>
                                {item.Name}
                            </div>
                        </button>
                    )
                }

            </div>
        </div>
    )

    function getCssStyle() {
        return {
            fontTitle: isDarkMode ? utilities.fontTitleDesktopDarkMode : utilities.fontTitleDesktop,
            bg: isDarkMode ? utilities.bgDarkModeInfo : utilities.bgNormalInfo,
            cleanIcon: isDarkMode ? GlobalConst.sourceImages.cleanIconWhite : GlobalConst.sourceImages.cleanIcon,
            fontName: isDarkMode ? utilities.fontNameDesktopDarkMode : utilities.fontNameDesktop,
            styleTags: isDarkMode ? style.styleTagsDarkMode : style.styleTags,
        }
    }
}