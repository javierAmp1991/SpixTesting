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
import {DailyOfferData} from "../dataDemo/data";
import {
    SuperCategoryEntertaiment,
    CategoryFilter,
    CategoryPrincipalFilters,
    SuperCategoryFilter
} from "../dataDemo/data";
import {DailyOfferDeskOffer, DropDownSearch} from "../dataDemo/EventView/eventVerticalView";
import {OfferSearch} from "../dataDemo/EventView/eventVerticalView";
import ProductOfferSearch from "../components/Desktop/Search/productOfferSearch";
import EventWithBannerView from "../components/Desktop/EventsView/eventWithBannerView";
import EventWithBannerViewSearch from "../components/Desktop/EventsView/eventWithBannerViewSearch";
import EventWithBannerVertical from "../components/Desktop/EventsView/eventWithBannerVertical";
import {OfferSearchData} from "../dataDemo/data";
import LayoutSearchDesktop from "../components/Desktop/layoutSearchDesktop";
import OrderBy from "../components/Desktop/Search/orderBy";

let AntSig: string[] = ["Anterior", "Siguiente"]

export default function SearchRestaurant() {
    const categoryFilterRest: SuperCategoryFilter[] = SuperCategoryEntertaiment.listSuperCat;
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
    const textResultSection: string = "Ofertas";

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
    let dropDown = OfferSearch.list.map(item =>
        <EventVerticalView key={item.Id} item={item} darkModeState={isDarkMode}/>
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
    let dropDownMobile = OfferSearch.list.map((item) =>
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
                <LayoutSearchDesktop>
                    <>
                        <div className={`${cssStyle.mainContainer}`}>
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
                                {/*<div className={`${cssStyle.fontTitle} ${style.styleTitleResult}`}>
                                    {textResultSection}
                                </div>*/}
                                <OrderBy listPrincipalFilter={categoryPrincipalFilter} isDarkMode={isDarkMode}/>
                                <div className={style.gridSearchOpen}>
                                    {dropDown}
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