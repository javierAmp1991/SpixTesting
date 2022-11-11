import style from "/styles/Desktop/Site/TypeSite/Events/mainPage.module.css"
import {PrincipalInfoEventContext} from "../../../../Providers/Site/TypeSite/Events/eventProvider";
import {PrincipalInfoEvent} from "../../../../../Class/Site/TypeSite/Events/events";
import {useContext} from "react";
import {NavBarEventsSections} from "../../../../../Class/Misc/GlobalClass";
import BannerVar from "../../../Misc/bannerVar";
import FooterDesk from "../../../EventPage/footerDesk";
import PresentCard2 from "./presentCard2";
import TicketsSection from "./ticketsSection";
import InSearch from "./inSearch";
import OfferProducts from "./offerProducts";
import OtherEvents from "./otherEvents";
import Products from "./products";
import QuestionSection from "./questionSection";

const idSectionsNew: NavBarEventsSections[] = [
    {
        Id: "idTicketsDefault",
        IdToGo: "idTicketsDefaultToGo",
        Name: "Tickets"
    },
    {
        Id: "idOfferDefault",
        IdToGo: "idOfferDefaultToGo",
        Name: "Ofertas"
    },
    {
        Id: "idRecommendedDefault",
        IdToGo: "idRecommendedDefaultToGo",
        Name: "Otros Eventos"
    },
    {
        Id: "idProductsDefault",
        IdToGo: "idProductsDefaultToGo",
        Name: "Productos"
    },
    {
        Id: "idReviewDefault",
        IdToGo: "idReviewDefaultToGo",
        Name: "Reviews"
    },
    {
        Id: "idQuestionDefault",
        IdToGo: "idQuestionDefaultToGo",
        Name: "Preguntas"
    },
    {
        Id: "idNewsDefault",
        IdToGo: "idNewsDefaultToGo",
        Name: "Noticias"
    }
]
const sizeBanner: string = `40vh`

export default function MainPage() {
    const info: PrincipalInfoEvent = useContext(PrincipalInfoEventContext)
    return (
        <>
            <BannerVar item={info.PathBanner} size={sizeBanner}/>
            <div className={style.mainDiv}>
                <div className={style.mainCard}>
                    <PresentCard2/>
                    <div className={style.separationLine}/>
                    <TicketsSection/>
                    <div className={style.separationLine}/>
                    <InSearch/>
                    <div className={style.separationLine}/>
                    <OfferProducts/>
                    <div className={style.separationLine}/>
                    <OtherEvents/>
                    <div className={style.separationLine}/>
                    <Products/>
                    <div className={style.separationLine}/>
                    <QuestionSection/>
                </div>
                <FooterDesk/>
            </div>
        </>
    )
}