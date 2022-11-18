import {SectionProductItem} from "../../../../../../Class/Misc/GlobalClass";
import {useContext} from "react";
import {
    ScheduleContext,
    SectionProductsContext
} from "../../../../../Providers/Site/TypeSite/Business/Restaurant/restaurantProvider";
import NavProductsSection from "./navProductsSection";
import InSearchRestaurant from "./inSearch";
import ReviewRestaurant from "./reviewRestaurant";
import InOfferRestaurant from "./inOfferRestaurant";
import RecomendedRestarant from "./recomendedRestarant";
import QuestionRestaurant from "./questionRestaurant";
import NavSectionProducts from "../Default/NavSectionProducts";
import {Schedule} from "../../../../../../Class/Site/TypeSite/Misc/globalClassSite";
import Reservation from "../Misc/reservation";
import SectionProductsRestaurant from "./sectionProductsRestaurant";
import LayoutMainPageSites from "../../Misc/layoutMainPageSites";
import utilities from "/styles/utilities.module.css";
import HeaderSiteRestaurant from "./headerSiteRestaurant";

const buttonReservationText: string = "Reservar Mesa"
const isMarginBottom: boolean = true

export default function InitialPageRestaurant() {
    const infoSectionProducts: SectionProductItem[] = useContext(SectionProductsContext)
    const schedule: Schedule[] = useContext(ScheduleContext)
    return (

        <LayoutMainPageSites IsMarginBottom={isMarginBottom}>
            <HeaderSiteRestaurant/>
            <div className={utilities.separationLine}/>

            <InOfferRestaurant/>
            <div className={utilities.separationLine}/>

            <InSearchRestaurant/>
            <div className={utilities.separationLine}/>

            <Reservation buttonText={buttonReservationText} item={schedule}/>
            <div className={utilities.separationLine}/>

            <RecomendedRestarant/>
            <div className={utilities.separationLine}/>

            <ReviewRestaurant/>
            <div className={utilities.separationLine}/>

            <NavSectionProducts item={infoSectionProducts}/>
            <div className={utilities.separationLine}/>

            <QuestionRestaurant/>
            <div className={utilities.separationLine}/>

            <NavProductsSection/>
            <div className={utilities.separationLine}/>

            <SectionProductsRestaurant/>
        </LayoutMainPageSites>
    )
}