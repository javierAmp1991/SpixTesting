import style from "/styles/Mobile/Site/TypeSite/Bussines/Restaurant/initialPageRestaurant.module.css"
import {SectionProductItem} from "../../../../../../Class/Misc/GlobalClass";
import {
    PresentationCard, ProviderReview
} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {useContext, useEffect, useState} from "react";
import {
    FormContext, HeaderContext, ReviewsSectionContext, SectionProductsContext
} from "../../../../../Providers/Site/TypeSite/Business/Restaurant/restaurantProvider";
import LayoutTitleMobile from "./layoutTitleMobile";
import LayoutReviewSectionMobile from "./layoutReviewSectionMobile";
import ProductSectionMobile from "./ProductSectionMobile";
import FullBannerMobile from "../../../../Misc/fullBannerMobile";
import LayoutWithNavCircleMobile from "../../../../Layouts/layoutWithNavCircleMobile";
import DescriptionCardFullData from "./DescriptionCardFullData";
import NavProductsSectionMobile from "./navProductsSectionMobile";
import ReviewViewShortMobile from "../../../../Misc/ReviewViewShortMobile";
import {FormLink} from "../../../../../../dataDemo/data";
import FormViewMobile from "../../../../Misc/formViewMobile";
import utilities from "/styles/utilities.module.css";
import NavSectionProductsRestaurantMobile from "./NavSectionProducts";
import ReservasMobile from "./reservas";
import QuestionRestaurantMobile from "./questionRestaurantMobile";
import RecommendedRestaurantMobile from "./recommendedRestaurantMobile";
import OfferRestaurantMobile from "./offerRestaurantMobile";

const idTest: string = "isTestMobileScrolControl"

export default function InitialPageRestaurantMobile() {
    const form: FormLink[] = useContext(FormContext)
    const infoHeader: PresentationCard = useContext(HeaderContext)
    const infoSectionProducts: SectionProductItem[] = useContext(SectionProductsContext)
    const listReview: ProviderReview = useContext(ReviewsSectionContext)
    let [hasBeenReached, setHasBeenReached] = useState(false)
    let [startSectionProduct, setStartSectionProduct] = useState(0)

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

        <div className={style.mainDivMobile}>
            <div className={style.mainGradient}>
                <div className={style.mainDivHeader}>
                    <FullBannerMobile item={infoHeader.Banner}/>
                </div>
            </div>

            <div className={`${style.mainDiv} ${utilities.maxWidthMobile}`}>
                <DescriptionCardFullData/>
                <div className={style.separationLine}/>

                <LayoutReviewSectionMobile>
                    <LayoutWithNavCircleMobile isDarkMode={false}>
                        {
                            listReview.InitialReview.map((item) =>
                                <ReviewViewShortMobile key={item.ByWho} item={item}/>
                            )
                        }
                    </LayoutWithNavCircleMobile>
                </LayoutReviewSectionMobile>

                <div className={style.paddingGeneral}>
                    <LayoutTitleMobile title={"Se Busca"} isOverflow={true}>
                        <LayoutWithNavCircleMobile isDarkMode={false}>
                            {
                                form.map(item =>
                                    <FormViewMobile key={item.text} item={item}/>)
                            }
                        </LayoutWithNavCircleMobile>
                    </LayoutTitleMobile>
                </div>

                <ReservasMobile/>


                <NavSectionProductsRestaurantMobile/>

                <OfferRestaurantMobile/>

                <RecommendedRestaurantMobile/>

                <QuestionRestaurantMobile/>

                <NavProductsSectionMobile isSticky={hasBeenReached}/>

                <div className={style.gridSectionProducts} id={idTest}>
                    {
                        infoSectionProducts.map(item =>
                            <ProductSectionMobile key={item.Id} sectionProducts={item}/>
                        )
                    }
                </div>

            </div>
        </div>
    )
}