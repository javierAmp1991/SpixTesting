import FooterDesk from "../../../EventPage/footerDesk";
import TicketsSection from "./ticketsSection";
import InSearch from "./inSearch";
import OfferProducts from "./offerProducts";
import OtherEvents from "./otherEvents";
import QuestionSection from "./questionSection";
import SectionProductsSiteEvents from "./sectionProductsSiteEvents";
import HeaderSiteEvents from "./headerSiteEvents";
import BannerSiteEvents from "./bannerSiteEvents";
import LayoutMainPageSites from "../Misc/layoutMainPageSites";
import utilities from "/styles/utilities.module.css";
import Announcement from "../Misc/announcement";
import PresentCard2 from "./presentCard2";
import {PrincipalInfoEvent} from "../../../../../Class/Site/TypeSite/Events/events";
import {useContext} from "react";
import {PrincipalInfoEventContext} from "../../../../Providers/Site/TypeSite/Events/eventProvider";
import {AnnouncementStyle} from "../../../../../Class/Site/TypeSite/Misc/globalClassSite";

const isMarginBottom: boolean = false
const announcementStyle: AnnouncementStyle = AnnouncementStyle.SiteEvents


export default function MainPage() {
    const info: PrincipalInfoEvent = useContext(PrincipalInfoEventContext)

    return (
        <>
            <BannerSiteEvents/>
            <LayoutMainPageSites IsMarginBottom={isMarginBottom}>
                <PresentCard2/>
                <div className={utilities.separationLine}/>

                <OfferProducts/>
                <div className={utilities.separationLine}/>

                <InSearch/>
                <div className={utilities.separationLine}/>

                <TicketsSection/>
                <div className={utilities.separationLine}/>

                <OtherEvents/>
                <div className={utilities.separationLine}/>

                <QuestionSection/>
                <div className={utilities.separationLine}/>

                <SectionProductsSiteEvents/>
                <FooterDesk/>
            </LayoutMainPageSites>
        </>
    )
}