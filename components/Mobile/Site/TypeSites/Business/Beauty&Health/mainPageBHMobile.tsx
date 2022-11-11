import style from "/styles/Mobile/Site/TypeSite/Bussines/Beauty&Health/mainPage.module.css"
import {SectionProductItem} from "../../../../../../Class/Misc/GlobalClass";
import {useContext} from "react";
import {
    SectionProductsBHContext
} from "../../../../../Providers/Site/TypeSite/Business/Beauty&Health/beautyHealthProvider";
import HeaderBhMobile from "./headerBhMobile";
import OurJobsMobile from "./ourJobsMobile";
import ReviewSectionBHMobile from "./reviewSectionBHMobile";
import InSearchBhMobile from "./inSearchBhMobile";
import OurServicesMobile from "./ourServicesMobile";
import OtherEventsBH from "./otherEventsBH";
import OfferEventsMobile from "../../Events/offerEvents";
import OfferBHMobile from "./offerEventsBH";
import ProductSectionBHMobile from "../Restaurant/ProductSectionMobile";

export default function MainPageBHMobile() {
    const sectionProducst: SectionProductItem[] = useContext(SectionProductsBHContext)
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
                <OurServicesMobile/>
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
        </div>
    )
}