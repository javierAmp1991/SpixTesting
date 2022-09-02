import utilities from "/styles/utilities.module.css"
import style from "../../../styles/Mobile/Search/layoutPrincipalFilterMobile.module.css";
import {GlobalConst} from "../../../public/globalConst";
import {FiltersData} from "../../../dataDemo/data";
import React, {useState} from "react";
import SubCategoryContainerMobile from "./subCategoryContainerMobile";
import {Filters, SubcategoryFilter} from "../../Desktop/Search/subcategoryContainer";
import Image from "next/image";
import {SuperCategoryFilter} from "../../../dataDemo/data";
import {CategoryFilter} from "../../../dataDemo/data";

export default function LayoutPrincipalFilterMobile({
                                                        isOpenFilter,
                                                        isDarkMode,
                                                        handleOpenFilter,
                                                        isCategory,
                                                        listCategoryFilter,
                                                        listPrincipalFilter,
                                                        isReview,
                                                    }:
                                                        {
                                                            isOpenFilter: boolean, isDarkMode: boolean, handleOpenFilter: any,
                                                            isCategory: boolean, listCategoryFilter: SuperCategoryFilter[],
                                                            listPrincipalFilter: CategoryFilter[], isReview: boolean
                                                        }) {
    const cssStyle = getCssStyle()

    //region hooks
    let [listSuperCat, setListSuperCat] = useState(listCategoryFilter)
    const handleClickFilter = (idFilter: string) => {
        const newListSuperCat: SuperCategoryFilter[] = listSuperCat.map(item => {
            if (item.Id == idFilter) {
                return {...item, isSelected: true}
            } else return {...item, isSelected: false}
        })
        setListSuperCat(listSuperCat = newListSuperCat)
    }
    const handleClickSubCategory = (idSubCat: string, idSupCat: string) => {
        const newSuperCategory: SuperCategoryFilter[] = listSuperCat.map(item => {
                if (idSupCat == item.Id) {
                    const newSubCateogry: CategoryFilter[] = item.ListCategory.map(subItem => {
                            if (subItem.Id == idSubCat) {
                                return {...subItem, IsSelected: true}
                            } else {
                                return {...subItem, IsSelected: false}
                            }
                        }
                    )
                    return {...item, ListCategory: newSubCateogry}
                } else {
                    return item
                }
            }
        )
        setListSuperCat(listSuperCat = newSuperCategory)
    }

    let [principalFilters, setPrincipalFilters] = useState(listPrincipalFilter)
    const handleClickPrincipalFilters = (idFilter: string, isClicked: boolean) => {
        const newListFilter = principalFilters.map(item => {
            if (item.Id == idFilter) {
                return {...item, IsSelected: isClicked}
            } else return {...item, IsSelected: false}
        })
        setPrincipalFilters(principalFilters = newListFilter)
    }

    let [listFilters, setListFilters] = useState(FiltersData.listFilters)
    let [selectedTagsShow, setSelectedItemShow] = useState([])

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

    let [displayOrderBy, setDisplayOrderB] = useState(true)
    const handleOrderBy = () => setDisplayOrderB(displayOrderBy = !displayOrderBy)

    function isSubCategoryFull() : boolean {
        let isFull: boolean = true
        listSuperCat.forEach(item =>{
            if(item.isSelected){
                if(item.ListCategory == null){
                    isFull = false
                }
            }
        })
        return isFull
    }
    //endregion

    return (
        <div className={`${cssStyle.bg}`}>
            {
                isCategory &&
                <div className={style.gridAtributesAdvanced}>
                    <div className={style.carrouselCont}>
                        {
                            listSuperCat.map((item) =>
                                <button onClick={() => handleClickFilter(item.Id)}
                                        key={item.Id}
                                        className={item.isSelected ? style.gridFilterImageSelected : style.gridFilterImage}>
                                    <div className={style.imageSize}>
                                        <Image layout={"fill"} src={item.PathIcon} alt={""}/>
                                    </div>
                                    <div className={`${utilities.fontPrimarText} ${style.textFilter}`}>
                                        {item.Name}
                                    </div>
                                </button>
                            )
                        }
                    </div>
                </div>
            }
            {
                isCategory &&
                isSubCategoryFull() &&
                <div className={style.buttonsContSub}>
                    {
                        listSuperCat.map((item) =>
                            item.isSelected &&
                            item.ListCategory.map((item2) =>
                                <div key={item2.Id}
                                     className={style.gridButtonSub}>
                                    <div className={style.imageSizeSub}>
                                        <Image layout={"fill"} src={item2.ImagePath} alt={""}/>
                                    </div>
                                    <div className={`${utilities.fontPrimarText} ${style.textFilterSub}`}>
                                        {item2.Name}
                                    </div>
                                    <div className={`${utilities.gridMaxContent2} items-center`}>
                                        <input onChange={() => handleClickSubCategory(item2.Id, item.Id)}
                                               className={style.inputRadioStyle}
                                               id={item.Name}
                                               checked={item2.IsSelected}
                                               type='radio'
                                               name={item.Name}/>
                                    </div>
                                </div>)
                        )
                    }
                </div>
            }

            {/*<div className={style.buttonsCont}>
                    {
                        principalFilters.map((item) =>
                            <div key={item.Id} onClick={() => handleClickPrincipalFilters(item.Id, !item.IsSelected)}
                                 className={item.IsSelected ? style.gridButtonSelected : style.gridButton}>
                                <div className={style.imageSizeButton}>
                                    <Image layout={"fill"} src={item.ImagePath} alt={""}/>
                                </div>
                                <div className={`${style.paddingText}`}>
                                    {item.Name}
                                </div>
                            </div>
                        )
                    }

                </div>*/}

            {
                !isOpenFilter &&
                isReview &&
                <>
                    <div className={style.gridResultFiltersIn}>
                        <div className={`${utilities.fontSubTitle} `}>
                            Filtros
                        </div>
                        <button onClick={handleOpenFilter} className={`grid items-center`}>
                            <div className={"h-3 w-4 relative"}>
                                <Image layout={"fill"}
                                       src={GlobalConst.sourceImages.engineIcon} alt={""}/>
                            </div>
                        </button>
                    </div>

                    <div>
                        <div className={`${utilities.gridMaxContent2} ${style.paddingOrderBy} justify-between`}>
                            <div className={`${cssStyle.fontName}`}>
                                Ordenar por:
                            </div>
                            <div onClick={handleOrderBy}
                                 className="grid items-center">
                                <div className="h-4 w-5 relative">
                                    <Image layout={"fill"} src={GlobalConst.sourceImages.bottomArrow} alt=""/>
                                </div>
                            </div>
                        </div>
                        {
                            displayOrderBy &&
                            <div className={style.buttonsCont}>
                                {
                                    principalFilters.map((item) =>
                                        <div key={item.Id}
                                             onClick={() => handleClickPrincipalFilters(item.Id, !item.IsSelected)}
                                             className={item.IsSelected ? style.gridButtonSelected : style.gridButton}>
                                            <div className={style.imageSizeButton}>
                                                <Image layout={"fill"} src={item.ImagePath} alt={""}/>
                                            </div>
                                            <div className={`${style.paddingText}`}>
                                                {item.Name}
                                            </div>
                                        </div>
                                    )
                                }

                            </div>
                        }
                    </div>

                    <div className={`${selectedTagsShow.length != 0 && style.gridTitle} ${cssStyle.borderBottom}`}>
                        <div className={style.gridSelected}>
                            {
                                selectedTagsShow.map((item, index) =>
                                    <div key={index}
                                         className={`${utilities.gridMaxContent2} gap-3 ${cssStyle.styleTags}`}>
                                        <div className={utilities.clamp1}>
                                            {item.Name}
                                        </div>
                                        <button onClick={() => deleteItem(item)}>
                                            <div className="h-4 w-4 relative">
                                                <Image layout={"fill"} src={GlobalConst.sourceImages.deleteIcon}
                                                       alt=""/>
                                            </div>
                                        </button>
                                    </div>
                                )
                            }
                        </div>
                    </div>

                    <div>
                        {
                            listFilters.map((item) =>
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
                </>
            }
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
            bg: isDarkMode ? utilities.bgDarkModeInfo : utilities.bgNormalInfo,
            divStyle: isOpenFilter ? isCategory ? style.displayInFilters : style.displayInCategoryFilter : style.displayOutFilters
        }
    }
}