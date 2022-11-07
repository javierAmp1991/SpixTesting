import style from "/styles/Mobile/Site/TypeSite/Events/mainPage.module.css"
import FullBannerMobile from "../../../Misc/fullBannerMobile";
import {PrincipalInfoEvent} from "../../../../../Class/Site/TypeSite/Events/events";
import {useContext} from "react";
import {PrincipalInfoEventContext} from "../../../../Providers/Site/TypeSite/Events/eventProvider";
import InformationImages from "./informationImages";
import InSearch from "./inSearch";
import OfferEventsMobile from "./offerEvents";
import ProductsEventMobile from "./productsEventMobile";
import OtherEvents from "./otherEvents";
import ReviewSectionMobile from "./reviewSection";
import QuestionSectionMobile from "./questionSection";
import FooterMobile from "../../../EventPage/footerMobile";
import utilities from "/styles/utilities.module.css";
import TicketsSectionMobile from "./ticketsSection";

export default function MainPageMobile() {
    const info: PrincipalInfoEvent = useContext(PrincipalInfoEventContext)
    return (
        <>
            <FullBannerMobile item={info.PathBanner}/>
            <div className={`${style.mainDiv} ${utilities.maxWidthMobile}`}>
                <InformationImages/>
                <div className={style.separationLine}/>
                <TicketsSectionMobile/>
                <InSearch/>
                <OfferEventsMobile/>
                <OtherEvents/>
                <ProductsEventMobile/>
                <QuestionSectionMobile/>
            </div>
            <FooterMobile/>
        </>
    )
}