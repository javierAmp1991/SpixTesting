export class SubcategoryFilter {
    public Name: string;
}

export class Filters {
    public FilterName: string;
    public SubCategorys: SubcategoryFilter[];
}

import {GlobalConst} from "../../../public/globalConst";
import style from "/styles/Mobile/Search/subcategoryContainer.module.css"
import utilities from "/styles/utilities.module.css"
import {priceFilters} from "../../../dataDemo/data";
import {dateFilters} from "../../../dataDemo/data";
import React, {useState} from "react";

export default function SubCategoryContainerMobile({item, click, isDarkMode}: { item: Filters, click, isDarkMode : boolean }) {
    let [displaySub, setDisplaySub] = React.useState(style.displayIn)
    const cssStyle = getCssStyle()
    function handleClick() {
        setDisplaySub(
            displaySub == style.displayIn ? displaySub = style.displayOut : displaySub = style.displayIn)
    }

    return (
        <div className={`${displaySub} ${cssStyle.borderBottom}`}>
            <div onClick={handleClick}
                 className={`${utilities.gridMaxContent2} ${style.paddingTitleContainer} justify-between`}>
                <div className={`${style.paddingTitle} ${cssStyle.fontName}`}>
                    {item.FilterName}
                </div>
                <div className="grid items-center">
                    <img className="h-4 w-auto" src={GlobalConst.sourceImages.bottomArrow} alt=""/>
                </div>
            </div>
            <ul className={`${style.gridContainerSubcategory} px-8`}>
                {
                    item.SubCategorys.map((subcategory, index) =>
                        subcategory.Name != priceFilters.priceRange &&
                        subcategory.Name != dateFilters.rangeDate ?
                            <li key={index} className={`${utilities.gridMaxContent2} justify-between`}>
                                <label htmlFor={`${subcategory.Name}CheckBox`}
                                       className={cssStyle.fontSecundaryText}>{subcategory.Name}</label>
                                <input onClick={() => click(subcategory)} className="checkbox" id={`${subcategory.Name}CheckBox`} type='radio'
                                       name={item.FilterName}/>
                            </li>
                            :
                            subcategory.Name == priceFilters.priceRange ?
                                <li className={`${utilities.gridMaxContent2} justify-between`}>
                                    <div className="grid gap-5">
                                        <div className="relative">
                                            <span className={`${cssStyle.fontSecundaryText} ${style.positionDolar}`}>$</span>
                                            <input id="inputNumberMin"
                                                   className={`${cssStyle.styleRangePrice} ${cssStyle.bgInfo}`}
                                                   placeholder="Precio Minimo"
                                                   type="number"/>
                                        </div>
                                        <div className="relative">
                                            <span className={`${cssStyle.fontSecundaryText} ${style.positionDolar}`}>$</span>
                                            <input id="inputNumberMax"
                                                   className={`${cssStyle.styleRangePrice} ${cssStyle.bgInfo}`}
                                                   placeholder="Precio Maximo"
                                                   type="number"/>
                                        </div>
                                    </div>
                                    <div className={`${utilities.gridMaxContent2} items-center`}>
                                        <label className="" htmlFor="checkbox+@subcategory.Name"></label>
                                        <input className="checkbox" id={`checkbox${subcategory.Name}`} type='radio'
                                               name={item.FilterName}/>
                                    </div>
                                </li>
                                :
                                <li className={`${utilities.gridMaxContent2} justify-between`}>
                                    <div className="grid gap-5">
                                        <div className={`${cssStyle.styleRangeDate} ${cssStyle.bgInfo}`}>
                                                <span className={style.positionCalendar}>
                                                    <img className="h-3 w-auto "
                                                         src={cssStyle.calendarIcon}/>
                                                </span>
                                            <input className={style.styleRangeDateInput} type="date"/>
                                        </div>
                                        <div className={`${cssStyle.styleRangeDate} ${cssStyle.bgInfo}`}>
                                                <span className={style.positionCalendar}>
                                                    <img className="h-3 w-auto"
                                                         src={cssStyle.calendarIcon}/>
                                                </span>
                                            <input className={style.styleRangeDateInput} type="date"/>
                                        </div>
                                    </div>

                                    <div className={`${utilities.gridMaxContent2} items-center`}>
                                        <label className="font-normal"
                                               htmlFor="checkbox+@subcategory.Name"></label>
                                        <input className="checkbox" id="checkbox+@subcategory.Name" type='radio'
                                               name={item.FilterName}/>
                                    </div>
                                </li>
                    )
                }
            </ul>
        </div>
    )

    function getCssStyle(){
        return {
            fontName: isDarkMode? utilities.fontNameDarkMode: utilities.fontName,
            fontSecundaryText: isDarkMode? utilities.fontSecundaryTextDarkMode : utilities.fontSecundaryText,
            borderBottom: isDarkMode? style.borderBottomDarkMode : style.borderBottom,
            bgInfo: isDarkMode? utilities.bgDarkModeInfo : utilities.bgNormalInfo,
            styleRangePrice: isDarkMode? style.styleRangePriceInputDarkMode : style.styleRangePriceInput,
            styleRangeDate: isDarkMode? style.styleContainerDareInputDarkMode : style.styleContainerDareInput,
            calendarIcon: isDarkMode? GlobalConst.sourceImages.calendarIconWhite : GlobalConst.sourceImages.calendarIcon
        }
    }
}