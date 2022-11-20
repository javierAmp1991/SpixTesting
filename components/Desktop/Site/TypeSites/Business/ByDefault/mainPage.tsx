import {useContext} from "react";
import utilities from "/styles/utilities.module.css";
import {
    PrincipalInfoByDefaultContext, ShceduleByDefaultContext
} from "../../../../../Providers/Site/TypeSite/Business/ByDefault/SiteBusinessByDefaultProvider";
import {AnnouncementStyle, Schedule} from "../../../../../../Class/Site/TypeSite/Misc/globalClassSite";
import OurServicesByDefault from "./ourServicesByDefault";
import InOfferByDefault from "./inOfferByDefault";
import RecomendedByDefault from "./recomendedByDefault";
import InSearchByDefault from "./inSearchByDefault";
import QuestionByDefault from "./questionByDefault";
import Reservation from "../Misc/reservation";
import ReviewSectionByDefault from "./reviewSectionByDefault";
import LayoutMainPageSites from "../../Misc/layoutMainPageSites";
import SectionProductsByDefault from "./sectionProductsByDefault";
import Announcement from "../../Misc/announcement";
import {PresentationCard} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import PresentationCardByDefault from "./PresentationCardByDefault";

const idGotoQuestionByDefault: string = "idGoToQuestionByDefault00540098"
const buttonReservationText: string = "Reservar hora"
const isMarginBottom: boolean = true
const styleAnnouncement: AnnouncementStyle = AnnouncementStyle.SiteEvents


export default function MainPageByDefault() {
    const schedule: Schedule[] = useContext(ShceduleByDefaultContext)
    const info: PresentationCard = useContext(PrincipalInfoByDefaultContext)
    return (
        <>
            {
                info.Announcement != null &&
                <Announcement styleAnnouncement={styleAnnouncement} announcement={info.Announcement}/>
            }
            <LayoutMainPageSites IsMarginBottom={isMarginBottom}>
                <PresentationCardByDefault/>
                <div className={utilities.separationLine}/>


                <InOfferByDefault/>
                <div className={utilities.separationLine}/>

                <InSearchByDefault/>
                <div className={utilities.separationLine}/>

                <Reservation buttonText={buttonReservationText} item={schedule}/>
                <div className={utilities.separationLine}/>

                <RecomendedByDefault/>
                <div className={utilities.separationLine}/>

                <ReviewSectionByDefault/>
                <div className={utilities.separationLine}/>

                <OurServicesByDefault id={idGotoQuestionByDefault}/>
                <div className={utilities.separationLine}/>

                <QuestionByDefault id={idGotoQuestionByDefault}/>
                <div className={utilities.separationLine}/>

                <SectionProductsByDefault/>
            </LayoutMainPageSites>
        </>

    )
}