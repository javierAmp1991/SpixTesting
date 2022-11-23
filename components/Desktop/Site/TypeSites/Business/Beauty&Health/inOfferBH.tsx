import LayoutCarrouselDesktop from "../../../../Layouts/layoutCarrouselDesktop";
import {ProviderOfferProducts} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {useContext} from "react";
import {PropCarrousel} from "../../../../../../Class/Layouts/layoutClass";
import LayoutTitle from "../Restaurant/layoutTitle";
import {OfferBHContext} from "../../../../../Providers/Site/TypeSite/Business/Beauty&Health/beautyHealthProvider";
import NewProductViewSquare from "../../../../Misc/newProductViewSquare";

export default function InOfferBH() {
    const listOfferProducts: ProviderOfferProducts = useContext(OfferBHContext)
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
                            <NewProductViewSquare key={item.Name} item={item} size={null} isDisplayOffer={true}/>
                        )
                    }
                </LayoutCarrouselDesktop>
            </LayoutTitle>
    )
}