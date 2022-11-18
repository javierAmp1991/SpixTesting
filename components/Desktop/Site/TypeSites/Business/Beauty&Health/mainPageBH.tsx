import utilities from "/styles/utilities.module.css";
import ReviewSectionBH from "./reviewSectionBH";
import {useContext} from "react";
import {ShceduleBHContext} from "../../../../../Providers/Site/TypeSite/Business/Beauty&Health/beautyHealthProvider";
import RecomendedBH from "./recomendedBH";
import OurServices from "./ourServices";
import QuestionBH from "./questionBH";
import Reservation from "../Misc/reservation";
import {Schedule} from "../../../../../../Class/Site/TypeSite/Misc/globalClassSite";
import SectionProductsBH from "./sectionProductsBH";
import InSearchBH from "./inSearchBH";
import InOfferBH from "./inOfferBH";
import OurJobs from "./ourJobs";
import LayoutMainPageSites from "../../Misc/layoutMainPageSites";
import HeaderBeautyAndHelath from "./headerBeautyAndHelath";

const idQuestionSection: string = "idQuestionSectionBeautyAndHelath"
const buttonReservationText: string = "Reservar Hora"
const isMarginBottom: boolean = true

export default function MainPageBH() {
    const schedule: Schedule[] = useContext(ShceduleBHContext)
    return (
        <LayoutMainPageSites IsMarginBottom={isMarginBottom}>
            <HeaderBeautyAndHelath/>
            <div className={utilities.separationLine}/>

            <InOfferBH/>
            <div className={utilities.separationLine}/>

            <InSearchBH/>
            <div className={utilities.separationLine}/>

            <Reservation buttonText={buttonReservationText} item={schedule}/>
            <div className={utilities.separationLine}/>

            <RecomendedBH/>
            <div className={utilities.separationLine}/>

            <ReviewSectionBH/>
            <div className={utilities.separationLine}/>

            <OurJobs/>
            <div className={utilities.separationLine}/>

            <OurServices id={idQuestionSection}/>
            <div className={utilities.separationLine}/>

            <QuestionBH id={idQuestionSection}/>
            <div className={utilities.separationLine}/>

            <SectionProductsBH/>
        </LayoutMainPageSites>
    )
}