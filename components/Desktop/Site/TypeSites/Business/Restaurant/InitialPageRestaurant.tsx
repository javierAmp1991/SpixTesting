import style from "/styles/Desktop/Site/TypeSite/Bussines/Restaurant/initialPageRestaurant.module.css"
import {QuestionItem, ReviewItem, SectionProductItem} from "../../../../../../Class/Misc/GlobalClass";
import FullBannerRestaurant from "../../../../Misc/fullBannerRestaurant";
import LayoutReviewSection from "./layoutReviewSection";
import ProductSection from "./ProductSection";
import LayoutTitle from "./layoutTitle";
import EventVerticalView from "../../../../EventsView/eventVerticalView";
import ReviewViewShort from "../../../../Misc/ReviewViewShort";
import {
    PresentationCard,
    ProviderOfferProducts,
    ProviderRecommended, ProviderReview
} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {useContext, useEffect, useState} from "react";
import {
    HeaderContext, OfferProductsContext, QuestionSectionContext, RecommendedContext, ReviewsSectionContext,
    SectionProductsContext
} from "../../../../../Providers/Site/TypeSite/Business/Restaurant/restaurantProvider";
import ProductViewSquare from "../../../../Misc/productViewSquare";
import DescriptionCardFull from "./DescriptionCardFull";
import NavProductsSection from "./navProductsSection";
import QuestionShortDesk from "../../../../Misc/questionShortDesk";
import LayoutCarrouselDesktop from "../../../../Layouts/layoutCarrouselDesktop";
import {PropCarrousel} from "../../../../../../Class/Layouts/layoutClass";

const idTest: string = "isTestDesktopScrolControl"


export default function InitialPageRestaurant() {
    /*useEffect(() => {
        const cachedRef = refMobile.current,
            observer = new IntersectionObserver(
                ([e]) => {
                    setIsSticky(e.intersectionRatio < 1)
                },
                {
                    threshold: [0.1],
                }
            )

        observer.observe(cachedRef)

        // unmount
        return function () {
            observer.unobserve(cachedRef)
        }
    }, [])*/
    const infoHeader: PresentationCard = useContext(HeaderContext)
    const infoSectionProducts: SectionProductItem[] = useContext(SectionProductsContext)
    const infoRecomended: ProviderRecommended = useContext(RecommendedContext)
    const listReview: ProviderReview = useContext(ReviewsSectionContext)
    const listQuestion: QuestionItem[] = useContext(QuestionSectionContext)
    const listOfferProducts: ProviderOfferProducts = useContext(OfferProductsContext)
    let [hasBeenReached, setHasBeenReached] = useState(false)
    let [startSectionProduct, setStartSectionProduct] = useState(0)
    const layoutPropRecomended: PropCarrousel = {
        PositionArrowY: "calc(50% - 16px)",
        PositionArrowX: "-40px",
        Padding: 0,
        Gap: 16,
        Grid: 6,
        LeftArrow: () => infoRecomended.LeftClick(),
        RightArrow: () => infoRecomended.RightClick()
    }
    const layoutPropOffer: PropCarrousel = {
        PositionArrowY: "calc(50% - 16px)",
        PositionArrowX: "-40px",
        Padding: 0,
        Gap: 16,
        Grid: 6,
        LeftArrow: () => listOfferProducts.LeftClick(),
        RightArrow: () => listOfferProducts.RightClick()
    }
    const layoutPropReview: PropCarrousel = {
        PositionArrowY: "calc(50% - 16px)",
        PositionArrowX: "-40px",
        Padding: 0,
        Gap: 16,
        Grid: 3,
        LeftArrow: () => listReview.LeftClick(),
        RightArrow: () => listReview.RightClick()
    }

    useEffect(() => {
        let scrollControl = document.getElementById(idTest).getBoundingClientRect()
        setStartSectionProduct(startSectionProduct = scrollControl.y)
    }, [])
    useEffect(() => {
        const functionScroll = () => {
            setHasBeenReached(hasBeenReached = window.scrollY >= startSectionProduct)
        }
        window.addEventListener(`scroll`, functionScroll)
        return () => window.removeEventListener(`scroll`, functionScroll);
    })
    return (
        <>
            <div className={style.mainGradient}>
                <div className={style.mainDivHeader}>
                    <FullBannerRestaurant item={infoHeader.Banner}/>
                </div>
                <DescriptionCardFull/>
            </div>
            <div className={style.mainDiv}>
                <NavProductsSection hasBeenReached={hasBeenReached}/>

                <LayoutReviewSection>
                    <LayoutCarrouselDesktop layoutProp={layoutPropReview}>
                        {
                            listReview.InitialReview.map((item) =>
                                <ReviewViewShort key={item.Id} item={item}/>
                            )
                        }
                    </LayoutCarrouselDesktop>
                   {/* <div className={style.gridReviews}>
                        {
                            listReview.map((item) =>
                                <ReviewViewShort key={item.Id} item={item}/>
                            )
                        }
                    </div>*/}
                </LayoutReviewSection>
                <div className={style.separationLine}/>

                <LayoutTitle title={"Happy Hour"}>
                    <LayoutCarrouselDesktop layoutProp={layoutPropOffer}>
                        {
                            listOfferProducts.InitialItems.map(item =>
                                <ProductViewSquare key={item.Name} item={item} size={null} isDisplayOffer={true}/>
                            )
                        }
                    </LayoutCarrouselDesktop>
                    {/*<div className={style.gridOffer}>
                        {
                            listOfferProducts.InitialItems.map(item =>
                                <ProductViewSquare key={item.Name} item={item} size={null} isDisplayOffer={true}/>
                            )
                        }
                    </div>*/}
                </LayoutTitle>
                <div className={style.separationLine}/>

                <LayoutTitle title={"Recomendados"}>
                    <LayoutCarrouselDesktop layoutProp={layoutPropRecomended}>
                        {
                            infoRecomended.InitialItems.map((item) =>
                                <EventVerticalView key={item.Id} item={item} darkModeState={false}/>)
                        }
                    </LayoutCarrouselDesktop>
                    {/*<div className={style.gridRecomendados}>
                        {
                            infoRecomended.InitialItems.map((item) =>
                                <EventVerticalView key={item.Id} item={item} darkModeState={false}/>)
                        }
                    </div>*/}
                </LayoutTitle>
                <div className={style.separationLine}/>

                <div id={idTest}>
                    {
                        infoSectionProducts.map(item =>
                            <>
                                <ProductSection sectionProducts={item}/>
                                <div className={style.separationLine}/>
                            </>
                        )
                    }
                </div>

                <LayoutTitle title={"Preguntas"}>
                    <div className={style.gridQuestions}>
                        {
                            listQuestion.map((item) =>
                                <QuestionShortDesk key={item.Question} item={item}/>)
                        }
                    </div>
                </LayoutTitle>
            </div>
        </>
    )
}