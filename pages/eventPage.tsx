// region data
import {ComponentWithSpaceMobile} from "../components/Mobile/defaultPageMobile";
import {ReviewsSectionData} from "../dataDemo/data";
import {QuestionSectionData} from "../dataDemo/data";
import {ResumeReviews} from "../dataDemo/data";
import {EventPageEvent} from "../dataDemo/data";
import {HomeNewsData} from "../dataDemo/data";
import {ListOffertData} from "../dataDemo/data";
import {ListProductsExtra, ListProductsExtraOffer} from "../dataDemo/data";
import {ListProducts} from "../dataDemo/data";
import {FormList} from "../dataDemo/data";
import styleDesk from "/styles/Desktop/EventPage/eventPageDesk.module.css"
import styleMobile from "/styles/Mobile/EventPage/eventPageMobile.module.css"
import utilities from "/styles/utilities.module.css"
//endregion
//region components
import LayoutCommRevQue from "../components/Mobile/Layouts/layoutCommRevQue";
import ReviewSectionMobile from "../components/Mobile/EventPage/reviewSectionMobile";
import QuestionSectionMobile from "../components/Mobile/EventPage/questionSectionMobile";
import ReviewMobile from "../components/Mobile/EventPage/reviewMobile";
import QuestionMobile from "../components/Mobile/EventPage/questionMobile";
import EventInformationMobile from "../components/Mobile/EventPage/eventInformationMobile";
import LayoutCarrouselMobile from "../components/Mobile/Layouts/layoutCarrousel.Mobile";
import ProductViewMobile from "../components/Mobile/Misc/productViewMobile";
import EventWithBannerMobile from "../components/Mobile/Events/eventWithBannerMobile";
import TitleSection from "../components/Desktop/Misc/titleSection";
import DefaultPageMobile, {paddingAsignation} from "../components/Mobile/defaultPageMobile";
import FooterMobile from "../components/Mobile/EventPage/footerMobile";
import {useMediaQuery} from "./index";
import ReviewSectionDesk from "../components/Desktop/EventPage/reviewSectionDesk";
import QuestionSectionDesk from "../components/Desktop/EventPage/questionSectionDesk";
import ReviewDesk from "../components/Desktop/EventPage/reviewDesk";
import QuestionDesk from "../components/Desktop/EventPage/questionDesk";
import LayoutCommRevQueDesk from "../components/Desktop/Layouts/layoutCommRevQueDesk";
import SideCardEvent from "../components/Desktop/EventPage/sideCardEvent";
import EventInformationDesk from "../components/Desktop/EventPage/eventInformationDesk";
import FooterDesk from "../components/Desktop/EventPage/footerDesk";
import ProductViewDesk from "../components/Desktop/Misc/productViewDesk";
import LayoutCarrousel from "../components/Desktop/Layouts/layoutCarrousel";
import {LayoutCarrouselDeskProp} from "../components/Desktop/Layouts/layoutCarrousel";
import EventVerticalView from "../components/Desktop/EventsView/eventVerticalView";
import LayoutSideCard, {ChildrenProp} from "../components/Desktop/Layouts/layoutSideCard";
import DefaultPage, {ComponentWithSpace} from "../components/Desktop/defaulPage";
import Image from "next/image";
import React, {useState} from "react";
import DefaultLayoutMobile from "../components/Mobile/defaultLayoutMobile";
import DefaultLayoutDesktop from "../components/Desktop/defaultLayoutDesktop";
import {ExtraEventPage, InOfferHome} from "../dataDemo/EventView/eventVerticalView";
import NewsSearchMobile from "../components/Mobile/Search/newSearchMobile";
import NewsSearchDesktop from "../components/Desktop/Search/newsSearchDesktop";
import {ExtraEventPageMobile, InOfferHomeMobile} from "../dataDemo/Mobile/EventView/EventCard";
import EventVerticalViewMob from "../components/Mobile/Events/eventVerticalViewMob";
import EventWithBannerView from "../components/Desktop/EventsView/eventWithBannerView";
import ProductViewSquare from "../components/Desktop/Misc/productViewSquare";
import FormView from "../components/Mobile/Misc/formView";
import LayoutPurpleContainer from "../components/Desktop/Layouts/layoutPurpleContainer";
import ProductViewSquareMobile from "../components/Mobile/Misc/productViewSquare";
import LayoutWithNavCircleMobile from "../components/Mobile/Layouts/layoutWithNavCircleMobile";
import FormViewMobile from "../components/Mobile/Misc/formViewMobile";
import FormViewDesktop from "../components/Desktop/Misc/formView";
import LayoutWithNavCircleMobileFull from "../components/Mobile/Layouts/layoutWithNavCircleMobileFull";
import TitleSectionMobile from "../components/Mobile/Misc/titleSectionMobile";
import PopUpContainer from "../components/Desktop/Misc/popUpContainer";
import LevelUserPopUp from "../components/Desktop/Misc/levelUserPopUp";
//endregion

