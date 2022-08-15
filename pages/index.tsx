//region importComponents
import utilities from "/styles/utilities.module.css";
import HeaderSpixDesktop from "../components/Desktop/Misc/headerSpixDesktop";
import MenuSpixDesktop from "../components/Desktop/Misc/menuSpixDesktop";
import FullBanner from "../components/Desktop/Misc/fullBanner";
import LayoutAutoCarrousel from "../components/Desktop/Layouts/layoutAutoCarrousel";
import LayoutCarrousel from "../components/Desktop/Layouts/layoutCarrousel";
import LayoutRow5 from "../components/Desktop/Layouts/layoutRow5";
import TitleSection from "../components/Desktop/Misc/titleSection";
import HomeAutoBanner from "../components/Desktop/Home/homeAutoBanner";
import HomeInformation from "../components/Desktop/Home/homeInformation";
import HomeFeatured from "../components/Desktop/Home/homeFeatured";
import EventVerticalView from "../components/Desktop/EventsView/eventVerticalView";
import PublicityView from "../components/Desktop/CRM/publicityView";
import HomeRoundedView from "../components/Desktop/Home/homeRoundedView";
import EventOnlyImageView from "../components/Desktop/EventsView/eventOnlyImageView";
import EventWithBannerView from "../components/Desktop/EventsView/eventWithBannerView";
import NewView from "../components/Desktop/CRM/newView";
import LayoutCategoryFooter from "../components/Desktop/Layouts/layoutCategoryFooter";
import HomeCategorysFooter from "../components/Desktop/Home/homeCategorysFooter";
import HomeOwnPublicityDesktop from "../components/Desktop/Home/homeOwnPublicityDesktop";
import DefaultPage from "../components/Desktop/defaulPage";
import HeaderSpixMobile from "../components/Mobile/Misc/headerSpixMobile";
import MenuSpixMobile from "../components/Mobile/Misc/menuSpixMobile";
import LayoutCarrouselMobile from "../components/Mobile/Layouts/layoutCarrousel.Mobile";
import FullBannerMobile from "../components/Mobile/Misc/fullBannerMobile";
import HomeLoggin from "../components/Mobile/Home/homeLoggin";
import EventWithBannerMobile from "../components/Mobile/Events/eventWithBannerMobile";
import HomeFeaturedMobile from "../components/Mobile/Home/homeFeatureMobile";
import EventVerticalViewMobile from "../components/Mobile/Events/eventVerticalViewMobile";
import PublicityViewMobile from "../components/Mobile/CRM/publicityViewMobile";
import HomeRoundedViewMobile from "../components/Mobile/Home/homeRoundedViewMobile";
import NewViewMobile from "../components/Mobile/CRM/newViewMobile";
import LayoutDropDownMobile from "../components/Mobile/Layouts/layoutDropDownMobile";
import EventHorizontalView from "../components/Mobile/Events/eventHorizontalView";
import HomeCategorysFooterMobile from "../components/Mobile/Home/homeCategorysFooterMobile";
import LayoutDropDown from "../components/Desktop/Layouts/layoutDropDown";
import DefaultPageMobile, {paddingAsignation} from "../components/Mobile/defaultPageMobile";
import HomeOwnPublicityMobile from "../components/Mobile/Home/homeOwnPublicityMobile";
import NavMenu from "../components/Mobile/Misc/navMenu";
import LayoutWithNavCircle from "../components/Mobile/Layouts/layoutWithNavCircle";
import {ComponentWithSpace} from "../components/Desktop/defaulPage";
import {ComponentWithSpaceMobile} from "../components/Mobile/defaultPageMobile";
import React, {useState, useEffect} from "react";
import {LayoutCarrouselDeskProp} from "../components/Desktop/Layouts/layoutCarrousel";
//endregion

