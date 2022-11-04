import NewLayoutSideCard from "../../../Layouts/newLayoutSideCard";
import SideCard from "./sideCard";
import style from "/styles/Desktop/Site/TypeSite/Events/mainPage.module.css"
import MainCard from "./mainCard";
import FooterDesk from "../../../EventPage/footerDesk";
import {PrincipalInfoEvent} from "../../../../../Class/Site/TypeSite/Events/events";
import {useContext} from "react";
import {PrincipalInfoEventContext} from "../../../../Providers/Site/TypeSite/Events/eventProvider";
import BannerVar from "../../../Misc/bannerVar";
import NavMenuScrollTo from "../../../Misc/navMenuScrollTo";
import {NavBarEventsSections} from "../../../../../Class/Misc/GlobalClass";

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

export default function MainPage() {
    const info: PrincipalInfoEvent = useContext(PrincipalInfoEventContext)
    return (
        <>
            <div className={"relative"}>
                <BannerVar item={info.PathBanner} size={`40vh`}/>
                {/*<NavMenuScrollTo idItems={idSectionsNew}/>*/}
            </div>
            <div className={style.mainDiv}>
                <MainCard/>
                <FooterDesk/>
            </div>
        </>
    )
}