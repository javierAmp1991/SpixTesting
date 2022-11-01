import LayoutTitleMobile from "../Business/Restaurant/layoutTitleMobile";
import {ProviderOfferProducts} from "../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {useContext} from "react";
import {OfferProductsContext} from "../../../../Providers/Site/TypeSite/Events/eventProvider";
import ProductViewSquare from "../../../../Desktop/Misc/productViewSquare";
import LayoutCarrouselMobile from "../../../Layouts/layoutCarrousel.Mobile";
import style from "/styles/Mobile/Site/TypeSite/Events/mainPage.module.css"

const title: string = "Ofertas"

export default function OfferEventsMobile() {
    const products: ProviderOfferProducts = useContext(OfferProductsContext)
    return (
        <div className={style.paddingGeneral}>
            <LayoutTitleMobile title={title} isOverflow={true}>
                <LayoutCarrouselMobile gapLayout={16}>
                    {
                        products.InitialItems.map((item) =>
                            <ProductViewSquare key={item.Name} item={item} size={220} isDisplayOffer={true}/>
                        )
                    }
                </LayoutCarrouselMobile>
            </LayoutTitleMobile>
        </div>
    )
}