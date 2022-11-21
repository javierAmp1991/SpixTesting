import style from "/styles/Mobile/Site/TypeSite/Bussines/Beauty&Health/mainPage.module.css"
import {SectionProductItem} from "../../../../../../Class/Misc/GlobalClass";
import {useContext} from "react";
import {
    HeaderDataBHContext,
    SectionProductsBHContext, ShceduleBHContext
} from "../../../../../Providers/Site/TypeSite/Business/Beauty&Health/beautyHealthProvider";
import HeaderBhMobile from "./headerBhMobile";
import ReviewSectionBHMobile from "./reviewSectionBHMobile";
import InSearchBhMobile from "./inSearchBhMobile";
import OurServicesMobile from "./ourServicesMobile";
import OtherEventsBH from "./otherEventsBH";
import OfferBHMobile from "./offerEventsBH";
import ProductSectionBHMobile from "../Restaurant/ProductSectionMobile";
import ReservationMobile from "../Misc/reservationMobile";
import {AnnouncementStyle, Schedule} from "../../../../../../Class/Site/TypeSite/Misc/globalClassSite";
import QuestionBHMobile from "./questionBHMobile";
import AnnouncementMobile from "../../Misc/announcementMobile";
import {PresentationCard} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import OurJobsMobile from "./ourJobsMobile";
import LayoutMainPageSitesMobile from "../../Misc/layoutMainPageSitesMobile";
import utilities from "/styles/utilities.module.css";

const idQuestionSection: string = "idQuestionSectionBeautyAndHelathMobile"
const announcementStyle: AnnouncementStyle = AnnouncementStyle.SiteBeautyAndHealth
const reservationButtonText: string = "Reserva tu hora"
const isMarginButton: boolean = true

export default function MainPageBHMobile() {
    const sectionProducst: SectionProductItem[] = useContext(SectionProductsBHContext)
    const schedule: Schedule[] = useContext(ShceduleBHContext)
    const info: PresentationCard = useContext(HeaderDataBHContext)

    return (
        <LayoutMainPageSitesMobile IsMarginButton={isMarginButton}>
            <div>
                {
                    info.Announcement != null &&
                    <AnnouncementMobile announcement={info.Announcement} styleAnnouncement={announcementStyle}/>
                }
                <HeaderBhMobile/>
            </div>
            <div className={utilities.separationLineMobile}/>

            <OfferBHMobile/>
            <div className={utilities.separationLineMobile}/>

            <div className={style.paddingGeneral}>
                <InSearchBhMobile/>
            </div>
            <div className={utilities.separationLineMobile}/>

            <div className={style.paddingGeneral}>
                <ReservationMobile buttonText={reservationButtonText} item={schedule}/>
            </div>
            <div className={utilities.separationLineMobile}/>

            <OtherEventsBH/>
            <div className={utilities.separationLineMobile}/>

            <ReviewSectionBHMobile/>
            <div className={utilities.separationLineMobile}/>

            <div className={style.paddingGeneral}>
                <OurServicesMobile id={idQuestionSection}/>
            </div>
            <div className={utilities.separationLineMobile}/>

            <OurJobsMobile/>
            <div className={utilities.separationLineMobile}/>

            <QuestionBHMobile id={idQuestionSection}/>
            <div className={utilities.separationLineMobile}/>

            <div className={style.gridSectionProducts}>
                {
                    sectionProducst.map(item =>
                        <ProductSectionBHMobile key={item.Id} sectionProducts={item}/>
                    )
                }
            </div>
        </LayoutMainPageSitesMobile>
    )
}