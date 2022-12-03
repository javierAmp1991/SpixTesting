import LayoutCarrouselDesktop from "../../../Layouts/layoutCarrouselDesktop";
import {PropCarrousel} from "../../../../../Class/Layouts/layoutClass";
import {ProviderOfferProducts} from "../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {useContext} from "react";
import {OfferProductsContext} from "../../../../Providers/Site/TypeSite/Events/eventProvider";
import LayoutTitle from "../Business/Restaurant/layoutTitle";
import NewProductViewSquare from "../../../Misc/newProductViewSquare";
const idNavProductSection: string = "idProductEventToGo"
const title: string = "Ofertas"

export default function OfferProducts() {
    const products: ProviderOfferProducts = useContext(OfferProductsContext)
    const layoutPropOffer: PropCarrousel = {
        PositionArrowY: "calc(50% - 16px)",
        PositionArrowX: "-16px",
        Padding: 0,
        Gap: 16,
        Grid: 6,
        IsButtonVisible: true,
        LeftArrow: () => products.LeftClick(),
        RightArrow: () => products.RightClick()
    }
    return (
        <div id={idNavProductSection}>
            <LayoutTitle title={title}>
                <LayoutCarrouselDesktop layoutProp={layoutPropOffer}>
                    {
                        products.InitialItems.map(item =>
                            <NewProductViewSquare key={item.Name} item={item} size={null} displayFull={true}/>
                        )
                    }
                </LayoutCarrouselDesktop>
            </LayoutTitle>
        </div>
    )
}