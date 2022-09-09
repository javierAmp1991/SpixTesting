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

let AntSig: string[] = ["Anterior", "Siguiente"]

export default function ReviewSearch() {
    const newSearchList: News[] = DropDownNewSearch.listNews
    const principalFilterReview: CategoryFilter[] = CategoryPrincipalFiltersNews.listPrinciaplFilters;
    const categoryFilterRest: SuperCategoryFilter[] = SuperCategoryNews.listSuperCat
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
    const newsText: string = "Noticias";
    const publicity: string = PublicityData.publicityList[0]
    const publicity1: string = PublicityData.publicityList[1]

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

                    {
                        isDisplayResult &&
                        <div className={"relative"}>
                            <div className={style.paddingContainer}>
                                <div className={styleMobile.gridResultFiltersOut}>
                                    <div className={`${cssStyle.fontSubTitle}`}>
                                        {newsText}
                                    </div>
                                    {
                                        isReview &&
                                        <button onClick={handleClick} className={`${utilities.gridMaxContent2} gap-2 items-center`}>
                                            <div className={`${utilities.fontPrimaryText} ${styleMobile.fontSize}`}>
                                                Filtros
                                            </div>
                                            <div  className={"h-3 w-4 relative"}>
                                                <Image layout={"fill"}
                                                       src={GlobalConst.sourceImages.engineIcon} alt={""}/>
                                            </div>
                                        </button>
                                    }
                                </div>
                                <div className={style.gridResult}>
                                    <div>
                                        <NewSearcPrincipalMobile item={newSearchList[0]}/>
                                    </div>
                                    <PublicityViewMobile linkImage={publicity}/>
                                    <div>
                                        <NewSearcPrincipalMobile item={newSearchList[1]}/>
                                    </div>
                                    <PublicityViewMobile linkImage={publicity1}/>
                                    <div className={styleMobile.gridDropDownNew}>
                                        {
                                            newSearchList.map((item, index) =>
                                                index > 1 &&
                                                <NewsSearchMobile key={item.Id} item={item}/>
                                            )
                                        }
                                    </div>
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
                                /*<MainContainerFilters listCategoryFilter={categoryFilterRest}
                                                      listPrincipalFilter={principalFilterReview}
                                                      isDarkMode={isDarkMode}
                                                      isOpenFilter={isOpenFilters}
                                                      isCategory={isCategory} isDisplayCategory={isDisplayCategory}
                                                      isSubCategory={isSubCategory}
                                                      isDisplaySubCategory={isDisplaySubCategory}
                                                      IsPrincipalFill={isPrincipalFill}
                                                      isDisplayPrincipalFill={isDisplayPrincipalFill}
                                                      isAdvancedFilter={isAdvancedFilter}
                                                      isDisplayAdvancedFilter={isDisplayAdvancedFilter}/>*/
                                <div className={`${utilities.fontTitle} ${style.paddingTitleNextEvent}`}>
                                    Proximos Eventos
                                </div>
                            }
                        </div>
                        <div>
                            <div className={style.paddingLeftResult}>
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
                                                <NewsSearchDesktop isSubtitle={true} key={item.Id} item={item}/>
                                            )
                                        }
                                    </div>
                                    <PublicityView linkImage={publicity1}/>

                                    <div className={style.gridNews3}>
                                        {
                                            newSearchList.map((item, index) =>
                                                index > 2 &&
                                                <NewsSearchDesktop isSubtitle={false} key={item.Id} item={item}/>
                                            )
                                        }
                                    </div>
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