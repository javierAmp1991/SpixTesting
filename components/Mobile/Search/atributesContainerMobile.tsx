import utilities from "/styles/utilities.module.css"
import React, {useState} from "react";
import style from "/styles/Mobile/Search/atributesContainer.module.css"
import {GlobalConst} from "../../../public/globalConst";
import {Filters} from "./subCategoryContainerMobile";
import Image from "next/image";

export default function AtributesContainerMobile({item, click, isDarkMode}: {item: Filters, click, isDarkMode: boolean}) {
    let [displaySub, setDisplaySub] = useState(style.displayIn)
    function handleClick(){
        setDisplaySub(
            displaySub == style.displayIn? displaySub = style.displayOut : displaySub = style.displayIn)
    }
    const cssStyle = getCssStyle()
    return (
        <div className={`${displaySub} ${cssStyle.borderBottom}`}>
            <div onClick={handleClick} className={`${utilities.gridMaxContent2} ${style.paddingTitleContainer} justify-between`}>
                <div className={`${style.paddingTitle} ${cssStyle.fontName}`}>
                    {item.FilterName}
                </div>
                <div className="grid items-center">
                    <div className="h-4 w-5 relative">
                    <Image layout={"fill"} src={GlobalConst.sourceImages.bottomArrow} alt=""/>
                    </div>
                </div>
            </div>
            <ul className={`${style.gridA}`}>
                {
                    item.SubCategorys.map((subcategory, index) =>
                        <li key={index} className={`${style.gridTagAtri} ${style.styleTagsCategories}`}>
                            <div className={`${utilities.clamp1}`}>
                                {subcategory.Name}
                            </div>
                            <button>
                                <li className={`${utilities.gridMaxContent2} justify-between`}>
                                    <label htmlFor={`${subcategory}CheckBox`}
                                           className={utilities.fontSecundaryText}></label>
                                    <input onChange={() => click(subcategory)} className="checkbox" id={`${item}CheckBox`} type='radio'/>
                                </li>
                            </button>
                        </li>
                    )
                }
            </ul>
        </div>
    )

    function getCssStyle(){
        return{
            fontName: isDarkMode? utilities.fontNameDarkMode : utilities.fontName,
            borderBottom: isDarkMode? style.borderBottomDarkMode : style.borderBottom
        }
    }
}