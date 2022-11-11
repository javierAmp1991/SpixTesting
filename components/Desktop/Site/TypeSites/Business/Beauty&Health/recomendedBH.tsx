import LayoutCarrouselDesktop from "../../../../Layouts/layoutCarrouselDesktop";
import EventVerticalView from "../../../../EventsView/eventVerticalView";
import {PropCarrousel} from "../../../../../../Class/Layouts/layoutClass";
import {ProviderRecommended} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {useContext} from "react";
import LayoutTitle from "../Restaurant/layoutTitle";
import {RecommendedBHContext} from "../../../../../Providers/Site/TypeSite/Business/Beauty&Health/beautyHealthProvider";
const title: string = "Spix te recomienda"

export default function RecomendedBH() {
    const infoRecomended: ProviderRecommended = useContext(RecommendedBHContext)
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
        <LayoutTitle title={title}>
            <LayoutCarrouselDesktop layoutProp={layoutPropRecomended}>
                {
                    infoRecomended.InitialItems.map((item) =>
                        <EventVerticalView key={item.Id} item={item} darkModeState={false}/>)
                }
            </LayoutCarrouselDesktop>
        </LayoutTitle>
    )
}