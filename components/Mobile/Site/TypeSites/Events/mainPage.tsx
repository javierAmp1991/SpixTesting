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

export default function MainPageMobile() {
    const info: PrincipalInfoEvent = useContext(PrincipalInfoEventContext)
    const infoSectionProducts: SectionProductItem[] = useContext(SectionProductsEventContext)
    return (
        <>
            <FullBannerMobile item={info.PathBanner}/>
            <AnnouncementMobile/>
            <div className={`${style.mainDiv} ${utilities.maxWidthMobile}`}>
                <InformationImages/>
                <div className={style.separationLine}/>
                <TicketsSectionMobile/>
                <div className={style.separationLine}/>
                <InSearch/>
                <div className={style.separationLine}/>
                <OfferEventsMobile/>
                <OtherEvents/>
                <QuestionSectionMobile/>
                <div className={style.gridSectionProducts}>
                    {
                        infoSectionProducts.map(item =>
                            <ProductSectionMobile key={item.Id} sectionProducts={item}/>
                        )
                    }
                </div>
            </div>
            <FooterMobile/>
        </>
    )
}