import style from "/styles/Mobile/Site/TypeSite/Bussines/Restaurant/initialPageRestaurant.module.css";
import LayoutCarrouselMobile from "../../../../Layouts/layoutCarrousel.Mobile";
import EventVerticalViewNewMob from "../../../../Events/eventVerticalViewNewMob";
import {ProviderRecommended} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {useContext} from "react";
import {RecommendedContext} from "../../../../../Providers/Site/TypeSite/Business/Restaurant/restaurantProvider";
import LayoutTitleCustomMobile from "../Misc/layoutTitleCustomMobile";
import {LayoutTitleLinkProps} from "../../../../../../Class/Layouts/layoutClass";

const title: string = "Spix te recomienda"

export default function RecommendedRestaurantMobile(){
    const infoRecomended: ProviderRecommended = useContext(RecommendedContext)
    const propLayoutTitle: LayoutTitleLinkProps = {
        Title: title,
    }
    return(
        <div className={style.paddingGeneral}>
            <LayoutTitleCustomMobile item={propLayoutTitle}>
                <LayoutCarrouselMobile gapLayout={16}>
                    {
                        infoRecomended.InitialItems.map((item) =>
                            <EventVerticalViewNewMob key={item.Id} item={item} darkModeState={false}/>)
                    }
                </LayoutCarrouselMobile>
            </LayoutTitleCustomMobile>
        </div>
    )
}