import style from "/styles/Desktop/Site/TypeSite/Events/mainPage.module.css"
import OfferProducts from "./offerProducts";
import OtherEvents from "./otherEvents";
import Products from "./products";
import News from "./News";
import QuestionSection from "./questionSection";
import SectionReview from "./ReviewSection";
import PresentCard2 from "./presentCard2";
import TicketsSection from "./ticketsSection";
import InSearch from "./inSearch";

export default function MainCard() {
    return (
        <div className={style.mainCard}>
            <PresentCard2/>
            <div className={style.separationLine}/>
            <TicketsSection/>
            <div className={style.separationLine}/>
            <InSearch/>
            <OfferProducts/>
            <OtherEvents/>
            <Products/>
            <News/>
            {/*            <SectionReview/>*/}
            <QuestionSection/>
        </div>
    )
}