import style from "/styles/Mobile/Site/TypeSite/Bussines/Restaurant/initialPageRestaurant.module.css";
import LayoutCarrouselMobile from "../../../../Layouts/layoutCarrousel.Mobile";
import {ProviderOfferProducts} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {useContext} from "react";
import {OfferProductsContext} from "../../../../../Providers/Site/TypeSite/Business/Restaurant/restaurantProvider";
import {LayoutTitleLinkProps} from "../../../../../../Class/Layouts/layoutClass";
import LayoutTitleCustomMobile from "../Misc/layoutTitleCustomMobile";
import NewProductViewSquareMobile from "../../../../Misc/newProductViewSquareMobile";

const title: string = "Happy Hour"

export default function OfferRestaurantMobile() {
    const listOfferProducts: ProviderOfferProducts = useContext(OfferProductsContext)
    const propLayoutTitle: LayoutTitleLinkProps = {
        Title: title,
    }
    return (
        <div className={style.paddingGeneral}>
            <LayoutTitleCustomMobile item={propLayoutTitle}>
                <LayoutCarrouselMobile gapLayout={16}>
                    {
                        listOfferProducts.InitialItems.map((item) =>
                            <NewProductViewSquareMobile key={item.Name} item={item} size={220} isDisplayOffer={true}/>
                        )
                    }
                </LayoutCarrouselMobile>
            </LayoutTitleCustomMobile>
        </div>
    )
}