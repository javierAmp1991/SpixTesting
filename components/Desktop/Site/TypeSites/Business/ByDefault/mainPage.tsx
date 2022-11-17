import {PresentationCard} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {useContext} from "react";
import {
    PrincipalInfoByDefaultContext, SectionProductsByDefaultContext, ShceduleByDefaultContext
} from "../../../../../Providers/Site/TypeSite/Business/ByDefault/SiteBusinessByDefaultProvider";
import style from "/styles/Desktop/Site/TypeSite/Bussines/ByDefault/mainPage.module.css"
import Announcement from "../../Misc/announcement";
import {AnnouncementStyle, Schedule} from "../../../../../../Class/Site/TypeSite/Misc/globalClassSite";
import PresentationCardByDefault from "./PresentationCardByDefault";
import OurServicesByDefault from "./ourServicesByDefault";
import InOfferByDefault from "./inOfferByDefault";
import RecomendedByDefault from "./recomendedByDefault";
import InSearchByDefault from "./inSearchByDefault";
import ProductSectionBh from "../Beauty&Health/productSectionBh";
import {SectionProductItem} from "../../../../../../Class/Misc/GlobalClass";
import QuestionByDefault from "./questionByDefault";
import Reservation from "../Misc/reservation";
import ReviewSectionByDefault from "./reviewSectionByDefault";

const styleAnnouncement: AnnouncementStyle = AnnouncementStyle.SiteEvents
const idGotoQuestionByDefault: string = "idGoToQuestionByDefault00540098"

export default function MainPageByDefault() {
    const info: PresentationCard = useContext(PrincipalInfoByDefaultContext)
    const schedule: Schedule[] = useContext(ShceduleByDefaultContext)
    const sectionProducst: SectionProductItem[] = useContext(SectionProductsByDefaultContext)
    return (
        <div className={style.mainDiv}>
            <div>
                {
                    info.Announcement != null &&
                    <Announcement styleAnnouncement={styleAnnouncement} announcement={info.Announcement}/>
                }

                <PresentationCardByDefault/>
            </div>
            <div className={style.separationLine}/>

            <InSearchByDefault/>
            <div className={style.separationLine}/>

            <OurServicesByDefault id={idGotoQuestionByDefault}/>
            <div className={style.separationLine}/>

            <InOfferByDefault/>
            <div className={style.separationLine}/>

            <RecomendedByDefault/>
            <div className={style.separationLine}/>

            <Reservation item={schedule}/>
            <div className={style.separationLine}/>

            <ReviewSectionByDefault/>
            <div className={style.separationLine}/>

            <QuestionByDefault id={idGotoQuestionByDefault}/>
            <div className={style.separationLine}/>

            <div className={style.gridSectionProducts}>
                {
                    sectionProducst.map(item =>
                        <ProductSectionBh key={item.Id} sectionProducts={item}/>
                    )
                }
            </div>
        </div>
    )
}