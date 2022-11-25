import style from "/styles/Desktop/CartPage/recommendedCartPage.module.css"
import {useContext} from "react";
import {RecommendedCartContext} from "../../Providers/CartPage/CartPageProvider";
import {BaseEventCard} from "../../../dataDemo/EventView/eventVerticalView";
import EventHorizontalViewDesktop from "../EventsView/eventHorizontalView";

const title: string = "Spix te recomienda"
const seeMore: string = "Ver mas"
export default function RecommendedCartPage() {
    const recommended: BaseEventCard[] = useContext(RecommendedCartContext)
    return (
        <div className={style.mainDiv}>
            <div className={style.title}>
                {title}
            </div>
            <button className={style.seeMore}>
                {seeMore}
            </button>
            <div className={style.gridRecommended}>
                {
                    recommended.map(item=>
                    <EventHorizontalViewDesktop key={item.Id} item={item}/>
                    )
                }
            </div>
        </div>
    )
}