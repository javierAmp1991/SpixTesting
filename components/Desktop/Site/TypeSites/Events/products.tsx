import LayoutCarrouselDesktop from "../../../Layouts/layoutCarrouselDesktop";
import {PropCarrousel} from "../../../../../Class/Layouts/layoutClass";
import {ProviderOfferProducts} from "../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {useContext} from "react";
import {ProductsContext} from "../../../../Providers/Site/TypeSite/Events/eventProvider";
import ProductViewSquare from "../../../Misc/productViewSquare";
import LayoutTitle from "../Business/Restaurant/layoutTitle";

const title: string = "Productos"

export default function Products() {
    const products: ProviderOfferProducts = useContext(ProductsContext)
    const layoutPropOffer: PropCarrousel = {
        PositionArrowY: "calc(50% - 16px)",
        PositionArrowX: "-16px",
        Padding: 0,
        Gap: 16,
        Grid: 4,
        IsButtonVisible: true,
        LeftArrow: () => products.LeftClick(),
        RightArrow: () => products.RightClick()
    }
    return (
        <LayoutTitle title={title}>
            <LayoutCarrouselDesktop layoutProp={layoutPropOffer}>
                {
                    products.InitialItems.map(item =>
                        <ProductViewSquare key={item.Name} item={item} size={null} isDisplayOffer={true}/>
                    )
                }
            </LayoutCarrouselDesktop>
        </LayoutTitle>
    )
}