import {ProviderRecommended} from "../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {useContext} from "react";
import {OtherEventsContext} from "../../../../Providers/Site/TypeSite/Events/eventProvider";
import EventVerticalView from "../../../../Desktop/EventsView/eventVerticalView";
import style from "/styles/Mobile/Site/TypeSite/Events/mainPage.module.css";
import LayoutCarrouselMobile from "../../../Layouts/layoutCarrousel.Mobile";
import LayoutTitleMobile from "../Business/Restaurant/layoutTitleMobile";

const title: string = "Otros Eventos"
export default function OtherEvents() {
    const otherEvents: ProviderRecommended = useContext(OtherEventsContext)
    return (
        <div className={style.paddingGeneral}>
            <LayoutTitleMobile title={title} isOverflow={true}>
                <LayoutCarrouselMobile gapLayout={16}>
                    {
                        otherEvents.InitialItems.map(item =>
                            <EventVerticalView key={item.Id} item={item} darkModeState={false}/>
                        )
                    }
                </LayoutCarrouselMobile>
            </LayoutTitleMobile>
        </div>
    )
}