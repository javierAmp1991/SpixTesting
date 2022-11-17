import style from "/styles/Desktop/Site/TypeSite/Bussines/Restaurant/initialPageRestaurant.module.css"
import {SectionProductItem} from "../../../../../../Class/Misc/GlobalClass";
import FullBannerRestaurant from "../../../../Misc/fullBannerRestaurant";
import {PresentationCard} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {useContext} from "react";
import {
    HeaderContext,
    ScheduleContext,
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
import {AnnouncementStyle, Schedule} from "../../../../../../Class/Site/TypeSite/Misc/globalClassSite";
import Reservation from "../Misc/reservation";
import Announcement from "../../Misc/announcement";
import SectionProductsRestaurant from "./sectionProductsRestaurant";

const styleAnnouncement: AnnouncementStyle = AnnouncementStyle.SiteRestaurant
const buttonReservationText: string = "Reservar Mesa"

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
    return (
        <>
            <div className={style.mainGradient}>
                <FullBannerRestaurant item={infoHeader.Banner}/>
                <div className={style.mainDivHeader}>
                    {
                        infoHeader.Announcement != null &&
                        <Announcement styleAnnouncement={styleAnnouncement} announcement={infoHeader.Announcement}/>
                    }
                    <DescriptionCardFull/>
                </div>
            </div>

            <div className={style.mainDiv}>
                <InOfferRestaurant/>
                <div className={style.separationLine}/>

                <InSearchRestaurant/>
                <div className={style.separationLine}/>

                <Reservation buttonText={buttonReservationText} item={schedule}/>
                <div className={style.separationLine}/>

                <RecomendedRestarant/>
                <div className={style.separationLine}/>

                <ReviewRestaurant/>
                <div className={style.separationLine}/>

                <div className={style.spaceNavSectionProducts}>
                    <NavSectionProducts item={infoSectionProducts}/>
                </div>
                <div className={style.separationLine}/>

                <QuestionRestaurant/>
                <div className={style.separationLine}/>

                <NavProductsSection/>

                <SectionProductsRestaurant/>
            </div>
        </>
    )
}