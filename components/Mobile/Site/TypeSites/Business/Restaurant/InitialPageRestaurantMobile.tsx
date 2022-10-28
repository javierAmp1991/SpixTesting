import style from "/styles/Mobile/Site/TypeSite/Bussines/Restaurant/initialPageRestaurant.module.css"
import {SectionProductItem} from "../../../../../../Class/Misc/GlobalClass";
import {question, review} from "../../../../../../dataDemo/data";
import {
    PresentationCard,
    ProviderOfferProducts,
    ProviderRecommended
} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {useContext, useState} from "react";
import {
    HeaderContext, OfferProductsContext, QuestionSectionContext, RecommendedContext, ReviewsSectionContext,
    SectionProductsContext
} from "../../../../../Providers/Site/TypeSite/Business/Restaurant/restaurantProvider";
import ProductViewSquare from "../../../../Misc/productViewSquare";
import DescriptionCardFullMobile from "./DescriptionCardFullMobile";
import LayoutTitleMobile from "./layoutTitleMobile";
import FullBannerRestaurant from "../../../../../Desktop/Misc/fullBannerRestaurant";
import LayoutReviewSectionMobile from "./layoutReviewSectionMobile";
import ReviewViewShort from "../../../../../Desktop/Misc/ReviewViewShort";
import EventVerticalView from "../../../../../Desktop/EventsView/eventVerticalView";
import ProductSectionMobile from "./ProductSectionMobile";
import QuestionDesk from "../../../../../Desktop/EventPage/questionDesk";
import FullBannerMobile from "../../../../Misc/fullBannerMobile";
import FullBanner from "../../../../../Desktop/Misc/fullBanner";
import LayoutWithNavCircleMobile from "../../../../Layouts/layoutWithNavCircleMobile";
import LayoutCarrouselMobile from "../../../../Layouts/layoutCarrousel.Mobile";
import DescriptionCardFullData from "./DescriptionCardFullData";

export default function InitialPageRestaurantMobile() {

    const infoHeader: PresentationCard = useContext(HeaderContext)
    const infoSectionProducts: SectionProductItem[] = useContext(SectionProductsContext)
    const infoRecomended: ProviderRecommended = useContext(RecommendedContext)
    const listReview: review[] = useContext(ReviewsSectionContext)
    const listQuestion: question[] = useContext(QuestionSectionContext)
    const listOfferProducts: ProviderOfferProducts = useContext(OfferProductsContext)
    return (
        <div className={style.mainDivMobile}>
            <div className={style.mainGradient}>
                <div className={style.mainDivHeader}>
                    <FullBannerMobile item={infoHeader.Banner}/>
                </div>
                <DescriptionCardFullMobile/>
            </div>

            <div className={style.mainDiv}>
                <DescriptionCardFullData/>
                <LayoutReviewSectionMobile>
                    <LayoutWithNavCircleMobile isDarkMode={false}>
                        {
                            listReview.map((item, index) =>
                                <ReviewViewShort key={item.ByWho} item={item}/>
                            )
                        }
                    </LayoutWithNavCircleMobile>
                </LayoutReviewSectionMobile>
                <div className={style.separationLine}/>

                <LayoutTitleMobile title={"Happy Hour"}>
                    <LayoutCarrouselMobile gapLayout={16}>
                        {
                            listOfferProducts.InitialItems.map((item, index) =>
                                <ProductViewSquare key={item.Name} item={item} size={220} isDisplayOffer={true}/>
                            )
                        }
                    </LayoutCarrouselMobile>
                </LayoutTitleMobile>
                <div className={style.separationLine}/>

                <LayoutTitleMobile title={"Recomendados"}>
                    <LayoutCarrouselMobile gapLayout={16}>
                        {
                            infoRecomended.InitialItems.map((item, index) =>
                                <EventVerticalView key={item.Id} item={item} darkModeState={false}/>)
                        }
                    </LayoutCarrouselMobile>
                </LayoutTitleMobile>
                <div className={style.separationLine}/>

                {
                    infoSectionProducts.map(item =>
                        <>
                            <ProductSectionMobile sectionProducts={item}/>
                            <div className={style.separationLine}/>
                        </>
                    )
                }

                <LayoutTitleMobile title={"Preguntas"}>
                    <div className={style.gridQuestions}>
                        {
                            listQuestion.map((item) =>
                                <QuestionDesk key={item.Question} item={item}/>)
                        }
                    </div>
                </LayoutTitleMobile>
            </div>

        </div>
    )
}