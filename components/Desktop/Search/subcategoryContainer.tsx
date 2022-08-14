import {GlobalConst} from "../../../public/globalConst";

export class SubcategoryFilter {
    public Name: string;
    public id: string
    public rangeValue?: string
}

export class Filters {
    public FilterName: string;
    public SubCategorys: SubcategoryFilter[];
}

import style from "/styles/Desktop/Search/subcategoryContainer.module.css"
import utilities from "/styles/utilities.module.css"
import React, {useState} from "react";
import {dateFilters, priceFilters} from "../../../dataDemo/data";

export default function SubcategoryContainer({item, click, isDarkMode}: { item: Filters, click, isDarkMode: boolean }) {
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(0)
    const [minDate, setMinDate] = useState(0)
    const [maxDate, setMaxDate] = useState(0)

    const cssStyle = getCssStyle()
    return (
        <div className={``}>
            <div className={`${style.paddingTitle} ${cssStyle.fontName}`}>
                {item.FilterName}
            </div>
            <ul className={`${cssStyle.borderBottom} ${style.gridContainerSubcategory} pb-4`}>
                {
                    item.SubCategorys.map((subcategory, index) =>
                        subcategory.Name != priceFilters.priceRange &&
                        subcategory.Name != dateFilters.rangeDate ?
                            <li key={index} className={`${utilities.gridMaxContent2} justify-between `}>
                                <label htmlFor={`${subcategory.Name}CheckBox`}
                                       className={cssStyle.fontSecundaryText}>{subcategory.Name}</label>
                                <input onChange={() => click(subcategory)} className="checkboxDarkMode"
                                       id={`${subcategory.Name}CheckBox`} type='radio'
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
                                        <label htmlFor={`${subcategory.Name}CheckBox`} />
                                        <input className="checkboxDarkMode"
                                               id={`${subcategory.Name}CheckBox`} type='radio'
                                               name={item.FilterName}/>
                                    </div>
                                </li>
                                :
                                <li className={`${utilities.gridMaxContent2} justify-between`}>
                                    <div className="grid gap-5">
                                        <div className={`${cssStyle.styleRangeDate} ${cssStyle.bgInfo}`}>
                                            <div className={style.positionCalendar}>
                                                <img className="h-3 w-auto "
                                                     src={cssStyle.calendarIcon}/>
                                            </div>
                                            <input className={style.styleRangeDateInput} type="date"/>
                                        </div>
                                        <div className={`${cssStyle.styleRangeDate} ${cssStyle.bgInfo}`}>
                                            <div className={style.positionCalendar}>
                                                <img className="h-3 w-auto"
                                                     src={cssStyle.calendarIcon}/>
                                            </div>
                                            <input className={style.styleRangeDateInput} type="date"/>
                                        </div>
                                    </div>

                                    <div className={`${utilities.gridMaxContent2} items-center`}>
                                        <label htmlFor={`${subcategory.Name}CheckBox`} />
                                        <input onChange={() => click(subcategory)} className="checkboxDarkMode"
                                               id={`${subcategory.Name}CheckBox`} type='radio'
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