import style from "/styles/Mobile/Site/TypeSite/Bussines/Restaurant/initialPageRestaurant.module.css"
import {SectionProductItem} from "../../../../../../Class/Misc/GlobalClass";
import {
    PresentationCard,
} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {useContext} from "react";
import {
    HeaderContext, ScheduleContext, SectionProductsContext
} from "../../../../../Providers/Site/TypeSite/Business/Restaurant/restaurantProvider";
import ProductSectionMobile from "./ProductSectionMobile";
import DescriptionCardFullData from "./DescriptionCardFullData";
import NavProductsSectionMobile from "./navProductsSectionMobile";
import utilities from "/styles/utilities.module.css";
import NavSectionProductsRestaurantMobile from "./NavSectionProducts";
import QuestionRestaurantMobile from "./questionRestaurantMobile";
import RecommendedRestaurantMobile from "./recommendedRestaurantMobile";
import OfferRestaurantMobile from "./offerRestaurantMobile";
import ReviewSectionRestaurantMobile from "./reviewSectionRestaurant";
import InSearchRestaurantMobile from "./inSearchRestaurantMobile";
import AnnouncementMobile from "../../Misc/announcementMobile";
import {AnnouncementStyle, Schedule} from "../../../../../../Class/Site/TypeSite/Misc/globalClassSite";
import ReservationMobile from "../Misc/reservationMobile";
import LayoutMainPageSitesMobile from "../../Misc/layoutMainPageSitesMobile";
import {CartProps} from "../../../../../Desktop/Site/TypeSites/Misc/cart";
import CartMobile from "../../Misc/cartMobile";

const idTest: string = "isTestMobileScrolControl"
const styleAnnouncement: AnnouncementStyle = AnnouncementStyle.SiteRestaurant
const reservationButtonText: string = "Reserva tu mesa"
const isMarginBottom: boolean = true
const idNavProductSection: string = "idNavProductSectionRestaurant"

export default function InitialPageRestaurantMobile() {
    const infoHeader: PresentationCard = useContext(HeaderContext)
    const infoSectionProducts: SectionProductItem[] = useContext(SectionProductsContext)
    const newSchedule: Schedule[] = useContext(ScheduleContext)
    const cartProp: CartProps = {
        LinkToGo: "/CartPage",
        NumberItems: 0,
        IdToGo: idNavProductSection
    }

    return (
        <LayoutMainPageSitesMobile IsMarginButton={isMarginBottom}>
            <div>
                {/* <FullBannerMobile item={infoHeader.Banner}/>*/}
                {
                    infoHeader.Announcement != null &&
                    <AnnouncementMobile styleAnnouncement={styleAnnouncement} announcement={infoHeader.Announcement}/>
                }
                <DescriptionCardFullData/>
            </div>
            <div className={utilities.separationLine}/>

            <OfferRestaurantMobile/>
            <div className={utilities.separationLineMobile}/>

            <InSearchRestaurantMobile/>
            <div className={utilities.separationLineMobile}/>

            <div className={style.paddingGeneral}>
                <ReservationMobile buttonText={reservationButtonText} item={newSchedule}/>
            </div>
            <div className={utilities.separationLineMobile}/>

            <RecommendedRestaurantMobile/>
            <div className={utilities.separationLineMobile}/>

            <ReviewSectionRestaurantMobile/>
            <div className={utilities.separationLineMobile}/>

            <NavSectionProductsRestaurantMobile/>
            <div className={utilities.separationLineMobile}/>

            <QuestionRestaurantMobile/>

            <div id={idNavProductSection} className={style.divSectionProducts}>
                <NavProductsSectionMobile/>

                <div className={style.gridSectionProducts} id={idTest}>
                    {
                        infoSectionProducts.map(item =>
                            <ProductSectionMobile key={item.Id} sectionProducts={item}/>
                        )
                    }
                </div>
            </div>

            <CartMobile item={cartProp}/>
        </LayoutMainPageSitesMobile>

    )
}