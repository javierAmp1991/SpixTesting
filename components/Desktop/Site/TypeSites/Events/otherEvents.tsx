import LayoutCarrouselDesktop from "../../../Layouts/layoutCarrouselDesktop";
import {ProviderOfferProducts, ProviderRecommended} from "../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {useContext} from "react";
import {OtherEventsContext} from "../../../../Providers/Site/TypeSite/Events/eventProvider";
import {PropCarrousel} from "../../../../../Class/Layouts/layoutClass";
import EventVerticalView from "../../../EventsView/eventVerticalView";
import LayoutTitle from "../Business/Restaurant/layoutTitle";

const title: string = "Mas eventos"

export default function OtherEvents() {
    const otherEvents: ProviderRecommended = useContext(OtherEventsContext)
    const layoutPropOffer: PropCarrousel = {
        PositionArrowY: "calc(50% - 16px)",
        PositionArrowX: "-16px",
        Padding: 0,
        Gap: 16,
        Grid: 5,
        IsButtonVisible: true,
        LeftArrow: () => otherEvents.LeftClick(),
        RightArrow: () => otherEvents.RightClick()
    }
    return (
        <LayoutTitle title={title}>
            <LayoutCarrouselDesktop layoutProp={layoutPropOffer}>
                {
                    otherEvents.InitialItems.map(item =>
                        <EventVerticalView key={item.Id} item={item} darkModeState={false}/>
                    )
                }
            </LayoutCarrouselDesktop>
        </LayoutTitle>
    )
}