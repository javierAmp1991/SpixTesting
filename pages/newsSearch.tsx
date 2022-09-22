import DefaultLayoutDesktop from "../components/Desktop/defaultLayoutDesktop";
import DefaultLayoutMobile from "../components/Mobile/defaultLayoutMobile";
import style from "/styles/Desktop/Search/layoutPrincipal.module.css"
import styleMobile from "/styles/Mobile/Search/layoutPrincipalFilterMobile.module.css"
import utilities from "/styles/utilities.module.css"
import React, {useState} from "react";
import {useMediaQuery} from "./index";
import LayoutButtonNavegation from "../components/Desktop/Layouts/layoutButtonNavegation";
import ButtonNavegation from "../components/Desktop/Misc/buttonNavegation";
import ButtonNavegationMobile from "../components/Mobile/Misc/buttonNavegationMobile";
import {
    CategoryFilter,
    SuperCategoryNews,
    reviewSearch,
    ReviewSearchData,
    SuperCategoryFilter,
    DropDownNewSearch,
    News,
    CategoryPrincipalFiltersNews
} from "../dataDemo/data";
import NewsSearchDesktop from "../components/Desktop/Search/newsSearchDesktop";
import NewsSearchMobile from "../components/Mobile/Search/newSearchMobile";
import NewSearcPrincipalDesktop from "../components/Desktop/Search/newSearcPrincipalDesktop";
import PublicityView from "../components/Desktop/CRM/publicityView";
import {PublicityData} from "../dataDemo/data";
import PublicityViewMobile from "../components/Mobile/CRM/publicityViewMobile";
import NewSearcPrincipalMobile from "../components/Mobile/Search/newSearcPrincipalMobile";
import {listPublicityNews1} from "../dataDemo/search/searchData";
import EventVerticalView from "../components/Desktop/EventsView/eventVerticalView";
import {BaseEventCard} from "../dataDemo/EventView/eventVerticalView";
import EventVerticalViewMobile from "../components/Mobile/Events/eventVerticalViewMobile";
import {MoreOfferSearch} from "../dataDemo/EventView/eventVerticalView";
import LayoutDropDownMobile from "../components/Mobile/Layouts/layoutDropDownMobile";
import EventHorizontalView from "../components/Mobile/Events/eventHorizontalView";
import LayoutSearchDesktop from "../components/Desktop/layoutSearchDesktop";

let AntSig: string[] = ["Anterior", "Siguiente"]

