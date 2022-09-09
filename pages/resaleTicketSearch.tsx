import DefaultLayoutMobile from "../components/Mobile/defaultLayoutMobile";
import DefaultLayoutDesktop from "../components/Desktop/defaultLayoutDesktop";
import style from "/styles/Desktop/Search/layoutPrincipal.module.css";
import styleMobile from "/styles/Mobile/Search/layoutPrincipalFilterMobile.module.css";
import utilities from "/styles/utilities.module.css";
import React, {useState} from "react";
import {useMediaQuery} from "./index";
import LayoutPrincipalFilterMobile from "../components/Mobile/Search/layoutPrincipalFilterMobile";
import Image from "next/image";
import {GlobalConst} from "../public/globalConst";
import MainContainerFilters from "../components/Desktop/Search/mainContainerFilters";
import LayoutButtonNavegation from "../components/Desktop/Layouts/layoutButtonNavegation";
import ButtonNavegation from "../components/Desktop/Misc/buttonNavegation";
import ButtonNavegationMobile from "../components/Mobile/Misc/buttonNavegationMobile";
import {
    CategoryFilter,
    SuperCategoryReview,
    reviewSearch,
    ReviewSearchData,
    SuperCategoryFilter,
    EventResale,
    CategoryPrincipalFilterTicket,
    ResaleProduct
} from "../dataDemo/data";
import ResaleEventDesktop from "../components/Desktop/Search/resaleEventDesktop";
import ResaleEventMobile from "../components/Mobile/Search/resaleEventMobile";

let AntSig: string[] = ["Anterior", "Siguiente"];

export default function ResaleTicketSearch() {
    const resaleSearchList: ResaleProduct[] = EventResale.eventResale.ListResalePack
    const resaleBanner: string = EventResale.eventResale.Banner
    const resaleTitle: string = EventResale.eventResale.Title
    const resaleSubtile: string = EventResale.eventResale.Subtitle
    const resaleRating: number = EventResale.eventResale.Rating
    const principalFilterReview: CategoryFilter[] = CategoryPrincipalFilterTicket.filters;
    const categoryFilterRest: SuperCategoryFilter[] = SuperCategoryReview.listSuperCat
    const reviewSectionList: reviewSearch[] = ReviewSearchData.listReviewSearch;
    let [isDarkMode, setIsDarkModeP] = React.useState(false);
    let [isDisplayResult, setIsDisplayResult] = useState(true);
    let [isOpenFilters, setIsOpenFilters] = useState(true);
    /*const darkModeToggle = () => setIsDarkModeP(isDarkMode = !isDarkMode);*/
    const darkModeToggle = null
    const handleClick = () => setIsDisplayResult(isDisplayResult = !isDisplayResult);
    const isSmallDown = useMediaQuery('(max-width: 768px)');
    let cssStyle = getCssStyle();
    const isReview: boolean = false;

    const isCategory: boolean = false;
    const isDisplayCategory: boolean = false;
    const isSubCategory: boolean = false;
    const isDisplaySubCategory: boolean = false;
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
                    <div className={style.gridHeaderResult}>
                        <div className={styleMobile.sizeBanner}>
                            <Image layout={"fill"} src={resaleBanner} alt={""}/>
                        </div>
                        <div className={style.paddingInfo}>
                            <div className={utilities.fontTitle}>
                                {resaleTitle}
                            </div>
                            <div className={`${styleMobile.fontSubTitle} mt-3`}>
                                {resaleSubtile}
                            </div>
                            <div className={styleMobile.gridDisplayFilter}>
                                <div className={`${utilities.fontPrimaryText} ${styleMobile.ratingStarProp}`}>
                                    <Image layout={"fill"} src={GlobalConst.sourceImages.ratingNew} alt={""}/>
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
                        </div>
                    </div>
                    {
                        isDisplayResult ?
                            <div className={"relative"}>
                                <div className={style.paddingContainer}>
                                    <div className={styleMobile.gridResaleEventMobile}>
                                        {
                                            resaleSearchList.map((item) =>
                                                <ResaleEventMobile key={item.Id} item={item}/>
                                            )
                                        }
                                    </div>
                                    {buttonsNavegationMobile}
                                </div>
                            </div>
                            :
                            <LayoutPrincipalFilterMobile listPrincipalFilter={principalFilterReview}
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
                                                         isDisplayAdvancedFilter={isDisplayAdvancedFilter}/>
                    }
                </div>
            </DefaultLayoutMobile>
            :
            <DefaultLayoutDesktop isDarkMode={isDarkMode} isLogged={false} darkModeToggle={darkModeToggle}>
                <div className={`${cssStyle.bg} ${utilities.maxWidthBodyContentSpix}`}>
                    <div className={`${cssStyle.gridFilterDesktop}`}>
                        <div className={`${cssStyle.mainContainer} ${cssStyle.bgInfo}`}>
                            {
                                <MainContainerFilters listCategoryFilter={categoryFilterRest}
                                                      listPrincipalFilter={principalFilterReview}
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
                                <div className={style.gridHeaderResult}>
                                    <div className={style.sizeBanner}>
                                        <Image layout={"fill"} src={resaleBanner} alt={""}/>
                                    </div>
                                    <div>
                                        <div className={utilities.fontTitle}>
                                            {resaleTitle}
                                        </div>
                                        <div className={`${style.fontSubTitle} mt-3`}>
                                            {resaleSubtile}
                                        </div>
                                        <div
                                            className={`${utilities.fontPrimaryText} ${style.ratingStarProp} mt-3`}>
                                            <Image layout={"fill"} src={GlobalConst.sourceImages.reviewStars} alt={""}/>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.gridResaleEvents}>
                                    {
                                        resaleSearchList.map((item) =>
                                            <ResaleEventDesktop key={item.Id} item={item}/>
                                        )
                                    }
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