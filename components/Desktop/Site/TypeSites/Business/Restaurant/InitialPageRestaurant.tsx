import {SectionProductItem} from "../../../../../../Class/Misc/GlobalClass";
import {useContext} from "react";
import {
    HeaderContext,
    ScheduleContext,
    SectionProductsContext
} from "../../../../../Providers/Site/TypeSite/Business/Restaurant/restaurantProvider";
import NavProductsSection from "./navProductsSection";
import InSearchRestaurant from "./inSearch";
import ReviewRestaurant from "./reviewRestaurant";
import InOfferRestaurant from "./inOfferRestaurant";
import RecomendedRestarant from "./recomendedRestarant";
import QuestionRestaurant from "./questionRestaurant";
import NavSectionProducts from "../Default/NavSectionProducts";
import {AnnouncementStyle, Schedule} from "../../../../../../Class/Site/TypeSite/Misc/globalClassSite";
import Reservation from "../Misc/reservation";
import SectionProductsRestaurant from "./sectionProductsRestaurant";
import LayoutMainPageSites from "../../Misc/layoutMainPageSites";
import utilities from "/styles/utilities.module.css";
import HeaderSiteRestaurant from "./headerSiteRestaurant";
import Announcement from "../../Misc/announcement";
import DescriptionCardFull from "./DescriptionCardFull";
import {PresentationCard} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";

const buttonReservationText: string = "Reservar Mesa"
const isMarginBottom: boolean = true
const styleAnnouncement: AnnouncementStyle = AnnouncementStyle.SiteRestaurant

export default function InitialPageRestaurant() {
    const infoSectionProducts: SectionProductItem[] = useContext(SectionProductsContext)
    const schedule: Schedule[] = useContext(ScheduleContext)
    const infoHeader: PresentationCard = useContext(HeaderContext)
    return (
        <>
           {/* {
                infoHeader.Announcement != null &&
                <Announcement styleAnnouncement={styleAnnouncement} announcement={infoHeader.Announcement}/>
            }*/}
            <LayoutMainPageSites IsMarginBottom={isMarginBottom}>
                <DescriptionCardFull/>

                <div className={utilities.separationLine}/>

                <InOfferRestaurant/>
                <div className={utilities.separationLine}/>

                <InSearchRestaurant/>
                <div className={utilities.separationLine}/>

                <Reservation buttonText={buttonReservationText} item={schedule}/>
                <div className={utilities.separationLine}/>

                <RecomendedRestarant/>
                <div className={utilities.separationLine}/>

                <ReviewRestaurant/>
                <div className={utilities.separationLine}/>

                <NavSectionProducts item={infoSectionProducts}/>
                <div className={utilities.separationLine}/>

                <QuestionRestaurant/>
                <div className={utilities.separationLine}/>

                <NavProductsSection/>
                <div className={utilities.separationLine}/>

                <SectionProductsRestaurant/>
            </LayoutMainPageSites>
        </>
    )
}