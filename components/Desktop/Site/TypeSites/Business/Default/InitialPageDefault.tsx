import style from "/styles/Desktop/Site/TypeSite/Bussines/Default/initialPageRestaurant.module.css"
import {SectionProductItem} from "../../../../../../Class/Misc/GlobalClass";
import ProductSection from "../Restaurant/ProductSection";
import {PresentationCard} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {useContext, useEffect, useState} from "react";
import {
    HeaderContext,
    SectionProductsContext
} from "../../../../../Providers/Site/TypeSite/Business/Default/defaultProvider";
import FullBanner from "../../../../Misc/fullBanner";
import DescriptionCardDefault from "./DescriptionCardDefault";
import InOfferDefault from "./inOfferDefault";
import RecomendedDefault from "./recomendedDefault";
import QuestionDefault from "./questionDefault";
import InSearchDefault from "./inSearchDefault";
import ReviewDefault from "./reviewDefault";

const idTest: string = "isTestDesktopScrollControl"

export default function InitialPageDefault() {
    const infoHeader: PresentationCard = useContext(HeaderContext)
    const infoSectionProducts: SectionProductItem[] = useContext(SectionProductsContext)
    let [hasBeenReached, setHasBeenReached] = useState(false)
    let [startSectionProduct, setStartSectionProduct] = useState(0)

    useEffect(() => {
        let scrollControl = document.getElementById(idTest).getBoundingClientRect()
        setStartSectionProduct(startSectionProduct = scrollControl.y)
    }, [])
    useEffect(() => {
        const functionScroll = () => {
            setHasBeenReached(hasBeenReached = window.scrollY >= startSectionProduct)
        }
        window.addEventListener(`scroll`, functionScroll)
        return () => window.removeEventListener(`scroll`, functionScroll);
    })
    return (
        <>
            <FullBanner item={infoHeader.Banner}/>
            <div className={style.mainDiv}>
                <DescriptionCardDefault/>


                <InSearchDefault/>
                <div className={style.separationLine}/>

                <InOfferDefault/>
                <div className={style.separationLine}/>

                <RecomendedDefault/>
                <div className={style.separationLine}/>

                {/*<NewsRestaurant/>
                <div className={style.separationLine}/>*/}

                <div className={style.gridSectionProducts} id={idTest}>
                    {
                        infoSectionProducts.map(item =>
                            <>
                                <ProductSection sectionProducts={item}/>
                                <div className={style.separationLine}/>
                            </>
                        )
                    }
                </div>

                <ReviewDefault/>
                <QuestionDefault/>
            </div>
        </>
    )
}