//region importData
import {AtributesDataFilter, Menu} from "../dataDemo/data";
import {HomeBannerData} from "../dataDemo/data";
import {CarrouselAutoHome} from "../dataDemo/data";
import {DailyOfferData} from "../dataDemo/data";
import {FeaturedHome} from "../dataDemo/data";
import {TodayInValpo} from "../dataDemo/data";
import {PublicityData} from "../dataDemo/data";
import {Cines} from "../dataDemo/data";
import {InOffer} from "../dataDemo/data";
import {HomeNewsData} from "../dataDemo/data";
import {Restaurants} from "../dataDemo/data";
import {DropDownData} from "../dataDemo/data";
import {AtributesFooter} from "../dataDemo/data";
import {MostPopularData} from "../dataDemo/data";
import {OwnPublicityData} from "../dataDemo/data";
import {InformationHomeData} from "../dataDemo/data";
import atributes = AtributesDataFilter.atributes;
import Link from "next/link";
//endregion

const dailyOfferHeaderTitleLink: [string, string] = ["Ofertas", "Link"]
const mostPopularTleLink: [string, string] = ["Mas Populares", "Link"]
const featuredHomeTitleLink: [string, string] = ["Destacados", "Link"]
const todayInValpoTitleLink: [string, string] = ["Hoy en Valparaiso", "Link"]
const cinemasTitleLink: [string, string] = ["Cines", "Link"]
const inOfferTitleLink: [string, string] = ["En Oferta", "Link"]
const newsHomeTitleLink: [string, string] = ["Noticias", "Link"]
const restaurantsHomeTitleLink: [string, string] = ["Restaurantes", "Link"]
const spaceComponents = 40
const noSpaceComponents = 0
const spaceComponentsMobileY = 24
const paddingGeneralMobile: paddingAsignation = {pt: 24, pb: 24, pl: 12, pr: 12}
const paddingGeneralDesk: paddingAsignation = {pt: 40, pb: 40, pl: 0, pr: 0}
const paddingGeneralDeskCarrousel: paddingAsignation = {pt: 40, pb: 0, pl: 0, pr: 0}
const titleLinkPadding = spaceComponents
const gapLayout: number = 20
const noGapLayout: number = 0
const displayCarrousel = "grid"
const gridFullSpace = "100%"
const gridTemplateColum2: string = "repeat(2,1fr)"
const gridTemplateColum3: string = "repeat(3,1fr)"
const gridTemplateColum5: string = "repeat(5,1fr)"
const gridTemplateColum6: string = "repeat(6,1fr)"
const positionArrowIn: string = "5px"
const positionArrowOut: string = "-40px"
const positionArrowY: string = "calc(50% - 16px)"
let layoutPropBanner: LayoutCarrouselDeskProp = {
    Display: displayCarrousel,
    Grid: gridFullSpace,
    Gap: noGapLayout,
    Padding: noSpaceComponents,
    PositionArrowX: positionArrowIn,
    PositionArrowY: positionArrowY
}
let layoutPropFeatured: LayoutCarrouselDeskProp = {
    Display: displayCarrousel,
    Grid: gridTemplateColum2,
    Gap: gapLayout,
    Padding: spaceComponents,
    PositionArrowX: positionArrowOut,
    PositionArrowY: positionArrowY
}
let layoutPropCarrousel: LayoutCarrouselDeskProp = {
    Display: displayCarrousel,
    Grid: gridTemplateColum5,
    Gap: gapLayout,
    Padding: spaceComponents,
    PositionArrowX: positionArrowOut,
    PositionArrowY: positionArrowY
}
let layoutPropCarrouselRounded: LayoutCarrouselDeskProp = {
    Display: displayCarrousel,
    Grid: gridTemplateColum5,
    Gap: gapLayout,
    Padding: spaceComponents,
    PositionArrowX: positionArrowOut,
    PositionArrowY: positionArrowY
}
let layoutPropNews: LayoutCarrouselDeskProp = {
    Display: displayCarrousel,
    Grid: gridTemplateColum3,
    Gap: gapLayout,
    Padding: spaceComponents,
    PositionArrowX: positionArrowOut,
    PositionArrowY: positionArrowY
}
let isLogged: boolean = false

type useMediaQuery = (query: string) => boolean;

