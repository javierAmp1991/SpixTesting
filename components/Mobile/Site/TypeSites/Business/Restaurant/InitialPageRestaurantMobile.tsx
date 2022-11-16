import style from "/styles/Mobile/Site/TypeSite/Bussines/Restaurant/initialPageRestaurant.module.css"
import {SectionProductItem} from "../../../../../../Class/Misc/GlobalClass";
import {
    PresentationCard,
} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {useContext, useEffect, useState} from "react";
import {
    HeaderContext, SectionProductsContext
} from "../../../../../Providers/Site/TypeSite/Business/Restaurant/restaurantProvider";
import ProductSectionMobile from "./ProductSectionMobile";
import FullBannerMobile from "../../../../Misc/fullBannerMobile";
import DescriptionCardFullData from "./DescriptionCardFullData";
import NavProductsSectionMobile from "./navProductsSectionMobile";
import utilities from "/styles/utilities.module.css";
import NavSectionProductsRestaurantMobile from "./NavSectionProducts";
import ReservasMobile from "./reservas";
import QuestionRestaurantMobile from "./questionRestaurantMobile";
import RecommendedRestaurantMobile from "./recommendedRestaurantMobile";
import OfferRestaurantMobile from "./offerRestaurantMobile";
import ReviewSectionRestaurantMobile from "./reviewSectionRestaurant";
import InSearchRestaurantMobile from "./inSearchRestaurantMobile";
import AnnouncementMobile from "../../Misc/announcementMobile";
import {AnnouncementStyle} from "../../../../../../Class/Site/TypeSite/Misc/globalClassSite";

const idTest: string = "isTestMobileScrolControl"
const styleAnnouncement: AnnouncementStyle = AnnouncementStyle.SiteRestaurant


export default function InitialPageRestaurantMobile() {
    const infoHeader: PresentationCard = useContext(HeaderContext)
    const infoSectionProducts: SectionProductItem[] = useContext(SectionProductsContext)
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

            <AnnouncementMobile styleAnnouncement={styleAnnouncement} announcement={""}/>

            <div className={`${style.mainDiv} ${utilities.maxWidthMobile}`}>
                <DescriptionCardFullData/>
                <div className={style.separationLine}/>

                <ReviewSectionRestaurantMobile/>

                <ReservasMobile/>

                <InSearchRestaurantMobile/>

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