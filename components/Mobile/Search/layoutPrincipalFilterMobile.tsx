import utilities from "/styles/utilities.module.css"
import style from "../../../styles/Mobile/Search/layoutPrincipalFilterMobile.module.css";
import {GlobalConst} from "../../../public/globalConst";
import {FiltersData} from "../../../dataDemo/data";
import React, {useState} from "react";
import SubCategoryContainerMobile from "./subCategoryContainerMobile";
import AtributesContainerMobile from "./atributesContainerMobile";
import {Filters, SubcategoryFilter} from "../../Desktop/Search/subcategoryContainer";
import Image from "next/image";
class FilterProps {
    Id: string
    ImagePath: string
    Name: string
    IsSelected: boolean
}

const listFilters1: FilterProps[] = [
    {
        Id: "abcd",
        ImagePath: GlobalConst.sourceImages.sushiIcon,
        Name: "Sushi",
        IsSelected: false
    },
    {
        Id: "abcde",
        ImagePath: GlobalConst.sourceImages.pizzaIcon,
        Name: "Pizza",
        IsSelected: false
    },
    {
        Id: "abcdef",
        ImagePath: GlobalConst.sourceImages.hambIcon,
        Name: "Hamburguesa",
        IsSelected: false
    },
    {
        Id: "abcdefg",
        ImagePath: GlobalConst.sourceImages.peruvianFood,
        Name: "Peruana",
        IsSelected: false
    },
    {
        Id: "abcdefgh",
        ImagePath: GlobalConst.sourceImages.cofeeIcon,
        Name: "Cafe",
        IsSelected: false
    },
    {
        Id: "abcdefghsdasw13",
        ImagePath: GlobalConst.sourceImages.postres,
        Name: "Postres",
        IsSelected: false
    }
]

const principalFilterList: FilterProps[] = [
    {
        Id: "1234abcd",
        ImagePath: GlobalConst.sourceImages.ratingIndFull,
        Name: "Ofertas",
        IsSelected: false
    },
    {
        Id: "12345abcde",
        ImagePath: GlobalConst.sourceImages.ratingIndFull,
        Name: "Menor a Mayor",
        IsSelected: false
    },
]

export default function LayoutPrincipalFilterMobile({hiddeResult, isDarkMode}) {
    let [atributesFilters, setAtributesFilters] = useState(listFilters1)
    const handleClickFilter = (idFilter: string, isClicked: boolean) => {
        const newListFilter = atributesFilters.map(item => {
            if (item.Id == idFilter) {
                return {...item, IsSelected: isClicked}
            } else return item
        })
        setAtributesFilters(atributesFilters = newListFilter)
    }
    let [principalFilters, setPrincipalFilters] = useState(principalFilterList)
    const handleClickPrincipalFilters = (idFilter: string, isClicked: boolean) => {
        const newListFilter = principalFilters.map(item => {
            if (item.Id == idFilter) {
                return {...item, IsSelected: isClicked}
            } else return item
        })
        setPrincipalFilters(principalFilters = newListFilter)
    }

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
            {/*<div className={`${style.gridTitle} ${cssStyle.borderBottom}`}>
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
            </div>*/}

            <div>
                <div className={style.gridAtributesAdvanced}>

                    <div className={style.carrouselCont}>
                        {
                            atributesFilters.map((item, index) =>
                                <button onClick={() => handleClickFilter(item.Id, !item.IsSelected)}
                                        key={item.Id}
                                        className={item.IsSelected ? style.gridFilterImageSelected : style.gridFilterImage}>
                                    <div className={style.imageSize}>
                                        <Image layout={"fill"} src={item.ImagePath} alt={""}/>
                                    </div>
                                    <div className={`${utilities.fontPrimarText} ${style.textFilter}`}>
                                        {item.Name}
                                    </div>
                                </button>
                            )
                        }
                    </div>
                    <button onClick={handleClick} className={style.imageSizeButton}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.engineIcon}/>
                    </button>
                </div>

                <div className={style.buttonsCont}>
                    {
                        principalFilters.map((item, index) =>
                            <div key={item.Id} onClick={() => handleClickPrincipalFilters(item.Id, !item.IsSelected)}
                                 className={item.IsSelected ? style.gridButtonSelected : style.gridButton}>
                                <div className={style.imageSizeButton}>
                                    <Image layout={"fill"} src={item.ImagePath} alt={""}/>
                                </div>
                                <div className={`${utilities.fontPrimarText} ${style.paddingText}`}>
                                    {item.Name}
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>

            <div className={`${selectedTagsShow.length != 0 && style.gridTitle} ${cssStyle.borderBottom}`}>
                <div className={style.gridSelected}>
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
            </div>

            <div>
                {
                    listFilters.map((item, index) =>
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