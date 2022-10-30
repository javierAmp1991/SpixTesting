import style from "/styles/Mobile/Site/TypeSite/Bussines/Restaurant/initialPageRestaurant.module.css"
import {SectionProductItem} from "../../../../../../Class/Misc/GlobalClass";
import {question, review} from "../../../../../../dataDemo/data";
import {
    PresentationCard,
    ProviderOfferProducts,
    ProviderRecommended
} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {useContext, useEffect, useState} from "react";
import {
    HeaderContext, OfferProductsContext, QuestionSectionContext, RecommendedContext, ReviewsSectionContext,
    SectionProductsContext
} from "../../../../../Providers/Site/TypeSite/Business/Restaurant/restaurantProvider";
import DescriptionCardFullMobile from "./DescriptionCardFullMobile";
import LayoutTitleMobile from "./layoutTitleMobile";
import LayoutReviewSectionMobile from "./layoutReviewSectionMobile";
import ReviewViewShort from "../../../../../Desktop/Misc/ReviewViewShort";
import ProductSectionMobile from "./ProductSectionMobile";
import QuestionDesk from "../../../../../Desktop/EventPage/questionDesk";
import FullBannerMobile from "../../../../Misc/fullBannerMobile";
import LayoutWithNavCircleMobile from "../../../../Layouts/layoutWithNavCircleMobile";
import LayoutCarrouselMobile from "../../../../Layouts/layoutCarrousel.Mobile";
import DescriptionCardFullData from "./DescriptionCardFullData";
import EventVerticalViewNewMob from "../../../../Events/eventVerticalViewNewMob";
import NavProductsSectionMobile from "./navProductsSectionMobile";
import ProductViewSquare from "../../../../../Desktop/Misc/productViewSquare";

const idTest: string = "isTestMobileScrolControl"

export default function InitialPageRestaurantMobile() {

    const infoHeader: PresentationCard = useContext(HeaderContext)
    const infoSectionProducts: SectionProductItem[] = useContext(SectionProductsContext)
    const infoRecomended: ProviderRecommended = useContext(RecommendedContext)
    const listReview: review[] = useContext(ReviewsSectionContext)
    const listQuestion: question[] = useContext(QuestionSectionContext)
    const listOfferProducts: ProviderOfferProducts = useContext(OfferProductsContext)
    let [isSticky, setIsSticky] = useState(false)

    useEffect(() => {
        const functionScroll = () => {
            let scrollControl = document.getElementById(idTest).getBoundingClientRect()
             setIsSticky(isSticky = window.scrollY >= scrollControl.y)
        }
        window.addEventListener(`scroll`, functionScroll)
    })

    return (
        <div className={style.mainDivMobile}>
            <div className={style.mainGradient}>
                <div className={style.mainDivHeader}>
                    <FullBannerMobile item={infoHeader.Banner}/>
                </div>
            </div>

            <div className={style.mainDiv}>
                <DescriptionCardFullData/>
                <div className={style.separationLine}/>
                {/*<DescriptionCardFullMobile/>*/}
                <LayoutReviewSectionMobile>
                    <LayoutWithNavCircleMobile isDarkMode={false}>
                        {
                            listReview.map((item) =>
                                <ReviewViewShort key={item.ByWho} item={item}/>
                            )
                        }
                    </LayoutWithNavCircleMobile>
                </LayoutReviewSectionMobile>
                <div className={style.separationLine}/>

                <LayoutTitleMobile isOverflow={true} title={"Happy Hour"}>
                    <LayoutCarrouselMobile gapLayout={16}>
                        {
                            listOfferProducts.InitialItems.map((item) =>
                                <ProductViewSquare key={item.Name} item={item} size={220} isDisplayOffer={true}/>
                            )
                        }
                    </LayoutCarrouselMobile>
                </LayoutTitleMobile>
                <div className={style.separationLine}/>

                <LayoutTitleMobile isOverflow={true} title={"Recomendados"}>
                    <LayoutCarrouselMobile gapLayout={16}>
                        {
                            infoRecomended.InitialItems.map((item) =>
                                <EventVerticalViewNewMob key={item.Id} item={item} darkModeState={false}/>)
                        }
                    </LayoutCarrouselMobile>
                </LayoutTitleMobile>
                <div className={style.separationLine}/>

                <NavProductsSectionMobile isSticky={isSticky}/>

                <div id={idTest}>
                    {
                        infoSectionProducts.map(item =>
                            <div key={item.Id}>
                                <ProductSectionMobile sectionProducts={item}/>
                                <div className={style.separationLine}/>
                            </div>
                        )
                    }
                </div>

                <LayoutTitleMobile isOverflow={false} title={"Preguntas"}>
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