const spaceComponentsMobileY = 16
const spaceComponentsDeskY = 25
const spaceComponents = 25
const noSpaceComponentsDesk = 0
const paddingPublcity: paddingAsignation = {pt: 24, pb: 24, pl: 0, pr: 0}
const paddingDefaultSection: paddingAsignation = {pt: 24, pb: 24, pl: 16, pr: 16}
const paddingDefaultSectionDesk: paddingAsignation = {pt: 40, pb: 40, pl: 2, pr: 2}
const paddingFooter: paddingAsignation = {pt: 0, pb: 0, pl: 0, pr: 0}
const paddingEventInformation: paddingAsignation = {pt: 0, pb: 40, pl: 2, pr: 2}
const paddingDefaultSectionDeskCarrousel: paddingAsignation = {pt: 40, pb: 15, pl: 2, pr: 2}
/*const commentTitle: [string, string] = ["Comentarios", "#"]*/
const reviewtTitle: [string, string] = ["Rese??as", "#"]
const questionTitle: [string, string] = ["Preguntas", "#"]
const newsTitle: [string, string] = ["Noticias", "#"]
const discountTitle: [string, string] = ["Ofertas", "#"]
const productstTitle: [string, string] = ["Productos", "/eventProductsFull"]
const otherEventTitle: [string, string] = ["Otros eventos", "#"]
const inSearchTitle: [string, string] = ["Se busca", null]
const gapLayout: number = 16
const displayCarrousel = "grid"
const gridTemplateColum2: string = "repeat(2,1fr)"
const gridTemplateColum3: string = "repeat(3,1fr)"
const gridTemplateColum4: string = "repeat(4,1fr)"
const positionArrowIn: string = "5px"
const positionArrowY: string = "calc(50% - 16px)"
let layoutPropProducts: LayoutCarrouselDeskProp = {
    Display: displayCarrousel,
    Grid: gridTemplateColum4,
    Gap: gapLayout,
    Padding: spaceComponents,
    PositionArrowX: positionArrowIn,
    PositionArrowY: positionArrowY
}
let layoutPropCarrousel: LayoutCarrouselDeskProp = {
    Display: displayCarrousel,
    Grid: gridTemplateColum4,
    Gap: gapLayout,
    Padding: spaceComponents,
    PositionArrowX: positionArrowIn,
    PositionArrowY: positionArrowY
}
let layoutPropNews: LayoutCarrouselDeskProp = {
    Display: displayCarrousel,
    Grid: gridTemplateColum3,
    Gap: gapLayout,
    Padding: spaceComponents,
    PositionArrowX: positionArrowIn,
    PositionArrowY: positionArrowY
}

