import style from "/styles/Desktop/CartPage/productsCart.module.css"
import utilities from "/styles/utilities.module.css";
import EventVerticalView from "../EventsView/eventVerticalView";
import {BaseEventCard} from "../../../dataDemo/EventView/eventVerticalView";
import {useContext} from "react";
import {RecommendedCartContext} from "../../Providers/CartPage/CartPageProvider";
import LayoutCarrouselDesktop from "../Layouts/layoutCarrouselDesktop";
import {PropCarrousel} from "../../../Class/Layouts/layoutClass";
import Link from "next/link";

const spixRecommended: string = "Spix te recomienda"
const seeMore: string = "ver mas"

export default function CarrouselRecommended() {
    const recommended: BaseEventCard[] = useContext(RecommendedCartContext)
    const layoutProp: PropCarrousel = {
        PositionArrowY: "calc(50% - 16px)",
        PositionArrowX: "-40px",
        Padding: 8,
        Gap: 16,
        Grid: 6,
        IsButtonVisible: true,
        LeftArrow: () => null,
        RightArrow: () => null
    }
    return (
        <div className={style.mainDivCarrouselReco}>
            <div className={style.divRecommended}>
                <div className={style.title}>
                    {spixRecommended}
                </div>
                <Link href={"/"}>
                    <a className={utilities.styleLink}>

                        {seeMore}
                    </a>
                </Link>
            </div>
            <LayoutCarrouselDesktop layoutProp={layoutProp}>
                {
                    recommended.map((item, index) =>
                        index <= 5 &&
                        <EventVerticalView key={item.Id} item={item} darkModeState={false}/>
                    )
                }
            </LayoutCarrouselDesktop>
        </div>

    )
}