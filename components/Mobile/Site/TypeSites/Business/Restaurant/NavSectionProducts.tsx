import NavSectionProductsMobile from "../../Misc/NavSectionProductsMobile";
import {SectionProductItem} from "../../../../../../Class/Misc/GlobalClass";
import {useContext} from "react";
import {SectionProductsContext} from "../../../../../Providers/Site/TypeSite/Business/Restaurant/restaurantProvider";
import style from "/styles/Mobile/Site/TypeSite/Bussines/Restaurant/initialPageRestaurant.module.css"

export default function NavSectionProductsRestaurantMobile() {
    const infoSectionProducts: SectionProductItem[] = useContext(SectionProductsContext)
    return (
        <div className={style.paddingGeneral}>
            <NavSectionProductsMobile item={infoSectionProducts}/>
        </div>
    )
}