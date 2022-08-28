import utilities from "/styles/utilities.module.css"
import style from "../../../styles/Mobile/Search/layoutPrincipalFilterMobile.module.css";
import {GlobalConst} from "../../../public/globalConst";
import {FiltersData} from "../../../dataDemo/data";
import React, {useState} from "react";
import SubCategoryContainerMobile from "./subCategoryContainerMobile";
import AtributesContainerMobile from "./atributesContainerMobile";
import {Filters, SubcategoryFilter} from "../../Desktop/Search/subcategoryContainer";
import {AtributesDataFilter} from "../../../dataDemo/data";
import Image from "next/image";

let imageIcon = <Image className="h-4 w-full" src={GlobalConst.sourceImages.deleteIcon} alt=""/>

export default function LayoutPrincipalFilterMobile({hiddeResult, isDarkMode}) {
    let [displayFilter, setDisplayFilter] = React.useState(style.displayInFilters)
    let [listFilters, setListFilters] = useState(FiltersData.listFilters)
    let [selectedTagsShow, setSelectedItemShow] = useState([])

    function handleClick() {
        setDisplayFilter(
            displayFilter == style.displayInFilters ? style.displayOutFilters : style.displayInFilters
        )
        hiddeResult()
    }

    const handleSelectedCategory = (subCategory: SubcategoryFilter) => {
        if (selectedTagsShow.length == 0) {
            addItemNew(subCategory)
        } else {
            let bool: boolean = isSelectedType(subCategory)
            if (bool) {
                replaceItem(subCategory)
            } else {
                addItemNew(subCategory)
            }
        }
        handleSelectInput(subCategory)
    }

    function isSelectedType(subcategory: SubcategoryFilter): boolean {
        let newValue: boolean = selectedTagsShow.some((item: SubcategoryFilter) => {
                if (item.Type == subcategory.Type) {
                    return true;
                } else {
                    return false;
                }
            }
        )
        return newValue;
    }

    const handleSelectInput = (subcategory: SubcategoryFilter) => {
        const newListFilters: Filters[] = listFilters.map((item) => {
                if (item.FilterName == subcategory.Type) {
                    const newSubCategory: SubcategoryFilter[] = item.SubCategorys.map(item2 => {
                        if (item2.Name == subcategory.Name) {
                            return {...item2, isChecked: true}
                        } else {
                            return {...item2, isChecked: false}
                        }
                    })
                    return {...item, SubCategorys: newSubCategory}
                } else {
                    return item
                }
            }
        )
        setListFilters(listFilters = newListFilters)
    }
    const replaceItem = (subCategory) => {
        const newList: SubcategoryFilter[] = selectedTagsShow.map(item => {
            if (item.Type == subCategory.Type) {
                return subCategory
            } else return item
        })
        setSelectedItemShow(selectedTagsShow = newList)
    }
    const addItemNew = (subCategory: SubcategoryFilter) => {
        setSelectedItemShow([...selectedTagsShow, subCategory])
    }

    const deleteItem = ((subCategory: SubcategoryFilter) => {
        const newItems: SubcategoryFilter[] = selectedTagsShow.filter(item => item != subCategory)
        setSelectedItemShow(selectedTagsShow = newItems)
        handleDeselectedInput(subCategory)
    })
    const handleDeselectedInput = (subcategory: SubcategoryFilter) => {
        const newListFilters: Filters[] = listFilters.map((item) => {
                if (item.FilterName == subcategory.Type) {
                    const newSubCategory: SubcategoryFilter[] = item.SubCategorys.map(item2 => {
                        return {...item2, isChecked: false}
                    })
                    return {...item, SubCategorys: newSubCategory}
                } else {
                    return item
                }
            }
        )
        setListFilters(listFilters = newListFilters)
    }

    const deleteAll = () => {
        setSelectedItemShow([])
        handleDeselectedAll()
    }
    const handleDeselectedAll = () => {
        const newListFilters: Filters[] = listFilters.map((item) => {
                const newSubCategory: SubcategoryFilter[] = item.SubCategorys.map(item2 => {
                    return {...item2, isChecked: false}
                })
                return {...item, SubCategorys: newSubCategory}
            }
        )
        setListFilters(listFilters = newListFilters)
    }

    const cssStyle = getCssStyle()

    return (
        <div className={`${displayFilter} ${cssStyle.bg}`}>
            <div className={`${style.gridTitle} ${cssStyle.borderBottom}`}>
                <div className={`${style.gridSelected}`}>
                    {
                        selectedTagsShow.map((item, index) =>
                            <div key={index} className={`${utilities.gridMaxContent2} gap-3 ${cssStyle.styleTags}`}>
                                <div className={utilities.clamp1}>
                                    {item.Name}
                                </div>
                                <button onClick={() => deleteItem(item)}>
                                    <div className="h-4 w-4 relative">
                                        <Image layout={"fill"} src={GlobalConst.sourceImages.deleteIcon} alt=""/>
                                    </div>
                                </button>
                            </div>
                        )
                    }
                </div>
                <div onClick={handleClick}
                     className={`grid items-center ${style.paddingFilters} ${cssStyle.borderLeft} ${cssStyle.fontSubTitle}`}>
                    Filtros
                </div>
            </div>

            <div>
                {
                    listFilters.map((item, index) =>
                        index == 0 ?
                            <AtributesContainerMobile isDarkMode={isDarkMode}
                                                      click={handleSelectedCategory}
                                                      key={item.FilterName}
                                                      item={item}/>
                            :
                            <SubCategoryContainerMobile isDarkMode={isDarkMode}
                                                        click={handleSelectedCategory}
                                                        key={item.FilterName}
                                                        item={item}/>
                    )
                }
            </div>
            <div className={`${utilities.gridMaxContent2} ${style.paddingCleanFilters} justify-between`}>
                <div className={cssStyle.fontName}>
                    Limpiar Filtros
                </div>
                <button onClick={deleteAll}>
                    <div className="h-4 w-3 relative">
                        <Image layout={"fill"} src={cssStyle.cleanIcon} alt=""/>
                    </div>
                </button>
            </div>
        </div>
    )

    function getCssStyle() {
        return {
            fontName: isDarkMode ? utilities.fontNameDarkMode : utilities.fontName,
            cleanIcon: isDarkMode ? GlobalConst.sourceImages.cleanIconWhite : GlobalConst.sourceImages.cleanIcon,
            styleTags: isDarkMode ? style.styleTagsDarkMode : style.styleTags,
            fontSubTitle: isDarkMode ? utilities.fontSubTitleDarkMode : utilities.fontSubTitle,
            borderBottom: isDarkMode ? style.borderBottomDarkMode : style.borderBottom,
            borderLeft: isDarkMode ? style.borderLeftDarkMode : style.borderLeft,
            bg: isDarkMode ? utilities.bgDarkModeInfo : utilities.bgNormalInfo
        }
    }
}