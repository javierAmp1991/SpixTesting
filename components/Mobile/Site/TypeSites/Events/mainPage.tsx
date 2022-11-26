import style from "/styles/Mobile/Site/TypeSite/Events/mainPage.module.css"
import FullBannerMobile from "../../../Misc/fullBannerMobile";
import {PrincipalInfoEvent} from "../../../../../Class/Site/TypeSite/Events/events";
import {useContext} from "react";
import {
    PrincipalInfoEventContext,
    SectionProductsEventContext
} from "../../../../Providers/Site/TypeSite/Events/eventProvider";
import InformationImages from "./informationImages";
import InSearch from "./inSearch";
import OfferEventsMobile from "./offerEvents";
import OtherEvents from "./otherEvents";
import QuestionSectionMobile from "./questionSection";
import FooterMobile from "../../../EventPage/footerMobile";
import utilities from "/styles/utilities.module.css";
import TicketsSectionMobile from "./ticketsSection";
import ProductSectionMobile from "../Business/Restaurant/ProductSectionMobile";
import {SectionProductItem} from "../../../../../Class/Misc/GlobalClass";
import AnnouncementMobile from "../Misc/announcementMobile";
import {AnnouncementStyle} from "../../../../../Class/Site/TypeSite/Misc/globalClassSite";
import LayoutMainPageSitesMobile from "../Misc/layoutMainPageSitesMobile";
import CartMobile from "../Misc/cartMobile";
import {CartProps} from "../../../../Desktop/Site/TypeSites/Misc/cart";

const idNavProductSection: string = "idProductEventToGo"
const cartProp: CartProps = {
    LinkToGo: "/CartPage",
    NumberItems: 0,
    IdToGo: idNavProductSection
}

const announcementStyle: AnnouncementStyle = AnnouncementStyle.SiteEvents
const isMarginBottom: boolean = false

export default function MainPageMobile() {
    const info: PrincipalInfoEvent = useContext(PrincipalInfoEventContext)
    const infoSectionProducts: SectionProductItem[] = useContext(SectionProductsEventContext)
    return (
        <>
            <FullBannerMobile item={info.PathBanner}/>
            {info.Announcement != null &&
                <AnnouncementMobile announcement={info.Announcement} styleAnnouncement={announcementStyle}/>
            }
            <LayoutMainPageSitesMobile IsMarginButton={isMarginBottom}>
                <InformationImages/>
                <div className={utilities.separationLineMobile}/>
                <div className={"overflow-scroll"} id={idNavProductSection}>
                    <OfferEventsMobile/>
                </div>
                <div className={utilities.separationLineMobile}/>
                <InSearch/>
                <div className={utilities.separationLineMobile}/>
                <TicketsSectionMobile/>
                <div className={utilities.separationLineMobile}/>
                <OtherEvents/>
                <div className={utilities.separationLineMobile}/>
                <QuestionSectionMobile/>
                <div className={utilities.separationLineMobile}/>
                <div className={style.gridSectionProducts}>
                    {
                        infoSectionProducts.map(item =>
                            <ProductSectionMobile key={item.Id} sectionProducts={item}/>
                        )
                    }
                </div>
                <FooterMobile/>
            </LayoutMainPageSitesMobile>
            <CartMobile item={cartProp}/>
        </>
    )
}