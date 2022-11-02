import style from "/styles/Desktop/Site/TypeSite/Events/mainPage.module.css"
import InformationImages from "./InformationImages";
import OfferProducts from "./offerProducts";
import OtherEvents from "./otherEvents";
import Products from "./products";
import News from "./News";
import QuestionSection from "./questionSection";
import SectionReview from "./ReviewSection";
import InSearch from "./inSearch";

export default function MainCard() {
    return (
        <div className={style.mainCard}>
            <InformationImages/>
            {/*<div className={style.separationLine}/>*/}
            <InSearch/>
            <OfferProducts/>
            <OtherEvents/>
            <Products/>
            <News/>
            <SectionReview/>
            <QuestionSection/>
        </div>
    )
}