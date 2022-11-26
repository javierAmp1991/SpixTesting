import style from "/styles/Mobile/CartPage/recommendedCartPage.module.css"
import {useContext} from "react";
import {RecommendedCartContext} from "../../Providers/CartPage/CartPageProvider";
import {BaseEventCard} from "../../../dataDemo/EventView/eventVerticalView";
import EventHorizontalViewDesktop, {EventHorizontalViewProp} from "../../Desktop/EventsView/eventHorizontalView";
import LayoutCarrouselMobile from "../Layouts/layoutCarrousel.Mobile";
import EventVerticalViewNewMob from "../Events/eventVerticalViewNewMob";


const title: string = "Spix te recomienda"
const seeMore: string = "Ver mas"
export default function RecommendedCartPageMobile() {
    const recommended: BaseEventCard[] = useContext(RecommendedCartContext)
    const propEvent: EventHorizontalViewProp = {
        SizeImage: 130
    }
    return (
        <div className={style.mainDiv}>
            <div className={style.title}>
                {title}
            </div>
            <button className={style.seeMore}>
                {seeMore}
            </button>
            <LayoutCarrouselMobile gapLayout={20}>
                {
                    recommended.map(item=>
                    <EventVerticalViewNewMob darkModeState={false} key={item.Id} item={item}/>
                    )
                }
            </LayoutCarrouselMobile>
        </div>
    )
}