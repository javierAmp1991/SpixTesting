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
    DropDownNewSearch,
    News,
} from "../dataDemo/data";
import NewsSearchDesktop from "../components/Desktop/Search/newsSearchDesktop";
import NewsSearchMobile from "../components/Mobile/Search/newSearchMobile";
import NewSearcPrincipalDesktop from "../components/Desktop/Search/newSearcPrincipalDesktop";
import PublicityView from "../components/Desktop/CRM/publicityView";
import {PublicityData} from "../dataDemo/data";
import PublicityViewMobile from "../components/Mobile/CRM/publicityViewMobile";
import NewSearcPrincipalMobile from "../components/Mobile/Search/newSearcPrincipalMobile";
import {BaseEventCard} from "../dataDemo/EventView/eventVerticalView";
import {MoreOfferSearch} from "../dataDemo/EventView/eventVerticalView";
import LayoutDropDownMobile from "../components/Mobile/Layouts/layoutDropDownMobile";
import EventHorizontalView from "../components/Mobile/Events/eventHorizontalView";
import LayoutCarrouselMobile from "../components/Mobile/Layouts/layoutCarrousel.Mobile";

let AntSig: string[] = ["Anterior", "Siguiente"]

export default function ReviewSearch() {
    const newSearchList: News[] = DropDownNewSearch.listNews
    const listPublicity: BaseEventCard[] = MoreOfferSearch.list;
    let [isDarkMode, setIsDarkModeP] = React.useState(false);
    let [isDisplayResult, setIsDisplayResult] = useState(true);
    let [isOpenFilters, setIsOpenFilters] = useState(true);
    /*const darkModeToggle = () => setIsDarkModeP(isDarkMode = !isDarkMode);*/
    const darkModeToggle = null
    const handleClick = () => setIsDisplayResult(isDisplayResult = !isDisplayResult);
    const isSmallDown = useMediaQuery('(max-width: 1280px)');
    let cssStyle = getCssStyle();
    const newsText: string = "Noticias";
    const nextEventsText: string = "Proximos Eventos";
    const publicity: string = PublicityData.publicityList[0]
    const publicity1: string = PublicityData.publicityList[1]
    let [displayNextEvent, setDisplayNextEvent] = useState(true)
    const handleDisplayNextEvent = () => setDisplayNextEvent(displayNextEvent = !displayNextEvent)

    /*    const isCategory: boolean = true;
        const isDisplayCategory: boolean = true;
        const isSubCategory: boolean = false;
        const isDisplaySubCategory: boolean = true;
        const isPrincipalFill: boolean = true;
        const isDisplayPrincipalFill: boolean = true;
        const isAdvancedFilter: boolean = false;
        const isDisplayAdvancedFilter: boolean = false;*/

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
                                {/*<div className={styleMobile.gridResultFiltersOut}>
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
                                </div>*/}
                                {
                                    displayNextEvent &&
                                    <div className={"mt-5"}>
                                        <div className={style.gridResult}>
                                            <div className={"w-full"}>
                                                <div className={`${utilities.fontTitleDesktop} mb-5`}>
                                                    Noticias del dia
                                                </div>
                                                <div>
                                                    <NewSearcPrincipalMobile item={newSearchList[0]}/>
                                                </div>
                                            </div>
                                            <PublicityViewMobile linkImage={publicity}/>
                                            <div className={"w-full"}>
                                                <div className={`${utilities.fontTitleDesktop} mb-5`}>
                                                    Noticias Destacadas
                                                </div>
                                                {/*<LayoutCarrouselMobile gapLayout={16}>
                                                    {
                                                        newSearchList.map((item, index) =>
                                                            index >= 0 && index <= 2 &&
                                                            <div className={"w-72"}>
                                                                <NewsSearchMobile isSubtitle={true}
                                                                                  item={item}/>
                                                            </div>)
                                                    }
                                                </LayoutCarrouselMobile>*/}

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
                                    </div>
                                    /*:
                                    <>
                                        <LayoutDropDownMobile gapLayout={10}>
                                            {
                                                listPublicity.map(item =>
                                                    <EventHorizontalView darkModeState={isDarkMode} item={item}
                                                                         key={item.Id}/>
                                                )
                                            }
                                        </LayoutDropDownMobile>
                                    </>*/
                                }
                            </div>
                        </div>
                    }
                </div>
            </DefaultLayoutMobile>
            :
            <DefaultLayoutDesktop isDarkMode={isDarkMode} isLogged={false} darkModeToggle={darkModeToggle}>
                <div className={style.layoutNews}>
                    <div className={style.paddingLeftResultNews}>
                        {/*<div className={`${cssStyle.fontTitle} ${style.styleTitleResult}`}>
                                    {newsText}
                                </div>*/}
                        <div className={style.PrincipalGridNews}>
                            <div>
                                <div className={`${utilities.fontTitleDesktop} mb-7`}>
                                    Noticias del dia
                                </div>
                                <div className={style.gridPrinciaplNews}>
                                    <NewSearcPrincipalDesktop item={newSearchList[0]}/>
                                    <NewSearcPrincipalDesktop item={newSearchList[2]}/>
                                </div>
                            </div>
                            <PublicityView linkImage={publicity}/>
                            <div>
                                <div className={`${utilities.fontTitleDesktop} mb-7`}>
                                    Noticias destacadas
                                </div>
                                <div className={style.gridNews3}>
                                    {
                                        newSearchList.map((item, index) =>
                                            index >= 1 && index <= 3 &&
                                            <NewsSearchDesktop isDarkMode={isDarkMode} isSubtitle={true}
                                                               key={item.Id} item={item}/>
                                        )
                                    }
                                </div>
                            </div>
                            <PublicityView linkImage={publicity1}/>

                            <div className={style.gridNews4}>
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
                {/* <LayoutSearchDesktop>
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
                                <div className={`${cssStyle.fontTitle} ${style.styleTitleResult}`}>
                                    {newsText}
                                </div>
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
                </LayoutSearchDesktop>*/}
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