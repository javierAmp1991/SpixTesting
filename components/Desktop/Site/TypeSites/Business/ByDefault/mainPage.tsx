import {useContext} from "react";
import utilities from "/styles/utilities.module.css";
import {
    SectionProductsByDefaultContext, ShceduleByDefaultContext
} from "../../../../../Providers/Site/TypeSite/Business/ByDefault/SiteBusinessByDefaultProvider";
import style from "/styles/Desktop/Site/TypeSite/Bussines/ByDefault/mainPage.module.css"
import {Schedule} from "../../../../../../Class/Site/TypeSite/Misc/globalClassSite";
import OurServicesByDefault from "./ourServicesByDefault";
import InOfferByDefault from "./inOfferByDefault";
import RecomendedByDefault from "./recomendedByDefault";
import InSearchByDefault from "./inSearchByDefault";
import ProductSectionBh from "../Beauty&Health/productSectionBh";
import {SectionProductItem} from "../../../../../../Class/Misc/GlobalClass";
import QuestionByDefault from "./questionByDefault";
import Reservation from "../Misc/reservation";
import ReviewSectionByDefault from "./reviewSectionByDefault";
import LayoutMainPageSites from "../../Misc/layoutMainPageSites";
import HeaderByDefault from "./headerByDefault";

const idGotoQuestionByDefault: string = "idGoToQuestionByDefault00540098"
const buttonReservationText: string = "Reservar hora"
const isMarginBottom: boolean = true

export default function MainPageByDefault() {
    const schedule: Schedule[] = useContext(ShceduleByDefaultContext)
    const sectionProducst: SectionProductItem[] = useContext(SectionProductsByDefaultContext)
    return (
        <LayoutMainPageSites IsMarginBottom={isMarginBottom}>

            <HeaderByDefault/>
            <div className={utilities.separationLine}/>

            <InSearchByDefault/>
            <div className={utilities.separationLine}/>

            <OurServicesByDefault id={idGotoQuestionByDefault}/>
            <div className={utilities.separationLine}/>

            <InOfferByDefault/>
            <div className={utilities.separationLine}/>

            <RecomendedByDefault/>
            <div className={utilities.separationLine}/>

            <Reservation buttonText={buttonReservationText} item={schedule}/>
            <div className={utilities.separationLine}/>

            <ReviewSectionByDefault/>
            <div className={utilities.separationLine}/>

            <QuestionByDefault id={idGotoQuestionByDefault}/>
            <div className={utilities.separationLine}/>

            <div className={style.gridSectionProducts}>
                {
                    sectionProducst.map(item =>
                        <ProductSectionBh key={item.Id} sectionProducts={item}/>
                    )
                }
            </div>
        </LayoutMainPageSites>
    )
}