import DefaultLayoutDesktop from "../components/Desktop/defaultLayoutDesktop";
import DefaultLayoutMobile from "../components/Mobile/defaultLayoutMobile";
import style from "/styles/Desktop/Search/layoutPrincipal.module.css"
import styleMobile from "/styles/Mobile/Search/layoutPrincipalFilterMobile.module.css"
import utilities from "/styles/utilities.module.css"
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
    SuperCategoryFilter
} from "../dataDemo/data";
import ReviewSearchViewMobile from "../components/Mobile/Search/reviewSearchViewMobile";
import ReviewSearchViewDesktope from "../components/Desktop/Search/reviewSearchViewDesktop";
import {CategoryPrincipalFiltersReview} from "../dataDemo/data";
import LayoutSearchDesktop from "../components/Desktop/layoutSearchDesktop";
import OrderBy from "../components/Desktop/Search/orderBy";

let AntSig: string[] = ["Anterior", "Siguiente"]

export default function ReviewSearch() {
    const principalFilterReview: CategoryFilter[] = CategoryPrincipalFiltersReview.listPrinciaplFiltersReview;
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

    const isCategory: boolean = true;
    const isDisplayCategory: boolean = true;
    const isSubCategory: boolean = false;
    const isDisplaySubCategory: boolean = true;
    const isPrincipalFill: boolean = true;
    const isDisplayPrincipalFill: boolean = true;
    const isAdvancedFilter: boolean = false;
    const isDisplayAdvancedFilter: boolean = false;
    const isReturnActive: boolean = true

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

                    {
                        isDisplayResult &&
                        <div className={`${utilities.maxWidthMobile} relative`}>
                            <div>
                                <div className={styleMobile.gridResultFiltersOut}>
                                    <div className={`${cssStyle.fontSubTitle} px-5`}>
                                        Rese??as
                                    </div>
                                    {
                                        isReview &&
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
                                    }
                                </div>
                                <div className={style.gridResult}>
                                    {
                                        reviewSectionList.map((item, index) =>
                                            <ReviewSearchViewMobile key={index} reviewSection={item}/>
                                        )
                                    }
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
                                {/*<div className={`${cssStyle.fontTitle} ${style.styleTitleResult}`}>
                                    Rese??as
                                </div>*/}
                                <OrderBy listPrincipalFilter={principalFilterReview} isDarkMode={isDarkMode}/>
                                <div className={style.gridReviewDesktop}>
                                    {
                                        reviewSectionList.map((item, index) =>
                                            <ReviewSearchViewDesktope key={index} reviewSection={item}/>
                                        )
                                    }
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