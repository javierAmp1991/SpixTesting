import style from "/styles/Desktop/Search/layoutPrincipal.module.css"
import styleMobile from "/styles/Mobile/Search/layoutPrincipalFilterMobile.module.css"
import utilities from "/styles/utilities.module.css";
import {CategoryFilter, SuperCategoryEntertaiment, SuperCategoryFilter} from "../dataDemo/data"
import EventVerticalView from "../components/Desktop/EventsView/eventVerticalView";
import LayoutButtonNavegation from "../components/Desktop/Layouts/layoutButtonNavegation";
import ButtonNavegation from "../components/Desktop/Misc/buttonNavegation";
import MainContainerFilters from "../components/Desktop/Search/mainContainerFilters";
import React, {useState} from "react";
import {useMediaQuery} from "./index";
import {PublicityData} from "../dataDemo/data";
import EventHorizontalView from "../components/Mobile/Events/eventHorizontalView";
import LayoutPrincipalFilterMobile from "../components/Mobile/Search/layoutPrincipalFilterMobile";
import ButtonNavegationMobile from "../components/Mobile/Misc/buttonNavegationMobile";
import Image from "next/image";
import {GlobalConst} from "../public/globalConst";
import DefaultLayoutMobile from "../components/Mobile/defaultLayoutMobile";
import DefaultLayoutDesktop from "../components/Desktop/defaultLayoutDesktop";
import {CategoryPrincipalFilters} from "../dataDemo/data";
import {BaseEventCard, DropDownSearch} from "../dataDemo/EventView/eventVerticalView";
import {FeaturedListSearch, BaseFeaturedView, PrincipalFeaturedSearch} from "../dataDemo/EventView/featureView";
import FeaturedViewDesktop from "../components/Desktop/EventsView/featuredView";
import PublicityView from "../components/Desktop/CRM/publicityView";
import FeaturedViewPrincipal from "../components/Desktop/Search/featuredViewPrincipal";
import PublicityNewsMobile from "../components/Mobile/CRM/publicityNewsMobile";
import PublicityViewMobile from "../components/Mobile/CRM/publicityViewMobile";
import FeaturedViewMobile from "../components/Mobile/Events/featuredView";
import FeaturedViewPrincipalMobile from "../components/Mobile/Search/featuredViewPrincipal";
import LayoutSearchDesktop from "../components/Desktop/layoutSearchDesktop";
import OrderBy from "../components/Desktop/Search/orderBy";

let AntSig: string[] = ["Anterior", "Siguiente"]

export default function FeaturedSearch() {
    const listPrincipalFilters: CategoryFilter[] = CategoryPrincipalFilters.listPrinciaplFilters;
    const categoryFilterRest: SuperCategoryFilter[] = SuperCategoryEntertaiment.listSuperCat;
    let [isDarkMode, setIsDarkModeP] = React.useState(false);
    let [isDisplayResult, setIsDisplayResult] = useState(true);
    let [isOpenFilters, setIsOpenFilters] = useState(true);
    /*const darkModeToggle = () => setIsDarkModeP(isDarkMode = !isDarkMode);*/
    const darkModeToggle = null
    const handleClick = () => setIsDisplayResult(isDisplayResult = !isDisplayResult);
    const isSmallDown = useMediaQuery('(max-width: 1280px)');
    let cssStyle = getCssStyle();
    const isVertical: boolean = false;
    const publicity: string = PublicityData.publicityList[0]
    const publicity1: string = PublicityData.publicityList[1]
    const featuredText: string = "Destacados";

    const isCategory: boolean = true;
    const isDisplayCategory: boolean = true;
    const isSubCategory: boolean = true;
    const isSubCategoryMobile: boolean = false;
    const isDisplaySubCategory: boolean = true;
    const isPrincipalFill: boolean = true;
    const isDisplayPrincipalFill: boolean = true;
    const isAdvancedFilter: boolean = true;
    const isDisplayAdvancedFilter: boolean = false;
    const isReturnActive: boolean = true


    //region desktop Components
    let dropDownMisc =
        DropDownSearch.list.map((item: BaseEventCard,) =>
            <EventVerticalView key={item.Id} darkModeState={isDarkMode} item={item}/>
        )
    /*let dropDown =
        FeaturedListSearch.list.map((item: BaseFeaturedView) =>
            <FeaturedViewDesktop key={item.Id} darkModeState={isDarkMode} item={item}/>
        )
*/
    let dropDownFeatured =
        FeaturedListSearch.list.map((item: BaseFeaturedView, index) =>
            index >= 0 && index <= 1 &&
            <FeaturedViewDesktop itemsShow={0} key={item.Id} darkModeState={isDarkMode} item={item}/>
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
    let dropDownMobile = DropDownSearch.list.map((item: BaseEventCard) =>
        <EventHorizontalView darkModeState={isDarkMode} item={item} key={item.Id}/>
    )

    let dropDownFeaturedMobile =
        FeaturedListSearch.list.map((item: BaseFeaturedView, index) =>
            index >= 0 && index <= 1 &&
            <FeaturedViewMobile key={item.Id} darkModeState={isDarkMode} item={item}/>
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

                    <LayoutPrincipalFilterMobile listPrincipalFilter={listPrincipalFilters}
                                                 listCategoryFilter={categoryFilterRest}
                                                 handleOpenFilter={handleClick}
                                                 isDarkMode={isDarkMode}
                                                 isOpenFilter={isDisplayResult}
                                                 isCategory={isCategory} isDisplayCategory={isDisplayCategory}
                                                 isSubCategory={isSubCategoryMobile}
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
                                        Resultados de {"Destacados"}
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
                                    <FeaturedViewPrincipalMobile item={PrincipalFeaturedSearch.item}/>
                                    <PublicityViewMobile linkImage={publicity}/>
                                    {dropDownFeaturedMobile}
                                    <PublicityViewMobile linkImage={publicity1}/>
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
                <LayoutSearchDesktop>
                    <>
                        <div className={`${cssStyle.mainContainer}`}>
                            {
                                <MainContainerFilters listPrincipalFilter={listPrincipalFilters}
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
                                {/*<div className={`${cssStyle.fontTitle} ${style.styleTitleResult}`}>
                                    {featuredText}
                                </div>*/}
                                <OrderBy listPrincipalFilter={listPrincipalFilters} isDarkMode={isDarkMode}/>
                                <div className={style.PrincipalGridNews}>
                                    <FeaturedViewPrincipal item={PrincipalFeaturedSearch.item}/>
                                    <PublicityView linkImage={publicity}/>

                                    <div className={style.gridFeaturedSearch}>
                                        {dropDownFeatured}
                                    </div>

                                    <PublicityView linkImage={publicity1}/>
                                    <div className={style.gridSearchOpen}>
                                        {dropDownMisc}
                                    </div>
                                </div>
                            </div>
                            {buttonsNavegation}
                        </div>
                    </>
                </LayoutSearchDesktop>
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