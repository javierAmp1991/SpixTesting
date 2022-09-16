import style from "/styles/Desktop/Search/layoutPrincipal.module.css"
import styleMobile from "/styles/Mobile/Search/layoutPrincipalFilterMobile.module.css"
import utilities from "/styles/utilities.module.css"
import EventVerticalView from "../components/Desktop/EventsView/eventVerticalView";
import LayoutButtonNavegation from "../components/Desktop/Layouts/layoutButtonNavegation";
import ButtonNavegation from "../components/Desktop/Misc/buttonNavegation";
import MainContainerFilters from "../components/Desktop/Search/mainContainerFilters";
import React, {useState} from "react";
import {useMediaQuery} from "./index";
import EventHorizontalView from "../components/Mobile/Events/eventHorizontalView";
import LayoutPrincipalFilterMobile from "../components/Mobile/Search/layoutPrincipalFilterMobile";
import ButtonNavegationMobile from "../components/Mobile/Misc/buttonNavegationMobile";
import Image from "next/image";
import {GlobalConst} from "../public/globalConst";
import DefaultLayoutMobile from "../components/Mobile/defaultLayoutMobile";
import DefaultLayoutDesktop from "../components/Desktop/defaultLayoutDesktop";
import {
    SuperCategorySports,
    CategoryFilter,
    CategoryPrincipalFilters,
    SuperCategoryFilter
} from "../dataDemo/data";
import {DropDownSportSearch} from "../dataDemo/search/searchData";
import {BaseEventCard} from "../dataDemo/EventView/eventVerticalView";

let AntSig: string[] = ["Anterior", "Siguiente"]

