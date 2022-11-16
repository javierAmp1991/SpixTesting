import style from "/styles/Desktop/Site/TypeSite/Bussines/Beauty&Health/mainPage.module.css"
import ReviewSectionBH from "./reviewSectionBH";
import {SectionProductItem} from "../../../../../../Class/Misc/GlobalClass";
import {useContext} from "react";
import {
    SectionProductsBHContext, ShceduleBHContext
} from "../../../../../Providers/Site/TypeSite/Business/Beauty&Health/beautyHealthProvider";
import ProductSectionBh from "./productSectionBh";
import InSearchBH from "./inSearchBH";
import InOfferBH from "./inOfferBH";
import RecomendedBH from "./recomendedBH";
import OurServices from "./ourServices";
import QuestionBH from "./questionBH";
import HeaderBh2 from "./headerBh2";
import OurJobs2 from "./ourJobs2";
import Reservation from "../Misc/reservation";
import {Schedule} from "../../../../../../Class/Site/TypeSite/Misc/globalClassSite";
import Announcement from "../../Misc/announcement";

const idQuestionSection: string = "idQuestionSectionBeautyAndHelath"

export default function MainPageBH() {
    const sectionProducst: SectionProductItem[] = useContext(SectionProductsBHContext)
    const schedule: Schedule[] = useContext(ShceduleBHContext)
    return (
        <div className={style.mainDiv}>
            <Announcement/>
            <HeaderBh2/>
           {/* <OurJobs2/>
            <div className={style.separationLine}/>*/}

            <ReviewSectionBH/>
            <div className={style.separationLine}/>

            <InSearchBH/>
            <div className={style.separationLine}/>

            <OurServices id={idQuestionSection}/>
            <div className={style.separationLine}/>

            <Reservation item={schedule}/>
            <div className={style.separationLine}/>

            <InOfferBH/>
            <div className={style.separationLine}/>

            <RecomendedBH/>
            <div className={style.separationLine}/>

            <QuestionBH id={idQuestionSection}/>
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