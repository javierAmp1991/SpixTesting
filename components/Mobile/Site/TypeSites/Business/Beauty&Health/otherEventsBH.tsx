import {useContext} from "react";
import style from "/styles/Mobile/Site/TypeSite/Bussines/Beauty&Health/mainPage.module.css";
import {
    RecommendedBHContext
} from "../../../../../Providers/Site/TypeSite/Business/Beauty&Health/beautyHealthProvider";
import {ProviderRecommended} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import EventVerticalViewNewMob from "../../../../Events/eventVerticalViewNewMob";
import LayoutCarrouselMobile from "../../../../Layouts/layoutCarrousel.Mobile";
import LayoutTitleMobile from "../Restaurant/layoutTitleMobile";

const title: string = "Spix te recomienda"
export default function OtherEventsBH() {
    const otherEvents: ProviderRecommended = useContext(RecommendedBHContext)
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