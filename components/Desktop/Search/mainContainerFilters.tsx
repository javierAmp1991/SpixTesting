import utilities from "/styles/utilities.module.css"
import style from "/styles/Desktop/Search/layoutPrincipalFilters.module.css"
import {FiltersData, Product, productAmount} from "../../../dataDemo/data"
import {GlobalConst} from "../../../public/globalConst";
import {AtributesDataFilter} from "../../../dataDemo/data";
import SubcategoryContainer from "./subcategoryContainer";
import AtributesContainer from "./atributesContainer";
import React, {useState} from "react";
import {SubcategoryFilter} from "./subcategoryContainer";
import Image from "next/image";

export default function MainContainerFilters({closeFilters, isOpenFilter, isDarkMode}) {
    const cssStyle = getCssStyle()
    let [selectedTagsShow, setSelectedItemShow] = useState([])

    const addItem = (subCategory: SubcategoryFilter) => {
        if(selectedTagsShow.length == 0){
            addItemNew(subCategory)
        }
        else{
            let bool: boolean = getBool(subCategory)
            if(bool) {
                replaceItem(subCategory)
            }
            else {
                addItemNew(subCategory)
            }
        }
    }

    function getBool(subcategory: SubcategoryFilter): boolean {
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

    const replaceItem = (subCategory)=>{
        const newList: SubcategoryFilter[] = selectedTagsShow.map(item =>{
            if(item.Type == subCategory.Type) {
                return subCategory
            }
            else return item
        })
        setSelectedItemShow(selectedTagsShow = newList)
    }

    const addItemNew = (subCategory: SubcategoryFilter)=>{
        setSelectedItemShow([...selectedTagsShow, subCategory])
    }

    const deleteItem = ((subCategory: SubcategoryFilter) => {
        const newItems: SubcategoryFilter[] = selectedTagsShow.filter(item => item != subCategory)
        setSelectedItemShow(selectedTagsShow = newItems)
    })

    const deleteAll = () => setSelectedItemShow([])

    return (
        <>
            <div className={`${cssStyle.borderBottom} ${style.paddingTitle} ${style.gridTitleIn}`}>
                <div className={cssStyle.fontTitle}>
                    Filtros
                </div>
                <div onClick={() => closeFilters()} className="grid content-center">
                    <div className={style.styleArrowClose}>
                        <Image layout={"fill"}
                               src={isOpenFilter ? GlobalConst.sourceImages.leftArrow : GlobalConst.sourceImages.rightArrow}
                               alt=""/>
                    </div>
                </div>
            </div>
            <div className={isOpenFilter ? style.displayIn : style.displayOut}>
                <div>
                    {
                        selectedTagsShow.length >= 1 ?
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
                            :
                            ""
                    }
                </div>
                <div className={cssStyle.borderBottom}>
                    {
                        <AtributesContainer isOpenFilter={isOpenFilter} isDarkMode={isDarkMode} click={addItem}
                                            item={AtributesDataFilter.atributes}/>
                    }
                </div>
                <div>
                    {
                        FiltersData.listFilters.map(item =>
                            <SubcategoryContainer isDarkMode={isDarkMode} click={addItem} key={item.FilterName}
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
        </>
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