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
const isMarginBottom: boolean = false

export default function MainPage() {
    return (
        <>
            <BannerSiteEvents/>
            <LayoutMainPageSites IsMarginBottom={isMarginBottom}>
                <HeaderSiteEvents/>

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