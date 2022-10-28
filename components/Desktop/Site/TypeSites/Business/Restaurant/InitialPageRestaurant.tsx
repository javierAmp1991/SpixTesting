import style from "/styles/Desktop/Site/TypeSite/Bussines/Restaurant/initialPageRestaurant.module.css"
import {SectionProductItem} from "../../../../../../Class/Misc/GlobalClass";
import {question, review} from "../../../../../../dataDemo/data";
import FullBannerRestaurant from "../../../../Misc/fullBannerRestaurant";
import LayoutReviewSection from "./layoutReviewSection";
import ProductSection from "./ProductSection";
import QuestionDesk from "../../../../EventPage/questionDesk";
import LayoutTitle from "./layoutTitle";
import EventVerticalView from "../../../../EventsView/eventVerticalView";
import ReviewViewShort from "../../../../Misc/ReviewViewShort";
import {
    PresentationCard,
    ProviderOfferProducts,
    ProviderRecommended
} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {useContext} from "react";
import {
    HeaderContext, OfferProductsContext, QuestionSectionContext, RecommendedContext, ReviewsSectionContext,
    SectionProductsContext
} from "../../../../../Providers/Site/TypeSite/Business/Restaurant/restaurantProvider";
import ProductViewSquare from "../../../../Misc/productViewSquare";
import DescriptionCardFull from "./DescriptionCardFull";
import NavProductsSection from "./navProductsSection";

export default function InitialPageRestaurant() {

    const infoHeader: PresentationCard = useContext(HeaderContext)
    const infoSectionProducts: SectionProductItem[] = useContext(SectionProductsContext)
    const infoRecomended: ProviderRecommended = useContext(RecommendedContext)
    const listReview: review[] = useContext(ReviewsSectionContext)
    const listQuestion: question[] = useContext(QuestionSectionContext)
    const listOfferProducts: ProviderOfferProducts = useContext(OfferProductsContext)
    return (
        <>
            <div className={style.mainGradient}>
                <div className={style.mainDivHeader}>
                    <FullBannerRestaurant item={infoHeader.Banner}/>
                </div>
                <DescriptionCardFull/>
                {/*<DescriptionCard/>*/}
            </div>
            <div className={style.mainDiv}>

                <LayoutReviewSection>
                    <div className={style.gridReviews}>
                        {
                            listReview.map((item, index) =>
                                index <= 2 &&
                                <ReviewViewShort item={item}/>
                            )
                        }
                    </div>
                </LayoutReviewSection>
                <div className={style.separationLine}/>

                <LayoutTitle title={"Happy Hour"}>
                    <div className={style.gridOffer}>
                        {
                            listOfferProducts.InitialItems.map(item =>
                                <ProductViewSquare key={item.Name} item={item} size={null} isDisplayOffer={true}/>
                            )
                        }
                    </div>
                </LayoutTitle>
                <div className={style.separationLine}/>

                <LayoutTitle title={"Recomendados"}>
                    <div className={style.gridRecomendados}>
                        {
                            infoRecomended.InitialItems.map((item) =>
                                <EventVerticalView key={item.Id} item={item} darkModeState={false}/>)
                        }
                    </div>
                </LayoutTitle>
                <div className={style.separationLine}/>

                <div>
                    <NavProductsSection/>
                    <div>
                        {
                            infoSectionProducts.map(item =>
                                <>
                                    <ProductSection sectionProducts={item}/>
                                    <div className={style.separationLine}/>
                                </>
                            )
                        }
                    </div>
                </div>

                <LayoutTitle title={"Preguntas"}>
                    <div className={style.gridQuestions}>
                        {
                            listQuestion.map((item) =>
                                <QuestionDesk key={item.Question} item={item}/>)
                        }
                    </div>
                </LayoutTitle>
            </div>

        </>
    )
}