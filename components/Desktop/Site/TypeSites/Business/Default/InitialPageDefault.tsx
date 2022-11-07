import style from "/styles/Desktop/Site/TypeSite/Bussines/Default/initialPageRestaurant.module.css"
import {NavBarEventsSections, SectionProductItem} from "../../../../../../Class/Misc/GlobalClass";
import {PresentationCard} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {useContext} from "react";
import {
    HeaderContext,
    SectionProductsContext
} from "../../../../../Providers/Site/TypeSite/Business/Default/defaultProvider";
import InOfferDefault from "./inOfferDefault";
import RecomendedDefault from "./recomendedDefault";
import QuestionDefault from "./questionDefault";
import InSearchDefault from "./inSearchDefault";
import ReviewDefault from "./reviewDefault";
import ProductSectionDefault from "./ProductSectionDefault";
import BannerVar from "../../../../Misc/bannerVar";
import NavSectionProducts from "./NavSectionProducts";
import DescriptionCardFooterDefault from "./DescriptionCardFooterDefault";
import NavMenu from "./navMenu";

const idSections = {
    Offer: "idOfferDefault",
    Recommended: "idRecommendedDefault",
    Products: "idProductsDefault",
    Review: "idReviewDefault",
    Question: "idQuestionDefault",
    AboutUs: "idAboutUsDefault"
}

const idSectionsNew: NavBarEventsSections[] = [
    {
        Id: "idOfferDefault",
        IdToGo: "idOfferDefaultToGo",
        Name: "Ofertas"
    },
    {
        Id: "idRecommendedDefault",
        IdToGo: "idRecommendedDefaultToGo",
        Name: "Ofertas"
    },
    {
        Id: "idProductsDefault",
        IdToGo: "idProductsDefaultToGo",
        Name: "Ofertas"
    },
    {
        Id: "idReviewDefault",
        IdToGo: "idReviewDefaultToGo",
        Name: "Ofertas"
    },
    {
        Id: "idQuestionDefault",
        IdToGo: "idQuestionDefaultToGo",
        Name: "Ofertas"
    },
    {
        Id: "idAboutUsDefault",
        IdToGo: "idAboutUsDefaultToGo",
        Name: "Ofertas"
    }
]

export default function InitialPageDefault() {
    const infoHeader: PresentationCard = useContext(HeaderContext)
    const infoSectionProducts: SectionProductItem[] = useContext(SectionProductsContext)


    return (
        <>
            <div className={style.bannerContainer}>
                <BannerVar size={`75vh`} item={infoHeader.Banner}/>
                <NavMenu idItems={idSections}/>
            </div>
            <div className={style.mainDiv}>
                <NavSectionProducts item={infoSectionProducts}/>
                <InSearchDefault/>
                <div className={style.separationLine}/>

                <div id={idSections.Offer}>
                    <InOfferDefault/>
                </div>
                <div className={style.separationLine}/>
                <div id={idSections.Recommended}>
                    <RecomendedDefault/>
                </div>
                <div className={style.separationLine}/>

                <div className={style.gridSectionProducts} id={idSections.Products}>
                    {
                        infoSectionProducts.map(item =>
                            <>
                                <ProductSectionDefault sectionProducts={item}/>
                                <div className={style.separationLine}/>
                            </>
                        )
                    }
                </div>
                <div id={idSections.Review}>
                    <ReviewDefault/>
                </div>
                <div id={idSections.Question}>
                    <QuestionDefault/>
                </div>
            </div>
            <div id={idSections.AboutUs}>
                <DescriptionCardFooterDefault/>
            </div>
        </>
    )
}