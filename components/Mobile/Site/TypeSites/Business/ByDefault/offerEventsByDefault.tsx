import {useContext} from "react";
import style from "/styles/Mobile/Site/TypeSite/Bussines/Beauty&Health/mainPage.module.css";
import {ProviderOfferProducts} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import LayoutTitleMobile from "../Restaurant/layoutTitleMobile";
import LayoutCarrouselMobile from "../../../../Layouts/layoutCarrousel.Mobile";
import ProductViewSquare from "../../../../../Desktop/Misc/productViewSquare";
import {
    OfferByDefaultContext
} from "../../../../../Providers/Site/TypeSite/Business/ByDefault/SiteBusinessByDefaultProvider";

const title: string = "Ofertas"

export default function OfferByDefaultMobile() {
    const products: ProviderOfferProducts = useContext(OfferByDefaultContext)
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