import LayoutCarrouselDesktop from "../../../../Layouts/layoutCarrouselDesktop";
import ProductViewSquare from "../../../../Misc/productViewSquare";
import {ProviderOfferProducts} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {useContext} from "react";
import {PropCarrousel} from "../../../../../../Class/Layouts/layoutClass";
import LayoutTitle from "../Restaurant/layoutTitle";
import {
    OfferByDefaultContext
} from "../../../../../Providers/Site/TypeSite/Business/ByDefault/SiteBusinessByDefaultProvider";

export default function InOfferByDefault() {
    const listOfferProducts: ProviderOfferProducts = useContext(OfferByDefaultContext)
    const layoutPropOffer: PropCarrousel = {
        PositionArrowY: "calc(50% - 16px)",
        PositionArrowX: "-40px",
        Padding: 0,
        Gap: 16,
        Grid: 6,
        IsButtonVisible: true,
        LeftArrow: () => listOfferProducts.LeftClick(),
        RightArrow: () => listOfferProducts.RightClick()
    }
    return (
        <LayoutTitle title={"Happy Hour"}>
            <LayoutCarrouselDesktop layoutProp={layoutPropOffer}>
                {
                    listOfferProducts.InitialItems.map(item =>
                        <ProductViewSquare key={item.Name} item={item} size={null} isDisplayOffer={true}/>
                    )
                }
            </LayoutCarrouselDesktop>
        </LayoutTitle>
    )
}