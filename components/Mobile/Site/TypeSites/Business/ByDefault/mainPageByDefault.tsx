import AnnouncementMobile from "../../Misc/announcementMobile";
import {PresentationCard} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {useContext} from "react";
import {
    PrincipalInfoByDefaultContext, SectionProductsByDefaultContext, ShceduleByDefaultContext
} from "../../../../../Providers/Site/TypeSite/Business/ByDefault/SiteBusinessByDefaultProvider";
import {AnnouncementStyle, Schedule} from "../../../../../../Class/Site/TypeSite/Misc/globalClassSite";
import style from "/styles/Mobile/Site/TypeSite/Bussines/ByDefault/mainPage.module.css"
import InSearchByDefaultMobile from "./inSearchByDefaultMobile";
import ReviewSectionByDefaultMobile from "./reviewSectionByDefaultMobile";
import OfferByDefaultMobile from "./offerEventsByDefault";
import OtherEventsByDefaultMobile from "./otherEventsByDefault";
import ReservationMobile from "../Misc/reservationMobile";
import QuestionByDefaultMobile from "./questionByDefaultMobile";
import ProductSectionBHMobile from "../Restaurant/ProductSectionMobile";
import {SectionProductItem} from "../../../../../../Class/Misc/GlobalClass";
import LayoutMainPageSitesMobile from "../../Misc/layoutMainPageSitesMobile";
import OurServicesByDefaultMobile from "./ourServicesByDefaultMobile";
import PresentCardByDefaultMobile from "./presentCardByDefaultMobile";
import utilities from "*.module.css";

const announcementStyle: AnnouncementStyle = AnnouncementStyle.SiteByDefault
const idQuestionSection: string = "idQuestionSectionByDefaultMobile"
const buttonReservationText: string = "Reserva tu hora"
const isMarginBottom: boolean = true

export default function MainPageByDefaultMobile() {
    const info: PresentationCard = useContext(PrincipalInfoByDefaultContext)
    const schedule: Schedule[] = useContext(ShceduleByDefaultContext)
    const sectionProducst: SectionProductItem[] = useContext(SectionProductsByDefaultContext)
    return (
        <LayoutMainPageSitesMobile IsMarginButton={isMarginBottom}>
            <div>

                {
                    info.Announcement != null &&
                    <AnnouncementMobile announcement={info.Announcement} styleAnnouncement={announcementStyle}/>
                }

                <PresentCardByDefaultMobile/>
            </div>
            <div className={utilities.separationLineMobile}/>

            <OfferByDefaultMobile/>
            <div className={utilities.separationLineMobile}/>

            <div className={style.paddingGeneral}>
                <InSearchByDefaultMobile/>
            </div>
            <div className={utilities.separationLineMobile}/>

            <div className={style.paddingGeneral}>
                <ReservationMobile buttonText={buttonReservationText} item={schedule}/>
            </div>
            <div className={utilities.separationLineMobile}/>

            <OtherEventsByDefaultMobile/>
            <div className={utilities.separationLineMobile}/>

            <ReviewSectionByDefaultMobile/>
            <div className={utilities.separationLineMobile}/>

            <div className={style.paddingGeneral}>
                <OurServicesByDefaultMobile id={idQuestionSection}/>
            </div>
            <div className={utilities.separationLineMobile}/>

            <QuestionByDefaultMobile id={idQuestionSection}/>
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