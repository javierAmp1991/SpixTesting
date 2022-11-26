import utilities from "/styles/utilities.module.css";
import ReviewSectionBH from "./reviewSectionBH";
import {useContext} from "react";
import {
    ShceduleBHContext
} from "../../../../../Providers/Site/TypeSite/Business/Beauty&Health/beautyHealthProvider";
import RecomendedBH from "./recomendedBH";
import OurServices from "./ourServices";
import QuestionBH from "./questionBH";
import Reservation from "../Misc/reservation";
import {AnnouncementStyle, Schedule} from "../../../../../../Class/Site/TypeSite/Misc/globalClassSite";
import SectionProductsBH from "./sectionProductsBH";
import InSearchBH from "./inSearchBH";
import InOfferBH from "./inOfferBH";
import LayoutMainPageSites from "../../Misc/layoutMainPageSites";
import HeaderBeautyAndHelath from "./headerBeautyAndHelath";
import Cart, {CartProps} from "../../Misc/cart";

const idQuestionSection: string = "idQuestionSectionBeautyAndHelath"
const buttonReservationText: string = "Reservar Hora"
const isMarginBottom: boolean = true
const announcementStyle: AnnouncementStyle = AnnouncementStyle.SiteBeautyAndHealth
const idNavProductSection: string = "idProductServiceToGo"

export default function MainPageBH() {
    const schedule: Schedule[] = useContext(ShceduleBHContext)
    const cartProp: CartProps = {
        LinkToGo: "/CartPage",
        NumberItems: 0,
        IdToGo: idNavProductSection
    }

    return (
        <LayoutMainPageSites IsMarginBottom={isMarginBottom}>
            <HeaderBeautyAndHelath/>
            <div className={utilities.separationLine}/>

            <InOfferBH/>
            <div className={utilities.separationLine}/>

            <InSearchBH/>
            <div className={utilities.separationLine}/>

            <OurServices id={idQuestionSection}/>
            <div className={utilities.separationLine}/>

            <RecomendedBH/>
            <div className={utilities.separationLine}/>

            <Reservation buttonText={buttonReservationText} item={schedule}/>
            <div className={utilities.separationLine}/>

            <ReviewSectionBH/>
            <div className={utilities.separationLine}/>

            <QuestionBH id={idQuestionSection}/>
            <div className={utilities.separationLine}/>

            <SectionProductsBH/>

            <Cart item={cartProp}/>
        </LayoutMainPageSites>
    )
}