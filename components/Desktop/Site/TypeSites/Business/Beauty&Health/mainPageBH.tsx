import BannerVar from "../../../../Misc/bannerVar";
import style from "/styles/Desktop/Site/TypeSite/Bussines/Beauty&Health/mainPage.module.css"
import ReviewSectionBH from "./reviewSectionBH";
import OurJobs from "./ourJobs";
import NavSectionProductsBH from "./NavSectionProductsBH";
import {SectionProductItem} from "../../../../../../Class/Misc/GlobalClass";
import {useContext} from "react";
import {
    SectionProductsBHContext
} from "../../../../../Providers/Site/TypeSite/Business/Beauty&Health/beautyHealthProvider";
import ProductSectionBh from "./productSectionBh";
import {PrincipalFeaturedSearch} from "../../../../../../dataDemo/EventView/featureView";
import item = PrincipalFeaturedSearch.item;
import InSearchBH from "./inSearchBH";
import InOfferBH from "./inOfferBH";
import RecomendedBH from "./recomendedBH";
import HeaderBh from "./headerBh";
import OurServices from "./ourServices";
import QuestionBH from "./questionBH";

export default function MainPageBH() {
    const sectionProducst: SectionProductItem[] = useContext(SectionProductsBHContext)
    return (
        <>
            <HeaderBh/>
            <div className={style.mainDiv}>
                <OurJobs/>
                <div className={style.separationLine}/>

                <ReviewSectionBH/>
                <div className={style.separationLine}/>

                <InSearchBH/>
                <div className={style.separationLine}/>

                <OurServices/>
                <div className={style.separationLine}/>

                <InOfferBH/>
                <div className={style.separationLine}/>

                <RecomendedBH/>
                <div className={style.separationLine}/>

                <div className={style.gridSectionProducts}>
                    {
                        sectionProducst.map(item =>
                            <ProductSectionBh key={item.Id} sectionProducts={item}/>
                        )
                    }
                </div>
                <div className={style.separationLine}/>

                <QuestionBH/>
            </div>
        </>
    )
}