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
import {ListProducts, ListProductsExtra} from "../dataDemo/data";
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
import ProductViewDesk from "../components/Desktop/Misc/productViewDesk";
import RatingStar from "../components/Mobile/Misc/ratingStar";
import RatingStarDesktop from "../components/Desktop/Misc/ratingStarDesktop";
import LayoutSearchDesktop from "../components/Desktop/layoutSearchDesktop";
import OrderBy from "../components/Desktop/Search/orderBy";
import ProductViewSquare from "../components/Desktop/Misc/productViewSquare";
import OrderByMobile from "../components/Mobile/Search/orderBy";
import ProductViewSquareMobile from "../components/Mobile/Misc/productViewSquare";

let AntSig: string[] = ["Anterior", "Siguiente"];

export default function ResaleTicketSearch() {
    const resaleSearchList: ResaleProduct[] = EventResale.eventResale.ListResalePack
    const resaleBanner: string = "/images/banner2.jpg"
    const resaleTitle: string = "Star Wars Sinfonico";
    const resaleSubtile: string = "Orquesta sinfonica 2022";
    const resaleRating: number = 4;
    const principalFilterReview: CategoryFilter[] = CategoryPrincipalFilterTicket.filters;
    const categoryFilterRest: SuperCategoryFilter[] = SuperCategoryReview.listSuperCat
    const reviewSectionList: reviewSearch[] = ReviewSearchData.listReviewSearch;
    let [isDarkMode, setIsDarkModeP] = React.useState(false);
    let [isDisplayResult, setIsDisplayResult] = useState(true);
    let [isOpenFilters, setIsOpenFilters] = useState(true);
    /*const darkModeToggle = () => setIsDarkModeP(isDarkMode = !isDarkMode);*/
    const darkModeToggle = null
    const handleClick = () => setIsDisplayResult(isDisplayResult = !isDisplayResult);
    const isSmallDown = useMediaQuery('(max-width: 1280px)');
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
    const isReturnActive: boolean = false;

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
                <div className={`${utilities.maxWidthMobile} relative`}>
                    <div className={style.paddingContainer}>
                        <OrderByMobile listPrincipalFilter={principalFilterReview} isDarkMode={isDarkMode}/>
                        <div className={styleMobile.gridProductSelected}>
                            {
                                ListProducts.listProducts.map((item) =>
                                    <ProductViewSquareMobile size={null} key={item.Name} item={item} isDisplayOffer={true}/>
                                )
                            }
                        </div>
                    </div>
                </div>
                {/*<div className={cssStyle.bg}>
                    <div className={styleMobile.gridHeaderResult}>
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
                                <div className={style.gridStarNumberMobile}>
                                    <div className={`${utilities.fontPrimaryText} ${styleMobile.ratingStarProp}`}>
                                        <Image layout={"fill"} src={GlobalConst.sourceImages.ratingNew} alt={""}/>
                                    </div>
                                    <span className={`${utilities.font12} ${utilities.fontSecundaryText}`}>
                                        ({resaleRating})
                                    </span>
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
                            <div className={`${utilities.maxWidthMobile} relative`}>
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
                                                         isDisplayAdvancedFilter={isDisplayAdvancedFilter}
                                                         isReturnActive={isReturnActive}/>
                    }
                </div>*/}
            </DefaultLayoutMobile>
            :
            <DefaultLayoutDesktop isDarkMode={isDarkMode} isLogged={false} darkModeToggle={darkModeToggle}>
                <div className={style.layoutOfferSelected}>
                    <OrderBy listPrincipalFilter={principalFilterReview} isDarkMode={isDarkMode}/>
                    <div className={style.gridProductOffer}>
                        {
                            ListProducts.listProducts.map((item, index) =>
                                <ProductViewSquare key={index} item={item} size={null}
                                                   isDisplayOffer={true}/>)
                        }
                    </div>
                    {buttonsNavegation}
                </div>

                {/*<LayoutSearchDesktop>
                    <>
                        <div className={`${cssStyle.mainContainer}`}>
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
                            <div className={style.paddingLeftResultResale}>
                                <div className={style.gridHeaderResult}>
                                    <div className={style.sizeBanner}>
                                        <Image layout={"fill"} src={resaleBanner} alt={""}/>
                                    </div>
                                    <div>
                                        <div className={utilities.fontTitleDesktop}>
                                            {resaleTitle}
                                        </div>
                                        <div className={`${utilities.fontSubtitleDesktop} mt-3`}>
                                            {resaleSubtile}
                                        </div>
                                        <div className={"mt-3"}>
                                            <RatingStarDesktop item={4}/>
                                        </div>
                                        <div className={style.gridStarNumber}>
                                            <div className={`${utilities.fontPrimaryText} ${style.ratingStarProp}`}>
                                                <Image layout={"fill"} src={GlobalConst.sourceImages.ratingNew}
                                                       alt={""}/>
                                            </div>
                                            <span className={`${utilities.font12} ${utilities.fontSecundaryText}`}>
                                                ({resaleRating})
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.gridProductOffer}>
                                    {
                                        ListProducts.listProducts.map((item, index) =>
                                            <ProductViewDesk key={index} item={item} size={null}
                                                             isDisplayOffer={true}/>)
                                    }
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