export default function ReviewSearch() {
    const newSearchList: News[] = DropDownNewSearch.listNews
    const principalFilterReview: CategoryFilter[] = CategoryPrincipalFiltersNews.listPrinciaplFilters;
    const categoryFilterRest: SuperCategoryFilter[] = SuperCategoryNews.listSuperCat;
    const reviewSectionList: reviewSearch[] = ReviewSearchData.listReviewSearch;
    const listPublicity: BaseEventCard[] = MoreOfferSearch.list;
    let [isDarkMode, setIsDarkModeP] = React.useState(false);
    let [isDisplayResult, setIsDisplayResult] = useState(true);
    let [isOpenFilters, setIsOpenFilters] = useState(true);
    /*const darkModeToggle = () => setIsDarkModeP(isDarkMode = !isDarkMode);*/
    const darkModeToggle = null
    const handleClick = () => setIsDisplayResult(isDisplayResult = !isDisplayResult);
    const isSmallDown = useMediaQuery('(max-width: 1280px)');
    let cssStyle = getCssStyle();
    const isReview: boolean = false;
    const newsText: string = "Noticias";
    const nextEventsText: string = "Proximos Eventos";
    const publicity: string = PublicityData.publicityList[0]
    const publicity1: string = PublicityData.publicityList[1]
    let [displayNextEvent, setDisplayNextEvent] = useState(true)
    const handleDisplayNextEvent = () => setDisplayNextEvent(displayNextEvent = !displayNextEvent)
    const isVertical: boolean = false;

    const isCategory: boolean = true;
    const isDisplayCategory: boolean = true;
    const isSubCategory: boolean = false;
    const isDisplaySubCategory: boolean = true;
    const isPrincipalFill: boolean = true;
    const isDisplayPrincipalFill: boolean = true;
    const isAdvancedFilter: boolean = false;
    const isDisplayAdvancedFilter: boolean = false;

    //region desktop Components

    let buttonsNavegation = <LayoutButtonNavegation>
        {
            AntSig.map(item =>
                <ButtonNavegation isDarkMode={isDarkMode} key={item} item={item}/>
            )
        }
    </LayoutButtonNavegation>
    //endregion
    //region mobile Components

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

                    {/*<LayoutPrincipalFilterMobile listPrincipalFilter={principalFilterReview}
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
                                                 isDisplayAdvancedFilter={isDisplayAdvancedFilter}/>*/}

                    {
                        isDisplayResult &&
                        <div className={`${utilities.maxWidthMobile} relative`}>
                            <div className={style.paddingContainer}>
                                <div className={styleMobile.gridResultFiltersOut}>
                                    <div className={styleMobile.gridNewNext}>
                                        {
                                            displayNextEvent ?
                                                <div className={`${cssStyle.fontSubTitle}`}>
                                                    {newsText}
                                                </div>
                                                :
                                                <div className={`${cssStyle.fontSubTitle}`}>
                                                    {nextEventsText}
                                                </div>
                                        }
                                        {
                                            displayNextEvent ?
                                                <button onClick={handleDisplayNextEvent}
                                                        className={utilities.fontSecundaryText}>
                                                    {nextEventsText}
                                                </button>
                                                :
                                                <button onClick={handleDisplayNextEvent}
                                                        className={utilities.fontSecundaryText}>
                                                    {newsText}
                                                </button>
                                        }
                                    </div>
                                </div>
                                {
                                    displayNextEvent ?
                                        <>
                                            <div className={style.gridResult}>
                                                <div>
                                                    <NewSearcPrincipalMobile item={newSearchList[0]}/>
                                                </div>
                                                <PublicityViewMobile linkImage={publicity}/>
                                                <div>
                                                    <NewsSearchMobile isSubtitle={true} item={newSearchList[1]}/>
                                                </div>
                                                <PublicityViewMobile linkImage={publicity1}/>
                                                <div className={styleMobile.gridDropDownNew}>
                                                    {
                                                        newSearchList.map((item, index) =>
                                                            index > 1 &&
                                                            <NewsSearchMobile isSubtitle={false} key={item.Id}
                                                                              item={item}/>
                                                        )
                                                    }
                                                </div>
                                            </div>
                                            {buttonsNavegationMobile}
                                        </>
                                        :
                                        <>
                                            <LayoutDropDownMobile gapLayout={10}>
                                                {
                                                    listPublicity.map(item =>
                                                        <EventHorizontalView darkModeState={isDarkMode} item={item}
                                                                             key={item.Id}/>
                                                    )
                                                }
                                            </LayoutDropDownMobile>
                                        </>
                                }
                            </div>
                        </div>
                    }
                </div>
            </DefaultLayoutMobile>
            :
            <DefaultLayoutDesktop isDarkMode={isDarkMode} isLogged={false} darkModeToggle={darkModeToggle}>
                <LayoutSearchDesktop>
                    <>
                        <div className={style.gridPublicityNews}>
                            <div className={`${utilities.fontTitle}`}>
                                Proximos Eventos
                            </div>
                            {
                                listPublicity.map((item) =>
                                    <EventVerticalView key={item.Id} item={item} darkModeState={isDarkMode}/>
                                )
                            }
                        </div>
                        <div>
                            <div className={style.paddingLeftResultNews}>
                                {/*<div className={`${cssStyle.fontTitle} ${style.styleTitleResult}`}>
                                    {newsText}
                                </div>*/}
                                <div className={style.PrincipalGridNews}>
                                    <NewSearcPrincipalDesktop item={newSearchList[0]}/>
                                    <PublicityView linkImage={publicity}/>

                                    <div className={style.gridNews2}>
                                        {
                                            newSearchList.map((item, index) =>
                                                index >= 1 && index <= 2 &&
                                                <NewsSearchDesktop isDarkMode={isDarkMode} isSubtitle={true}
                                                                   key={item.Id} item={item}/>
                                            )
                                        }
                                    </div>
                                    <PublicityView linkImage={publicity1}/>

                                    <div className={style.gridNews3}>
                                        {
                                            newSearchList.map((item, index) =>
                                                index > 2 &&
                                                <NewsSearchDesktop isDarkMode={isDarkMode} isSubtitle={false}
                                                                   key={item.Id} item={item}/>
                                            )
                                        }
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
                isOpenFilters && utilities.bgDarkModeInfo
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