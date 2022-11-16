import style from "/styles/Desktop/Site/TypeSite/Events/mainPage.module.css"
import {
    PrincipalInfoEventContext,
    SectionProductsEventContext
} from "../../../../Providers/Site/TypeSite/Events/eventProvider";
import {PrincipalInfoEvent} from "../../../../../Class/Site/TypeSite/Events/events";
import {useContext} from "react";
import {SectionProductItem} from "../../../../../Class/Misc/GlobalClass";
import BannerVar from "../../../Misc/bannerVar";
import FooterDesk from "../../../EventPage/footerDesk";
import PresentCard2 from "./presentCard2";
import TicketsSection from "./ticketsSection";
import InSearch from "./inSearch";
import OfferProducts from "./offerProducts";
import OtherEvents from "./otherEvents";
import QuestionSection from "./questionSection";
import ProductSection from "../Business/Restaurant/ProductSection";
import Announcement from "../Misc/announcement";
import {AnnouncementStyle} from "../../../../../Class/Site/TypeSite/Misc/globalClassSite";

const sizeBanner: string = `40vh`
const announcementStyle: AnnouncementStyle = AnnouncementStyle.SiteEvents

export default function MainPage() {
    const info: PrincipalInfoEvent = useContext(PrincipalInfoEventContext)
    const infoSectionProducts: SectionProductItem[] = useContext(SectionProductsEventContext)
    return (
        <>
            <BannerVar item={info.PathBanner} size={sizeBanner}/>
            <div className={style.mainDiv}>
                <div className={style.mainCard}>
                    <div>
                        <Announcement styleAnnouncement={announcementStyle} announcement={""}/>
                        <PresentCard2/>
                    </div>
                    <InSearch/>
                    <div className={style.separationLine}/>
                    <TicketsSection/>
                    <div className={style.separationLine}/>
                    <OfferProducts/>
                    <div className={style.separationLine}/>
                    <OtherEvents/>
                    <div className={style.separationLine}/>
                    <QuestionSection/>
                    <div className={style.separationLine}/>
                    <div className={style.gridSectionProducts}>
                        {
                            infoSectionProducts.map(item =>
                                <ProductSection key={item.Id} sectionProducts={item}/>
                            )
                        }
                    </div>
                </div>
                <FooterDesk/>
            </div>
        </>
    )
}