export function useMediaQuery(query) {
    const [matches, setMatches] = useState(false);
    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = () => {
            setMatches(media.matches);
        };
        media.addListener(listener);
        return () => media.removeListener(listener);
    }, [matches, query]);
    return matches;
}

export default function Index() {
    let [isDarkMode, setIsDarkModeP] = React.useState(true);
    const darkModeToggle = () => setIsDarkModeP(isDarkMode = !isDarkMode);
    const isSmallDown = useMediaQuery('(max-width: 768px)');

    //region mobile components
    let carrouselBannerMobile = <LayoutCarrouselMobile gapLayout={noGapLayout}>
        {
            HomeBannerData.listBanners.map(item =>
                <FullBannerMobile linkImage={item} key={item}/>
            )
        }
    </LayoutCarrouselMobile>
    let carrouselAutoMobile = <LayoutAutoCarrousel gapLayout={gapLayout}>
        {
            CarrouselAutoHome.listImage.map(item =>
                <HomeAutoBanner key={item} linkImage={item}/>)
        }
    </LayoutAutoCarrousel>
    let informationMobile = <HomeLoggin isDarkMode={isDarkMode}></HomeLoggin>
    let dailyOfferMobile = <TitleSection titleLink={dailyOfferHeaderTitleLink} darkModeState={isDarkMode}
                                         paddingTitle={spaceComponentsMobileY}>
        <Link href={"/eventPage"}>
            <EventWithBannerMobile displayLogoRating={true}
                                   darkModeState={isDarkMode} item={DailyOfferData.dailyOffer}/>
        </Link>
    </TitleSection>
    let mostPopularMobile = <TitleSection darkModeState={isDarkMode} paddingTitle={titleLinkPadding}
                                          titleLink={mostPopularTleLink}>
        {
            <LayoutWithNavCircle listItem={MostPopularData.listMostPopular} isDarkMode={isDarkMode}/>

        }
    </TitleSection>
    let featuredMobile = <TitleSection titleLink={featuredHomeTitleLink} darkModeState={isDarkMode}
                                       paddingTitle={spaceComponentsMobileY}>
        <LayoutCarrouselMobile gapLayout={gapLayout}>
            {
                FeaturedHome.listFeaturedHome.map((item, index) =>
                    <HomeFeaturedMobile isDarkMode={isDarkMode} item={item} key={index}/>
                )
            }
        </LayoutCarrouselMobile>
    </TitleSection>
    let carrousel1Mobile = <TitleSection titleLink={todayInValpoTitleLink} darkModeState={isDarkMode}
                                         paddingTitle={spaceComponentsMobileY}>
        <LayoutCarrouselMobile gapLayout={gapLayout}>
            {
                TodayInValpo.listEventLookUp.map(item =>
                    <EventVerticalViewMobile item={item} isDarkMode={isDarkMode}
                                             key={item.EventId}/>
                )
            }
        </LayoutCarrouselMobile>
    </TitleSection>
    let publicity1Mobile = <PublicityViewMobile linkImage={PublicityData.publicityList[0]}/>
    let carrouselRounded1Mobile = <TitleSection titleLink={cinemasTitleLink} darkModeState={isDarkMode}
                                                paddingTitle={spaceComponentsMobileY}>
        <LayoutCarrouselMobile gapLayout={gapLayout}>
            {
                Cines.listCines.map(item =>
                    <HomeRoundedViewMobile item={item} isDarkMode={isDarkMode} key={item.EventId}/>
                )
            }
        </LayoutCarrouselMobile>
    </TitleSection>
    let carrousel2Mobile = <TitleSection titleLink={inOfferTitleLink} darkModeState={isDarkMode}
                                         paddingTitle={spaceComponentsMobileY}>
        <LayoutCarrouselMobile gapLayout={gapLayout}>
            {
                InOffer.listInOffer.map(item =>
                    <EventVerticalViewMobile item={item} isDarkMode={isDarkMode}
                                             key={item.EventId}/>
                )
            }
        </LayoutCarrouselMobile>
    </TitleSection>
    let ownPublicityMobile = <HomeOwnPublicityMobile listItem={OwnPublicityData.listOwnPublicity}
                                                     darkMode={isDarkMode}/>
    let newsMobile = <TitleSection titleLink={newsHomeTitleLink} darkModeState={isDarkMode}
                                   paddingTitle={spaceComponentsMobileY}>
        <LayoutCarrouselMobile gapLayout={gapLayout}>
            {
                HomeNewsData.listNews.map(item =>
                    <NewViewMobile item={item} isDarkMode={isDarkMode} key={item.Id}/>
                )
            }
        </LayoutCarrouselMobile>
    </TitleSection>
    let carrouselRounded2Mobile = <TitleSection titleLink={restaurantsHomeTitleLink} darkModeState={isDarkMode}
                                                paddingTitle={spaceComponentsMobileY}>
        <LayoutCarrouselMobile gapLayout={gapLayout}>
            {
                Restaurants.listRestaurants.map(item =>
                    <HomeRoundedViewMobile item={item} isDarkMode={isDarkMode} key={item.EventId}/>
                )
            }
        </LayoutCarrouselMobile>
    </TitleSection>
    let publicity2Mobile = <PublicityViewMobile linkImage={PublicityData.publicityList[1]}/>
    let dropDownMobile = <LayoutDropDownMobile gapLayout={gapLayout}>{
        DropDownData.listDropDown.map(item =>
            <EventHorizontalView info={item} darkModeState={isDarkMode} key={item.EventId}/>
        )
    }
    </LayoutDropDownMobile>
    let categorysFooterMobile = <LayoutCategoryFooter>
        {
            AtributesFooter.listAtribute.map(item =>
                <HomeCategorysFooterMobile isDarkMode={isDarkMode} item={item} key={item.Title}/>
            )
        }
    </LayoutCategoryFooter>
    let listDefaultPageMobile: ComponentWithSpaceMobile[] = [
        {
            Component: carrouselAutoMobile,
            padding: paddingGeneralMobile
        },
        {
            Component: informationMobile,
            padding: paddingGeneralMobile
        },
        {
            Component: dailyOfferMobile,
            padding: paddingGeneralMobile
        },
        {
            Component: mostPopularMobile,
            padding: paddingGeneralMobile
        },
        {
            Component: featuredMobile,
            padding: paddingGeneralMobile
        },
        {
            Component: carrousel1Mobile,
            padding: paddingGeneralMobile
        },
        {
            Component: publicity1Mobile,
            padding: paddingGeneralMobile
        },
        {
            Component: carrouselRounded1Mobile,
            padding: paddingGeneralMobile
        },
        {
            Component: carrousel2Mobile,
            padding: paddingGeneralMobile
        },
        {
            Component: ownPublicityMobile,
            padding: paddingGeneralMobile
        },
        {
            Component: newsMobile,
            padding: paddingGeneralMobile
        },
        {
            Component: carrouselRounded2Mobile,
            padding: paddingGeneralMobile
        },
        {
            Component: publicity2Mobile,
            padding: paddingGeneralMobile
        },
        {
            Component: dropDownMobile,
            padding: paddingGeneralMobile
        },
        {
            Component: categorysFooterMobile,
            padding: paddingGeneralMobile
        }
    ]
//endregion

    //region desktop components
    let carrouselBanner = <LayoutCarrousel handleFeatured={null} layoutProp={layoutPropBanner}>
        {
            HomeBannerData.listBanners.map((item, index) =>
                index == 0 ?
                    <FullBanner item={item} key={index}/> : <></>
            )
        }
    </LayoutCarrousel>
    let carrouselAuto = <LayoutAutoCarrousel gapLayout={gapLayout}>
        {
            CarrouselAutoHome.listImage.map(item =>
                <HomeAutoBanner key={item} linkImage={item}/>)
        }
    </LayoutAutoCarrousel>
    let information = <HomeInformation listItem={InformationHomeData.listInformationHome} darkModeState={isDarkMode}/>
    let dailyOffer = <TitleSection paddingTitle={titleLinkPadding} titleLink={dailyOfferHeaderTitleLink}
                                   darkModeState={isDarkMode}>
        <EventWithBannerView darkModeState={isDarkMode} item={DailyOfferData.dailyOffer}/>
    </TitleSection>
    let mostPopular = <TitleSection darkModeState={isDarkMode} paddingTitle={titleLinkPadding}
                                    titleLink={mostPopularTleLink}>
        {
            <LayoutRow5 gapLayout={16}>
                {
                    MostPopularData.listMostPopular.map((item, index) =>
                        <EventOnlyImageView darkMode={isDarkMode} item={item} key={index}/>
                    )

                }
            </LayoutRow5>
        }
    </TitleSection>

    let [getFeaturedItems, setFeaturedItems] = useState(0)
    const handleFeatured = (e) => setFeaturedItems(getFeaturedItems = e)
    let featured = <TitleSection paddingTitle={null}
                                 titleLink={featuredHomeTitleLink} darkModeState={isDarkMode}>{
        <LayoutCarrousel handleFeatured={handleFeatured}
                         layoutProp={layoutPropFeatured}>{
            FeaturedHome.listFeaturedHome.map((item, index) =>
                index >= getFeaturedItems && index <= getFeaturedItems + 1 ?
                    <HomeFeatured darkModeState={isDarkMode} featuredItem={item} key={index}/> : <></>
            )
        }
        </LayoutCarrousel>
    }
    </TitleSection>

    let [getCarrousel1Items, setCarrousel1Items] = useState(0)
    let carrousel1 = <TitleSection paddingTitle={null} titleLink={todayInValpoTitleLink} darkModeState={isDarkMode}>
        {
            <LayoutCarrousel handleFeatured={null} layoutProp={layoutPropCarrousel}>
                {
                    TodayInValpo.listEventLookUp.map((item, index) =>
                        index >= getCarrousel1Items && index <= getCarrousel1Items + 4 ?
                            <EventVerticalView darkModeState={isDarkMode}
                                               isHideName={true}
                                               dropDown={false}
                                               info={item}
                                               key={index}/> : <></>
                    )
                }
            </LayoutCarrousel>
        }
    </TitleSection>
    let publicity1 = <PublicityView linkImage={PublicityData.publicityList[0]}/>
    let [getCarrouselRounded1, setGetCArrouselRounded1] = useState(0)
    let carrouselRounded1 = <TitleSection paddingTitle={null} titleLink={cinemasTitleLink} darkModeState={isDarkMode}>
        <LayoutCarrousel handleFeatured={null} layoutProp={layoutPropCarrouselRounded}>
            {
                Cines.listCines.map((item, index) =>
                    index >= getCarrouselRounded1 && index <= getCarrouselRounded1 + 4 ?
                        <HomeRoundedView info={item} darkModeState={isDarkMode} key={index}/> : <></>
                )
            }
        </LayoutCarrousel>
    </TitleSection>
    let [getCarrousel2Items, setCarrousel2Items] = useState(0)
    let carrousel2 = <TitleSection paddingTitle={null} titleLink={inOfferTitleLink} darkModeState={isDarkMode}>
        <LayoutCarrousel handleFeatured={null} layoutProp={layoutPropCarrousel}>
            {
                InOffer.listInOffer.map((item, index) =>
                    index >= getCarrousel2Items && index <= getCarrousel2Items + 4 ?
                        <EventVerticalView isHideName={true}
                                           dropDown={false}
                                           info={item}
                                           darkModeState={isDarkMode} key={index}/> : <></>
                )
            }
        </LayoutCarrousel>
    </TitleSection>
    let ownPublicity = <HomeOwnPublicityDesktop listItem={OwnPublicityData.listOwnPublicity} darkMode={isDarkMode}/>
    let [getNewsItem, setGetNewsItem] = useState(0)
    let news = <TitleSection paddingTitle={null} darkModeState={isDarkMode} titleLink={newsHomeTitleLink}>
        <LayoutCarrousel handleFeatured={null} layoutProp={layoutPropNews}>
            {
                HomeNewsData.listNews.map((item, index) =>
                    index >= getNewsItem && index <= getCarrousel1Items + 2 ?
                        <NewView homeNew={item} darkModeState={isDarkMode} key={item.Id}/> : <></>
                )
            }
        </LayoutCarrousel>
    </TitleSection>
    let [getCarrouselRounded2, setGetCArrouselRounded2] = useState(0)
    let carrouselRounded2 = <TitleSection paddingTitle={null} titleLink={restaurantsHomeTitleLink}
                                          darkModeState={isDarkMode}>
        <LayoutCarrousel handleFeatured={null} layoutProp={layoutPropCarrouselRounded}>
            {

                Restaurants.listRestaurants.map((item, index) =>
                    index >= getCarrouselRounded2 && index <= getCarrouselRounded2 + 4 ?
                        <HomeRoundedView info={item} darkModeState={isDarkMode} key={index}/> : <></>
                )
            }
        </LayoutCarrousel>
    </TitleSection>
    let publicity2 = <PublicityView linkImage={PublicityData.publicityList[1]}/>
    let dropDown = <LayoutDropDown>
        {
            DropDownData.listDropDown.map(item =>
                <EventVerticalView isHideName={true} dropDown={true} info={item} darkModeState={isDarkMode}
                                   key={item.EventId}/>
            )
        }
    </LayoutDropDown>
    let categorysFooter = <LayoutCategoryFooter>
        {
            AtributesFooter.listAtribute.map(item =>
                <HomeCategorysFooter darkModeState={isDarkMode} item={item} key={item.Title}/>
            )
        }
    </LayoutCategoryFooter>
    let listDefaultPage: ComponentWithSpace[] = [
        {
            Component: carrouselAuto,
            padding: paddingGeneralDesk
        },
        {
            Component: information,
            padding: paddingGeneralDesk
        },
        {
            Component: dailyOffer,
            padding: paddingGeneralDesk
        },
        {
            Component: mostPopular,
            padding: paddingGeneralDesk
        },
        {
            Component: featured,
            padding: paddingGeneralDeskCarrousel
        },
        {
            Component: carrousel1,
            padding: paddingGeneralDeskCarrousel
        },
        {
            Component: publicity1,
            padding: paddingGeneralDesk
        },
        {
            Component: carrouselRounded1,
            padding: paddingGeneralDeskCarrousel
        },
        {
            Component: carrousel2,
            padding: paddingGeneralDeskCarrousel
        },
        {
            Component: ownPublicity,
            padding: paddingGeneralDesk
        },
        {
            Component: news,
            padding: paddingGeneralDeskCarrousel
        },
        {
            Component: carrouselRounded2,
            padding: paddingGeneralDeskCarrousel
        },
        {
            Component: publicity2,
            padding: paddingGeneralDesk
        },
        {
            Component: dropDown,
            padding: paddingGeneralDesk
        },
        {
            Component: categorysFooter,
            padding: paddingGeneralDesk
        },
    ]
//endregion

    return (
        isSmallDown ?
            <div className={`${isDarkMode ? utilities.bgBodyDarkMode : utilities.bgBodyNormal} pb-10`}>
                <HeaderSpixMobile displaySug={false} isDarkMode={isDarkMode}/>
                <MenuSpixMobile listItemMenu={Menu.listMenu} isDarkMode={isDarkMode}/>
                {carrouselBannerMobile}
                <DefaultPageMobile listItem={listDefaultPageMobile}/>
                <NavMenu toggleDarkMode={darkModeToggle} isActiveDarkModeButton={true} isDarkMode={isDarkMode}
                         isLogged={isLogged}/>
            </div>
            :
            <div className={isDarkMode ? utilities.bgBodyDarkMode : utilities.bgBodyNormal}>
                <HeaderSpixDesktop toggleDarkMode={darkModeToggle} darkMode={isDarkMode} isLogged={isLogged}/>
                <MenuSpixDesktop darkMode={isDarkMode} listItemMEnu={Menu.listMenu}/>
                <div className={utilities.maxWidthBodyContentSpix}>
                    <DefaultPage listItem={listDefaultPage}/>
                </div>
            </div>
    )
}
