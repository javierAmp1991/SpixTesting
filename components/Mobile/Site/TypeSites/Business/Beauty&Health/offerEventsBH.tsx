import {useContext} from "react";
import style from "/styles/Mobile/Site/TypeSite/Bussines/Beauty&Health/mainPage.module.css";
import {ProviderOfferProducts} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import LayoutTitleMobile from "../Restaurant/layoutTitleMobile";
import LayoutCarrouselMobile from "../../../../Layouts/layoutCarrousel.Mobile";
import ProductViewSquare from "../../../../../Desktop/Misc/productViewSquare";
import {OfferBHContext} from "../../../../../Providers/Site/TypeSite/Business/Beauty&Health/beautyHealthProvider";

const title: string = "Ofertas"

export default function OfferBHMobile() {
    const products: ProviderOfferProducts = useContext(OfferBHContext)
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