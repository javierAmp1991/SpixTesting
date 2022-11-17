import style from "/styles/Desktop/Site/TypeSite/Bussines/Beauty&Health/mainPage.module.css"
import ReviewSectionBH from "./reviewSectionBH";
import {useContext} from "react";
import {
    HeaderDataBHContext,
    ShceduleBHContext
} from "../../../../../Providers/Site/TypeSite/Business/Beauty&Health/beautyHealthProvider";
import RecomendedBH from "./recomendedBH";
import OurServices from "./ourServices";
import QuestionBH from "./questionBH";
import HeaderBh2 from "./headerBh2";
import Reservation from "../Misc/reservation";
import {AnnouncementStyle, Schedule} from "../../../../../../Class/Site/TypeSite/Misc/globalClassSite";
import Announcement from "../../Misc/announcement";
import {PresentationCard} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import SectionProductsBH from "../Restaurant/sectionProductsBH";
import InSearchBH from "./inSearchBH";
import InOfferBH from "./inOfferBH";
import OurJobs from "./ourJobs";

const idQuestionSection: string = "idQuestionSectionBeautyAndHelath"
const announcementStyle: AnnouncementStyle = AnnouncementStyle.SiteBeautyAndHealth
const buttonReservationText: string = "Reservar Hora"


export default function MainPageBH() {
    const schedule: Schedule[] = useContext(ShceduleBHContext)
    const info: PresentationCard = useContext(HeaderDataBHContext)

    return (
        <div className={style.mainDiv}>
            <div>
                {
                    info.Announcement != null &&
                    <Announcement styleAnnouncement={announcementStyle} announcement={info.Announcement}/>
                }
                <HeaderBh2/>
            </div>

            <InOfferBH/>
            <div className={style.separationLine}/>

            <InSearchBH/>
            <div className={style.separationLine}/>

            <Reservation buttonText={buttonReservationText} item={schedule}/>
            <div className={style.separationLine}/>

            <RecomendedBH/>
            <div className={style.separationLine}/>

            <ReviewSectionBH/>
            <div className={style.separationLine}/>

            <OurJobs/>
            <div className={style.separationLine}/>

            <OurServices id={idQuestionSection}/>
            <div className={style.separationLine}/>

            <QuestionBH id={idQuestionSection}/>
            <div className={style.separationLine}/>

            <SectionProductsBH/>
        </div>
    )
}