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

const announcementStyle: AnnouncementStyle = AnnouncementStyle.SiteByDefault
const idQuestionSection: string = "idQuestionSectionByDefaultMobile"
const buttonReservationText: string = "Reservar hora"

export default function MainPageByDefaultMobile() {
    const info: PresentationCard = useContext(PrincipalInfoByDefaultContext)
    const schedule: Schedule[] = useContext(ShceduleByDefaultContext)
    const sectionProducst: SectionProductItem[] = useContext(SectionProductsByDefaultContext)
    return (
        <>
            {
                info.Announcement != null &&
                <AnnouncementMobile announcement={info.Announcement} styleAnnouncement={announcementStyle}/>
            }
            <div className={style.mainDiv}>
                <div className={style.paddingGeneral}>
                    <InSearchByDefaultMobile/>
                </div>

                <ReviewSectionByDefaultMobile/>

                <OfferByDefaultMobile/>

                <OtherEventsByDefaultMobile/>

                <div className={style.paddingGeneral}>
                    <ReservationMobile buttonText={buttonReservationText} item={schedule}/>
                </div>

                <QuestionByDefaultMobile id={idQuestionSection}/>

                <div className={style.gridSectionProducts}>
                    {
                        sectionProducst.map(item =>
                            <ProductSectionBHMobile key={item.Id} sectionProducts={item}/>
                        )
                    }
                </div>
            </div>
        </>
    )
}