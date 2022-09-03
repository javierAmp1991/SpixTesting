import utilities from "/styles/utilities.module.css"
import style from "/styles/Desktop/Search/layoutPrincipalFilters.module.css"
import {FiltersData} from "../../../dataDemo/data"
import {GlobalConst} from "../../../public/globalConst";
import SubcategoryContainer, {Filters} from "./subcategoryContainer";
import React, {useEffect, useState} from "react";
import {SubcategoryFilter} from "./subcategoryContainer";
import Image from "next/image";
import {CategoryFilter} from "../../../dataDemo/data";
import {SuperCategoryFilter} from "../../../dataDemo/data";

const categoryTitle: string = "Categorias"
const subcategoryTitle: string = "Subcategorias"


export default function MainContainerFilters({
                                                 isOpenFilter,
                                                 isDarkMode,
                                                 isCategory,
                                                 listCategoryFilter,
                                                 listPrincipalFilter,
                                                 isReview
                                             }:
                                                 {
                                                     isOpenFilter: boolean, isDarkMode: boolean,
                                                     isCategory: boolean, listCategoryFilter: SuperCategoryFilter[],
                                                     listPrincipalFilter: CategoryFilter[], isReview: boolean
                                                 }) {

    const cssStyle = getCssStyle()

    //region hooks
    let [listFilters, setListFilters] = useState(FiltersData.listFilters)
    let [selectedTagsShow, setSelectedItemShow] = useState([])

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

    let [displaySub, setDisplaySub] = useState(style.displayOutAtr)
    let [displayPrinFil, setDisplayPrinFil] = useState(style.displayInAtr)
    let [displaySuperCategory, setDisplaySuperCatgory] = useState(style.displayOutAtr)

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

    function handleClick() {
        setDisplaySub(
            displaySub == style.displayInAtr ? displaySub = style.displayOutAtr : displaySub = style.displayInAtr)
    }

    function handleClick1() {
        setDisplayPrinFil(
            displayPrinFil == style.displayInAtr ? displayPrinFil = style.displayOutAtr : displayPrinFil = style.displayInAtr)
    }

    function handleClick2() {
        setDisplaySuperCatgory(
            displaySuperCategory == style.displayInAtr ? displaySuperCategory = style.displayOutAtr : displaySuperCategory = style.displayInAtr)
    }

    let [displayAdvanced, setDisplayAdvanced] = useState(style.displayIn)

    function handleClickAdvanced() {
        setDisplayAdvanced(
            displayAdvanced == style.displayInAdb ? displayAdvanced = style.displayOutAdb : displayAdvanced = style.displayInAdb)
    }

    let [isOpenAdvancedFilter, setIsOpenAdvancedFilter] = useState(false)
    const handleIsOpenAdvanced = () => setIsOpenAdvancedFilter(isOpenAdvancedFilter = !isOpenAdvancedFilter)
    //endregions

    return (
        <div>
            <div className={`${cssStyle.borderBottom} ${style.paddingTitle} ${style.gridTitleIn}`}>
                <div className={cssStyle.fontTitle}>
                    Filtros
                </div>
            </div>


            {/*superCategory*/}
            {
                isCategory &&
                <div>
                    {
                        <div className={displaySuperCategory}>
                            <div className={`${utilities.gridMaxContent2} ${style.paddingSubtitle} justify-between`}>
                                <div className={`${cssStyle.fontName}`}>
                                    {categoryTitle}
                                </div>
                                <div onClick={handleClick2} className="grid items-center">
                                    <div className="h-4 w-4 relative">
                                        <Image layout={"fill"} src={GlobalConst.sourceImages.bottomArrow} alt=""/>
                                    </div>
                                </div>
                            </div>
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
                </div>
            }

            {/*subCategory*/}
            {
                isCategory &&
                isSubCategoryFull() &&
                <div className={displaySub}>
                    <div className={`${utilities.gridMaxContent2} ${style.paddingSubtitle} justify-between`}>
                        <div className={`${cssStyle.fontName}`}>
                            {subcategoryTitle}
                        </div>
                        <div onClick={handleClick} className="grid items-center">
                            <div className="h-4 w-4 relative">
                                <Image layout={"fill"} src={GlobalConst.sourceImages.bottomArrow} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className={style.carrouselContSub}>
                        {
                            listSuperCat.map((item) =>
                                item.isSelected &&
                                item.ListCategory.map(item2 =>
                                    <button onClick={() => handleClickSubCategory(item2.Id, item.Id)}
                                            key={item2.Id}
                                            className={style.gridButtonSub}>
                                        <div className={style.imageSize}>
                                            <Image layout={"fill"} src={item2.ImagePath} alt={""}/>
                                        </div>
                                        <div className={`${utilities.fontPrimarText} ${style.textFilterSub}`}>
                                            {item2.Name}
                                        </div>
                                        <div className={`${utilities.gridMaxContent2} items-center`}>
                                            <input onChange={() => handleClickSubCategory(item2.Id, item.Id)}
                                                   className={style.inputRadioStyle}
                                                   id={item2.Name}
                                                   checked={item2.IsSelected}
                                                   type='radio'
                                                   name={item2.Name}/>
                                        </div>
                                    </button>
                                )
                            )
                        }
                    </div>
                </div>
            }

            <div>
                <div className={displayPrinFil}>
                    <div className={`${utilities.gridMaxContent2} ${style.paddingSubtitle} justify-between`}>
                        <div className={`${cssStyle.fontName}`}>
                            Ordenar por:
                        </div>
                        <div onClick={handleClick1} className="grid items-center">
                            <div className="h-4 w-4 relative">
                                <Image layout={"fill"} src={GlobalConst.sourceImages.bottomArrow} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className={style.buttonsCont}>
                        {
                            principalFilters.map((item, index) =>
                                <button key={item.Id}
                                        onClick={() => handleClickPrincipalFilters(item.Id, !item.IsSelected)}
                                        className={item.IsSelected ? style.gridButtonSelected : style.gridButton}>
                                    <div
                                        className={index == 0 ? style.imageSizeButton : style.imageSizeButtonPrincipal}>
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
            </div>

            {/*advancedFilters*/}
            {
                isReview &&
                <div className={isOpenAdvancedFilter ? style.displayOutAdb : style.displayInAdb}>
                    <div className={displayAdvanced}>
                        <div className={`${utilities.gridMaxContent2} ${style.paddingSubtitle} justify-between`}>
                            <div className={`${cssStyle.fontName}`}>
                                Opciones Avanzadas
                            </div>
                            <div onClick={handleIsOpenAdvanced} className="grid items-center">
                                <div className="h-4 w-4 relative">
                                    <Image layout={"fill"} src={GlobalConst.sourceImages.bottomArrow} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div>
                            {
                                selectedTagsShow.length >= 1 &&
                                <div className={`${style.gridSelectedTags} ${cssStyle.borderBottom}`}>
                                    {
                                        selectedTagsShow.map((item, index) =>
                                            <div key={index}
                                                 className={`${utilities.gridMaxContent2} ${cssStyle.styleTags}`}>
                                                <div className={utilities.clamp1}>
                                                    {item.Name}
                                                </div>
                                                <button onClick={() => deleteItem(item)}>
                                                    <div className="h-4 w-4 relative">
                                                        <Image layout={"fill"}
                                                               src={GlobalConst.sourceImages.deleteIcon} alt=""/>
                                                    </div>
                                                </button>
                                            </div>
                                        )
                                    }
                                </div>
                            }
                        </div>

                        <div>
                            {
                                listFilters.map((item) =>

                                    <SubcategoryContainer isDarkMode={isDarkMode}
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
                </div>
            }
        </div>
    )

    function getCssStyle() {
        return {
            fontTitle: isDarkMode ? utilities.fontTitleDarkMode : utilities.fontTitle,
            bg: isDarkMode ? utilities.bgDarkModeInfo : utilities.bgNormalInfo,
            cleanIcon: isDarkMode ? GlobalConst.sourceImages.cleanIconWhite : GlobalConst.sourceImages.cleanIcon,
            fontName: isDarkMode ? utilities.fontNameDarkMode : utilities.fontName,
            styleTags: isDarkMode ? style.styleTagsDarkMode : style.styleTags,
            borderBottom:
                isOpenFilter ?
                    isDarkMode ? "" : style.borderBottom
                    :
                    ""
        }
    }
}