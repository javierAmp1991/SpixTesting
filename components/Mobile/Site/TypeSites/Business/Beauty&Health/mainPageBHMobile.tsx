import style from "/styles/Mobile/Site/TypeSite/Bussines/Beauty&Health/mainPage.module.css"
import {SectionProductItem} from "../../../../../../Class/Misc/GlobalClass";
import {useContext} from "react";
import {
    SectionProductsBHContext, ShceduleBHContext
} from "../../../../../Providers/Site/TypeSite/Business/Beauty&Health/beautyHealthProvider";
import HeaderBhMobile from "./headerBhMobile";
import OurJobsMobile from "./ourJobsMobile";
import ReviewSectionBHMobile from "./reviewSectionBHMobile";
import InSearchBhMobile from "./inSearchBhMobile";
import OurServicesMobile from "./ourServicesMobile";
import OtherEventsBH from "./otherEventsBH";
import OfferBHMobile from "./offerEventsBH";
import ProductSectionBHMobile from "../Restaurant/ProductSectionMobile";
import ReservationMobile from "../Misc/reservationMobile";
import {Schedule} from "../../../../../../Class/Site/TypeSite/Misc/globalClassSite";
import QuestionBHMobile from "./questionBHMobile";

const idQuestionSection: string = "idQuestionSectionBeautyAndHelathMobile"


export default function MainPageBHMobile() {
    const sectionProducst: SectionProductItem[] = useContext(SectionProductsBHContext)
    const schedule: Schedule[] = useContext(ShceduleBHContext)
    return (
        <div className={style.mainDiv}>
            <HeaderBhMobile/>

            <OurJobsMobile/>
            <div className={style.separationLine}/>

            <div className={style.paddingGeneral}>
                <ReviewSectionBHMobile/>
            </div>
            <div className={style.separationLine}/>

            <div className={style.paddingGeneral}>
                <InSearchBhMobile/>
            </div>
            <div className={style.separationLine}/>

            <div className={style.paddingGeneral}>
                <OurServicesMobile id={idQuestionSection}/>
            </div>
            <div className={style.separationLine}/>

            <div className={style.paddingGeneral}>
                <ReservationMobile item={schedule}/>
            </div>
            <div className={style.separationLine}/>

            <OfferBHMobile/>
            <div className={style.separationLine}/>

            <OtherEventsBH/>
            <div className={style.separationLine}/>

            <div className={style.gridSectionProducts}>
                {
                    sectionProducst.map(item =>
                        <ProductSectionBHMobile key={item.Id} sectionProducts={item}/>
                    )
                }
            </div>
            <div className={style.separationLine}/>

            <QuestionBHMobile id={idQuestionSection}/>
        </div>
    )
}