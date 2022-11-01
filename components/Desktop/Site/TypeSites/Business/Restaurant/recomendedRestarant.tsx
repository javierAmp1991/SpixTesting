import LayoutCarrouselDesktop from "../../../../Layouts/layoutCarrouselDesktop";
import EventVerticalView from "../../../../EventsView/eventVerticalView";
import LayoutTitle from "./layoutTitle";
import {PropCarrousel} from "../../../../../../Class/Layouts/layoutClass";
import {ProviderRecommended} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {useContext} from "react";
import {RecommendedContext} from "../../../../../Providers/Site/TypeSite/Business/Restaurant/restaurantProvider";

export default function RecomendedRestarant() {
    const infoRecomended: ProviderRecommended = useContext(RecommendedContext)
    const layoutPropRecomended: PropCarrousel = {
        PositionArrowY: "calc(50% - 16px)",
        PositionArrowX: "-40px",
        Padding: 0,
        Gap: 16,
        Grid: 6,
        IsButtonVisible: true,
        LeftArrow: () => infoRecomended.LeftClick(),
        RightArrow: () => infoRecomended.RightClick()
    }
    return (
        <LayoutTitle title={"Recomendados"}>
            <LayoutCarrouselDesktop layoutProp={layoutPropRecomended}>
                {
                    infoRecomended.InitialItems.map((item) =>
                        <EventVerticalView key={item.Id} item={item} darkModeState={false}/>)
                }
            </LayoutCarrouselDesktop>
        </LayoutTitle>
    )
}