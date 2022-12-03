import LayoutTitle from "./layoutTitle";
import LayoutCarrouselDesktop from "../../../../Layouts/layoutCarrouselDesktop";
import ProductViewSquare from "../../../../Misc/productViewSquare";
import {ProviderOfferProducts} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {useContext} from "react";
import {OfferProductsContext} from "../../../../../Providers/Site/TypeSite/Business/Restaurant/restaurantProvider";
import {PropCarrousel} from "../../../../../../Class/Layouts/layoutClass";
import NewProductViewSquare from "../../../../Misc/newProductViewSquare";

export default function InOfferRestaurant(){
    const listOfferProducts: ProviderOfferProducts = useContext(OfferProductsContext)
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
    return(
        <LayoutTitle title={"Happy Hour"}>
            <LayoutCarrouselDesktop layoutProp={layoutPropOffer}>
                {
                    listOfferProducts.InitialItems.map(item =>
                        <NewProductViewSquare key={item.Name} item={item} size={null} displayFull={true}/>
                    )
                }
            </LayoutCarrouselDesktop>
        </LayoutTitle>
    )
}