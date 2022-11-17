import {useContext} from "react";
import style from "/styles/Mobile/Site/TypeSite/Bussines/Beauty&Health/mainPage.module.css";
import {ProviderRecommended} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import EventVerticalViewNewMob from "../../../../Events/eventVerticalViewNewMob";
import LayoutCarrouselMobile from "../../../../Layouts/layoutCarrousel.Mobile";
import LayoutTitleMobile from "../Restaurant/layoutTitleMobile";
import {
    RecommendedByDefaultContext
} from "../../../../../Providers/Site/TypeSite/Business/ByDefault/SiteBusinessByDefaultProvider";

const title: string = "Spix te recomienda"
export default function OtherEventsByDefaultMobile() {
    const otherEvents: ProviderRecommended = useContext(RecommendedByDefaultContext)
    return (
        <div className={style.paddingGeneral}>
            <LayoutTitleMobile title={title} isOverflow={true}>
                <LayoutCarrouselMobile gapLayout={16}>
                    {
                        otherEvents.InitialItems.map(item =>
                            <EventVerticalViewNewMob key={item.Id} item={item} darkModeState={false}/>
                        )
                    }
                </LayoutCarrouselMobile>
            </LayoutTitleMobile>
        </div>
    )
}