export default function EventPage() {
    //region components mobile
    /*    let commentSection = <TitleSection titleLink={commentTitle}
                                           paddingTitle={spaceComponentsMobileY} darkModeState={false}>
            <CommentSectionMobile>
                {
                    <LayoutCommRevQue>
                        {
                            CommentSectionData.listComment.map((item, index) =>
                                <CommentMobile item={item} key={index}/>
                            )
                        }
                    </LayoutCommRevQue>
                }
            </CommentSectionMobile>
        </TitleSection>*/

    let reviewSection = <TitleSection titleLink={reviewtTitle}
                                      paddingTitle={spaceComponentsMobileY} darkModeState={false}>
        <ReviewSectionMobile resumeReview={ResumeReviews.resumeReviews}>
            <LayoutCommRevQue>
                {
                    ReviewsSectionData.listReviews.map((item, index) =>
                        <ReviewMobile item={item} key={index}/>
                    )
                }
            </LayoutCommRevQue>
        </ReviewSectionMobile>
    </TitleSection>
    let questionSection = <TitleSection titleLink={questionTitle}
                                        paddingTitle={spaceComponentsMobileY} darkModeState={false}>
        <QuestionSectionMobile>
            <LayoutCommRevQue>
                {
                    QuestionSectionData.listQuestions.map((item, index) =>
                        <QuestionMobile item={item} key={index}/>
                    )
                }
            </LayoutCommRevQue>
        </QuestionSectionMobile>
    </TitleSection>
    let eventInformation = <EventInformationMobile form={FormList.listForm}
                                                   eventInformation={EventPageEvent.eventPage}/>

    let newsMobile = <TitleSection titleLink={newsTitle}
                                   paddingTitle={spaceComponentsMobileY} darkModeState={false}>
        <LayoutCarrouselMobile gapLayout={gapLayout}>
            {
                HomeNewsData.listNews.map((item) =>
                    <div key={item.Id} style={{width: 330}}>
                        <NewsSearchMobile isSubtitle={false} item={item}/>
                    </div>
                )
            }
        </LayoutCarrouselMobile>
    </TitleSection>

    let inSearchMobile = <TitleSectionMobile titleLink={inSearchTitle} paddingTitle={spaceComponentsDeskY}
                                             paddingLeft={16}
                                             darkModeState={false}>
        <LayoutWithNavCircleMobileFull isDarkMode={false}>
            {
                FormList.listForm.map((item, index) =>
                    <div key={index}>
                        <FormViewMobile item={item}/>
                    </div>)
            }
        </LayoutWithNavCircleMobileFull>

    </TitleSectionMobile>

    /*  let moreOffert = <TitleSection titleLink={discountTitle}
                                     paddingTitle={spaceComponentsMobileY} darkModeState={false}>
          <EventWithBannerMobile displayLogoRating={false} darkModeState={false} item={ListOffertData.listOffert[0]}/>
      </TitleSection>*/

    let offerEvent = <TitleSection titleLink={discountTitle}
                                   paddingTitle={spaceComponentsMobileY} darkModeState={false}>
        <LayoutCarrouselMobile gapLayout={gapLayout}>
            {
                ListProductsExtraOffer.listProducts.map((item, index) =>
                    <ProductViewSquareMobile isDisplayOffer={true} size={220} key={index} item={item}/>
                )
            }
        </LayoutCarrouselMobile>
    </TitleSection>

    let products = <TitleSection titleLink={productstTitle}
                                 paddingTitle={spaceComponentsMobileY} darkModeState={false}>
        <LayoutCarrouselMobile gapLayout={gapLayout}>
            {
                ListProductsExtra.listProducts.map((item, index) =>
                    <ProductViewSquareMobile isDisplayOffer={true} size={220} key={index} item={item}/>
                )
            }
        </LayoutCarrouselMobile>
    </TitleSection>
    let eventExtra = <TitleSection titleLink={otherEventTitle}
                                   paddingTitle={spaceComponentsMobileY} darkModeState={false}>
        <LayoutCarrouselMobile gapLayout={gapLayout}>
            {
                ExtraEventPageMobile.list.map((item, index) =>
                    <EventVerticalViewMob isActiveSnap={false} item={item} darkModeState={false} key={index}/>
                )
            }
        </LayoutCarrouselMobile>
    </TitleSection>

    let defaultList: ComponentWithSpaceMobile[] = [
        {
            Component: eventInformation,
            padding: paddingDefaultSection
        },
        {
            Component: inSearchMobile,
            padding: paddingPublcity
        },
        {
            Component: offerEvent,
            padding: paddingDefaultSection
        },
        {
            Component: products,
            padding: paddingDefaultSection
        },
        {
            Component: newsMobile,
            padding: paddingDefaultSection
        },
        {
            Component: eventExtra,
            padding: paddingDefaultSection
        },
        {
            Component: reviewSection,
            padding: paddingDefaultSection
        },
        {
            Component: questionSection,
            padding: paddingDefaultSection
        }
    ]
    //endregion



    //region componentsDesktop
    let eventInformationDesk = <EventInformationDesk formList={FormList.listForm}
                                                     eventInformation={EventPageEvent.eventPage}/>
    /*    let commentSectionDesk = <TitleSection titleLink={commentTitle}
                                               paddingTitle={spaceComponentsDeskY} darkModeState={false}>
            <CommentSectionDesk>
                {
                    <LayoutCommRevQueDesk>
                        {
                            CommentSectionData.listComment.map((item, index) =>
                                <CommentDesk item={item} key={index}/>
                            )
                        }
                    </LayoutCommRevQueDesk>
                }
            </CommentSectionDesk>
        </TitleSection>*/
    let reviewSectionDesk = <TitleSection titleLink={reviewtTitle}
                                          paddingTitle={spaceComponentsDeskY} darkModeState={false}>
        <ReviewSectionDesk resumeReview={ResumeReviews.resumeReviews}>
            <LayoutCommRevQueDesk>
                {
                    ReviewsSectionData.listReviews.map((item, index) =>
                        <ReviewDesk item={item} key={index}/>
                    )
                }
            </LayoutCommRevQueDesk>
        </ReviewSectionDesk>
    </TitleSection>
    let questionSectionDesk = <TitleSection titleLink={questionTitle}
                                            paddingTitle={spaceComponentsDeskY} darkModeState={false}>
        <QuestionSectionDesk>
            <LayoutCommRevQueDesk>
                {
                    QuestionSectionData.listQuestions.map((item, index) =>
                        <QuestionDesk item={item} key={index}/>
                    )
                }
            </LayoutCommRevQueDesk>
        </QuestionSectionDesk>
    </TitleSection>

    let [getNews, setGetNews] = useState(0)
    const handleSetGetNews = (e) => setGetNews(getNews = e)
    let newsDesk = <TitleSection titleLink={newsTitle}
                                 paddingTitle={noSpaceComponentsDesk} darkModeState={false}>
        <LayoutCarrousel sumar={1} handleFeatured={handleSetGetNews} layoutProp={layoutPropNews}>
            {
                HomeNewsData.listNews.map((item, index) =>
                    index >= getNews && index <= getNews + 2 &&
                    <NewsSearchDesktop isDarkMode={false} isSubtitle={false} key={item.Id} item={item}/>
                )
            }
        </LayoutCarrousel>
    </TitleSection>

    let moreOffertDesk = <TitleSection titleLink={discountTitle}
                                       paddingTitle={spaceComponentsDeskY} darkModeState={false}>
        <EventWithBannerView sizeImageProduct={90} item={ListOffertData.listOffert[0]} darkModeState={false}/>
    </TitleSection>

    let [getProducst, setGetProducst] = useState(0)
    const handleGetProducts = (e) => setGetProducst(getProducst = e)
    let productsDesk = <TitleSection titleLink={productstTitle}
                                     paddingTitle={noSpaceComponentsDesk} darkModeState={false}>
        <LayoutCarrousel sumar={3} handleFeatured={handleGetProducts} layoutProp={layoutPropProducts}>
            {
                ListProductsExtra.listProducts.map((item, index) =>
                    index >= getProducst && index <= getProducst + 3 &&
                    <ProductViewSquare isDisplayOffer={false} size={null} key={index} item={item}/>
                )
            }
        </LayoutCarrousel>
    </TitleSection>

    let inSearch = <TitleSection titleLink={inSearchTitle}
                                 paddingTitle={spaceComponentsDeskY} darkModeState={false}>
        <div className="px-0.5">
            {
                FormList.listForm.length > 0 &&
                <LayoutPurpleContainer isDarkMode={false}>
                    {
                        FormList.listForm.map((item, index) =>
                            <div key={index}>
                                <FormViewDesktop item={item}/>
                            </div>
                        )
                    }
                </LayoutPurpleContainer>
            }
        </div>

    </TitleSection>

    let [getProducstOffer, setGetProducstOffer] = useState(0)
    const handleGetProductsOffer = (e) => setGetProducstOffer(getProducstOffer = e)
    let productsDeskOffer = <TitleSection titleLink={discountTitle}
                                          paddingTitle={noSpaceComponentsDesk} darkModeState={false}>
        <LayoutCarrousel sumar={3} handleFeatured={handleGetProductsOffer} layoutProp={layoutPropProducts}>
            {
                ListProductsExtraOffer.listProducts.map((item, index) =>
                    index >= getProducstOffer && index <= getProducstOffer + 3 &&
                    <ProductViewSquare isDisplayOffer={true} size={null} key={index} item={item}/>
                )
            }
        </LayoutCarrousel>
    </TitleSection>

    let [getExtra, setGetExtra] = useState(0)
    const handleGetExtra = (e) => setGetExtra(getExtra = e)
    let eventExtraDesk = <TitleSection titleLink={otherEventTitle}
                                       paddingTitle={noSpaceComponentsDesk} darkModeState={false}>
        <LayoutCarrousel sumar={2} handleFeatured={handleGetExtra} layoutProp={layoutPropCarrousel}>
            {
                ExtraEventPage.list.map((item, index) =>
                    index >= getExtra && index <= getExtra + 3 &&
                    <EventVerticalView item={item} darkModeState={false} key={item.Id}/>
                )
            }
        </LayoutCarrousel>
    </TitleSection>

    let footerDesk = <FooterDesk/>
    let defaultListDesk: ComponentWithSpace[] = [
        {
            Component: eventInformationDesk,
            padding: paddingEventInformation
        },
        {
            Component: inSearch,
            padding: paddingDefaultSectionDeskCarrousel
        },
        {
            Component: productsDeskOffer,
            padding: paddingDefaultSectionDeskCarrousel
        },
        /* {
             Component: moreOffertDesk,
             padding: paddingDefaultSectionDesk
         },*/
        {
            Component: productsDesk,
            padding: paddingDefaultSectionDeskCarrousel
        },
        {
            Component: newsDesk,
            padding: paddingDefaultSectionDeskCarrousel
        },

        {
            Component: eventExtraDesk,
            padding: paddingDefaultSectionDeskCarrousel
        },
        {
            Component: reviewSectionDesk,
            padding: paddingDefaultSectionDesk
        },
        {
            Component: questionSectionDesk,
            padding: paddingDefaultSectionDesk
        }
    ]

    let childrens: ChildrenProp = {
        childrenLeft: <DefaultPage listItem={defaultListDesk}/>,
        childrenRight: <SideCardEvent  eventInformation={EventPageEvent.eventPage}/>
    }
    //endregion
    let [isDiplaySug, setIsDisplaySug] = useState(false)
    const handleIsDisplaySug = () => setIsDisplaySug(isDiplaySug = !isDiplaySug)

    const isSmallDown = useMediaQuery('(max-width: 768px)');
    const isLardeDown = useMediaQuery('(max-width: 1280px)');
    const cssStyle = getCssStyle()
    const bannerPath = EventPageEvent.eventPage.BannerPath
    return (
        isLardeDown ?
            <DefaultLayoutMobile isDarkMode={false}>
                <>
                    <div className={styleMobile.bannerProperties}>
                        <Image layout={"fill"} src={bannerPath} alt=""/>
                    </div>
                    <div className={`${styleMobile.maxWidthMainContentMobile} ${cssStyle.paddingBottomMobile}`}>
                        <DefaultPageMobile isDarkMode={false} isHome={false} listItem={defaultList}/>
                        <FooterMobile/>
                    </div>
                </>

            </DefaultLayoutMobile>
            /*<div>
                {
                    isDiplaySug ?
                        <SuggHeaderMobile returnMet={handleIsDisplaySug}/>
                        :
                        <>
                            <HeaderSpixMobile isDesplegable={null} displaySug={handleIsDisplaySug} isDarkMode={false}/>
                            <MenuSpixMobile listItemMenu={menuList} isDarkMode={false}/>
                            <div className={styleMobile.bannerProperties}>
                                <Image layout={"fill"} src={bannerPath} alt=""/>
                            </div>
                            <div className={`${styleMobile.maxWidthMainContentMobile} ${cssStyle.paddingBottomMobile}`}>
                                <DefaultPageMobile isDarkMode={false} isHome={false} listItem={defaultList}/>
                                <FooterMobile/>
                            </div>
                        </>
                }
            </div>*/
            :
            <DefaultLayoutDesktop isDarkMode={false} isLogged={false} darkModeToggle={null}>
                <>
                    <div className={styleDesk.sizeBaner}>
                        <Image layout={"fill"} src={bannerPath} alt=""/>
                    </div>
                    <div className={`${utilities.maxWidthBodyContentSpix} z-50`}>
                        <>
                            <LayoutSideCard childrens={childrens}/>
                            <FooterDesk/>
                        </>
                    </div>
                </>
            </DefaultLayoutDesktop>
        /* <div>
             <HeaderSpixDesktop darkMode={false} toggleDarkMode={null} isLogged={false}/>
             <MenuSpixDesktop listItemMEnu={menuList} darkMode={false}/>
             <div className={styleDesk.sizeBaner}>
                 <Image layout={"fill"} src={bannerPath} alt=""/>
             </div>
             <div className={`${utilities.maxWidthBodyContentSpix}`}>
                 <LayoutSideCard childrens={childrens}/>
                 <FooterDesk/>
             </div>
         </div>*/
    )

    function getCssStyle() {
        return {
            paddingBottomMobile: isSmallDown ? styleMobile.paddingBottom : styleMobile.paddingBottomNoBar
        }
    }
}