export default function SearchRestaurant() {
    const categoryFilterRest: SuperCategoryFilter[] = SuperCategorySports.listSuperCat;
    const categoryPrincipalFilter: CategoryFilter[] = CategoryPrincipalFilters.listPrinciaplFilters;
    let [isDarkMode, setIsDarkModeP] = React.useState(false);
    let [isDisplayResult, setIsDisplayResult] = useState(true);
    let [isOpenFilters, setIsOpenFilters] = useState(true);
    /*const darkModeToggle = () => setIsDarkModeP(isDarkMode = !isDarkMode);*/
    const darkModeToggle = null
    const handleClick = () => setIsDisplayResult(isDisplayResult = !isDisplayResult);
    const handleOpenFilter = () => setIsOpenFilters(isOpenFilters = !isOpenFilters);
    const isSmallDown = useMediaQuery('(max-width: 1280px)');
    let cssStyle = getCssStyle();
    const textResultSection: string = "Deportes";

    const isCategory: boolean = true;
    const isDisplayCategory: boolean = true;
    const isSubCategory: boolean = true;
    const isDisplaySubCategory: boolean = true;
    const isPrincipalFill: boolean = true;
    const isDisplayPrincipalFill: boolean = true;
    const isAdvancedFilter: boolean = true;
    const isDisplayAdvancedFilter: boolean = false;
    const isReturnActive: boolean = true

    //region desktop Components
    let dropDown =
        DropDownSportSearch.listDropDown.map((item: BaseEventCard,) =>
            <EventVerticalView darkModeState={isDarkMode} item={item} key={item.Id}/>
        )

    let buttonsNavegation = <LayoutButtonNavegation>
        {
            AntSig.map(item =>
                <ButtonNavegation isDarkMode={isDarkMode} key={item} item={item}/>
            )
        }
    </LayoutButtonNavegation>
    //endregion
    //region mobile Components
    let dropDownMobile = DropDownSportSearch.listDropDown.map((item) =>
        <EventHorizontalView darkModeState={isDarkMode} item={item} key={item.Id}/>
    )
    let buttonsNavegationMobile =
        <LayoutButtonNavegation>
            {
                AntSig.map((item, index) =>
                    <ButtonNavegationMobile isDarkMode={isDarkMode} item={item} key={index}/>
                )
            }
        </LayoutButtonNavegation>
    //endregion

    return (
        isSmallDown ?
            <DefaultLayoutMobile isDarkMode={isDarkMode}>
                <div className={cssStyle.bg}>
                    <LayoutPrincipalFilterMobile listPrincipalFilter={categoryPrincipalFilter}
                                                 listCategoryFilter={categoryFilterRest}
                                                 handleOpenFilter={handleClick}
                                                 isDarkMode={isDarkMode}
                                                 isOpenFilter={isDisplayResult}
                                                 isCategory={isCategory} isDisplayCategory={isDisplayCategory}
                                                 isSubCategory={isSubCategory}
                                                 isDisplaySubCategory={isDisplaySubCategory}
                                                 IsPrincipalFill={isPrincipalFill}
                                                 isDisplayPrincipalFill={isDisplayPrincipalFill}
                                                 isAdvancedFilter={isAdvancedFilter}
                                                 isDisplayAdvancedFilter={isDisplayAdvancedFilter}
                                                 isReturnActive={isReturnActive}/>
                    {
                        isDisplayResult &&
                        <div className={`${utilities.maxWidthMobile} relative`}>
                            <div className={style.paddingContainer}>
                                <div className={styleMobile.gridResultFiltersOut}>
                                    <div className={`${cssStyle.fontSubTitle}`}>
                                        {textResultSection}
                                    </div>
                                    <button onClick={handleClick}
                                            className={`${utilities.gridMaxContent2} gap-2 items-center`}>
                                        <div className={`${utilities.fontPrimaryText} ${styleMobile.fontSize}`}>
                                            Filtros
                                        </div>
                                        <div className={"h-3 w-4 relative"}>
                                            <Image layout={"fill"}
                                                   src={GlobalConst.sourceImages.engineIcon} alt={""}/>
                                        </div>
                                    </button>
                                </div>

                                <div className={style.gridResult}>
                                    {dropDownMobile}
                                </div>
                                {buttonsNavegationMobile}
                            </div>
                        </div>
                    }
                </div>
            </DefaultLayoutMobile>
            :
            <DefaultLayoutDesktop isDarkMode={isDarkMode} isLogged={false} darkModeToggle={darkModeToggle}>
                <div className={`${cssStyle.bg} ${utilities.maxWidthBodyContentSpix}`}>
                    <div className={`${cssStyle.gridFilterDesktop}`}>
                        <div className={`${cssStyle.mainContainer} ${cssStyle.bgInfo}`}>
                            {
                                <MainContainerFilters listPrincipalFilter={categoryPrincipalFilter}
                                                      listCategoryFilter={categoryFilterRest}
                                                      isDarkMode={isDarkMode}
                                                      isOpenFilter={isOpenFilters}

                                                      isCategory={isCategory} isDisplayCategory={isDisplayCategory}
                                                      isSubCategory={isSubCategory}
                                                      isDisplaySubCategory={isDisplaySubCategory}
                                                      IsPrincipalFill={isPrincipalFill}
                                                      isDisplayPrincipalFill={isDisplayPrincipalFill}
                                                      isAdvancedFilter={isAdvancedFilter}
                                                      isDisplayAdvancedFilter={isDisplayAdvancedFilter}/>
                            }
                        </div>
                        <div>
                            <div className={style.paddingLeftResult}>
                                <div className={`${cssStyle.fontTitle} ${style.styleTitleResult}`}>
                                    {textResultSection}
                                </div>
                                <div className={cssStyle.gridSearch}>
                                    {dropDown}
                                </div>
                            </div>
                            {buttonsNavegation}
                        </div>
                    </div>
                </div>
            </DefaultLayoutDesktop>
    )

    function getCssStyle() {
        return {
            bg: isDarkMode ? utilities.bgBodyDarkMode : utilities.bgBodyNormal,
            bgInfo: isDarkMode ?
                isOpenFilters ? utilities.bgDarkModeInfo : ""
                :
                utilities.bgNormalInfo,
            gridFilterDesktop: isOpenFilters ? style.gridPrincipal : style.gridPrincipalClose,
            mainContainer: isDarkMode ? style.mainContainerPropertiesDarkMode : style.mainContainerProperties,
            gridSearch: isOpenFilters ? style.gridSearchOpen : style.gridSearchClose,
            fontTitle: isDarkMode ? utilities.fontTitleDarkMode : utilities.fontTitle,
            fontSubTitle: isDarkMode ? utilities.fontSubTitleDarkMode : utilities.fontSubTitle,
        }
    }
}