import utilities from "/styles/utilities.module.css"
import style from "/styles/Desktop/Search/atributesContainer.module.css"
import {Filters} from "./subcategoryContainer";
import {GlobalConst} from "../../../public/globalConst";
import {useState} from "react";
import Image from "next/image";

export default function AtributesContainer({item, click, isDarkMode, isOpenFilter}:
                                               { item: Filters, click, isDarkMode: boolean, isOpenFilter: boolean }) {
    let [displaySub, setDisplaySub] = useState(style.displayIn)

    function handleClick() {
        setDisplaySub(
            displaySub == style.displayIn ? displaySub = style.displayOut : displaySub = style.displayIn)
    }

    let cssStyle = getCssStyle()
    return (
        <div className={`${displaySub} ${cssStyle.borderBottom}`}>
            <div onClick={handleClick} className={`${utilities.gridMaxContent2} justify-between ${style.paddingTitle}`}>
                <div className={cssStyle.filterName}>
                    {item.FilterName}
                </div>
                <div className="grid items-center">
                    <div className="h-4 w-4 relative">
                        <Image layout={"fill"} src={GlobalConst.sourceImages.bottomArrow} alt=""/>
                    </div>
                </div>
            </div>
            <div className={style.gridAtributes}>
                {
                    item.SubCategorys.map((subcategory, index) =>
                        <li key={index} className={`${style.gridTagAtri} ${style.styleTagsCategories}`}>
                            <div className={`${utilities.clamp1} `}>
                                {subcategory.Name}
                            </div>
                            <div>
                                <div className={`${utilities.gridMaxContent2} justify-between`}>
                                    <label htmlFor={`${item}CheckBox`}
                                           className={utilities.fontSecundaryText}></label>
                                    <input onClick={() => click(subcategory)} className="checkboxDarkMode"
                                           id={`${item}CheckBox`}
                                           type='radio'/>
                                </div>
                            </div>
                        </li>
                    )
                }

            </div>
        </div>
    )

    function getCssStyle() {
        return {
            filterName: isDarkMode ? utilities.fontNameDarkMode : utilities.fontName,
            borderBottom:
                isOpenFilter ?
                    isDarkMode ? style.borderBottomDarkMode : style.borderBottom
                    :
                    ""
        }
    }
}