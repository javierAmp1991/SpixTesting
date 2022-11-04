import LayoutTitle from "../Restaurant/layoutTitle";
import LayoutCarrouselDesktop from "../../../../Layouts/layoutCarrouselDesktop";
import ProductViewSquare from "../../../../Misc/productViewSquare";
import {ProviderOfferProducts} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {useContext} from "react";
import {OfferProductsContext} from "../../../../../Providers/Site/TypeSite/Business/Default/defaultProvider";
import {PropCarrousel} from "../../../../../../Class/Layouts/layoutClass";

export default function InOfferDefault(){
    const listOfferProducts: ProviderOfferProducts = useContext(OfferProductsContext)
    const layoutPropOffer: PropCarrousel = {
        PositionArrowY: "calc(50% - 16px)",
        PositionArrowX: "-40px",
        Padding: 0,
        Gap: 16,
        Grid: 5,
        IsButtonVisible: true,
        LeftArrow: () => listOfferProducts.LeftClick(),
        RightArrow: () => listOfferProducts.RightClick()
    }
    return(
        <LayoutTitle title={"Promo Navidad"}>
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