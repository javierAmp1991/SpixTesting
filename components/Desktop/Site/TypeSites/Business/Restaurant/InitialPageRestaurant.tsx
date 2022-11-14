import style from "/styles/Desktop/Site/TypeSite/Bussines/Restaurant/initialPageRestaurant.module.css"
import {SectionProductItem} from "../../../../../../Class/Misc/GlobalClass";
import FullBannerRestaurant from "../../../../Misc/fullBannerRestaurant";
import ProductSection from "./ProductSection";
import {PresentationCard} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {useContext, useEffect, useState} from "react";
import {
    HeaderContext, ScheduleContext,
    SectionProductsContext
} from "../../../../../Providers/Site/TypeSite/Business/Restaurant/restaurantProvider";
import DescriptionCardFull from "./DescriptionCardFull";
import NavProductsSection from "./navProductsSection";
import InSearchRestaurant from "./inSearch";
import ReviewRestaurant from "./reviewRestaurant";
import InOfferRestaurant from "./inOfferRestaurant";
import RecomendedRestarant from "./recomendedRestarant";
import QuestionRestaurant from "./questionRestaurant";
import NavSectionProducts from "../Default/NavSectionProducts";
import {Schedule} from "../../../../../../Class/Site/TypeSite/Misc/globalClassSite";
import Reservation from "../Misc/reservation";

const idTest: string = "isTestDesktopScrollControl"

export default function InitialPageRestaurant() {
    /*useEffect(() => {
        const cachedRef = refMobile.current,
            observer = new IntersectionObserver(
                ([e]) => {
                    setIsSticky(e.intersectionRatio < 1)
                },
                {
                    threshold: [0.1],
                }
            )

        observer.observe(cachedRef)

        // unmount
        return function () {
            observer.unobserve(cachedRef)
        }
    }, [])*/
    const infoHeader: PresentationCard = useContext(HeaderContext)
    const infoSectionProducts: SectionProductItem[] = useContext(SectionProductsContext)
    const schedule: Schedule[] = useContext(ScheduleContext)
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
            <div className={style.mainGradient}>
                <FullBannerRestaurant item={infoHeader.Banner}/>
                <DescriptionCardFull/>
            </div>
            <div className={style.mainDiv}>
                <ReviewRestaurant/>
                <div className={style.separationLine}/>

                <InSearchRestaurant/>
                <div className={style.separationLine}/>

                <Reservation item={schedule}/>
                <div className={style.separationLine}/>

                <QuestionRestaurant/>
                <div className={style.separationLine}/>

                <div className={style.spaceNavSectionProducts}>
                    <NavSectionProducts item={infoSectionProducts}/>
                </div>
                <div className={style.separationLine}/>

                <InOfferRestaurant/>
                <div className={style.separationLine}/>

                <RecomendedRestarant/>
                <div className={style.separationLine}/>

                <NavProductsSection hasBeenReached={hasBeenReached}/>

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
            </div>
        </>
    )
}