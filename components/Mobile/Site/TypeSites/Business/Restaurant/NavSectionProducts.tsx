import LayoutTitleMobile from "./layoutTitleMobile";
import NavSectionProductsMobile from "../../Misc/NavSectionProductsMobile";
import {SectionProductItem} from "../../../../../../Class/Misc/GlobalClass";
import {useContext} from "react";
import {SectionProductsContext} from "../../../../../Providers/Site/TypeSite/Business/Restaurant/restaurantProvider";

export default function NavSectionProductsRestaurantMobile() {
    const infoSectionProducts: SectionProductItem[] = useContext(SectionProductsContext)
    return (
        <LayoutTitleMobile title={"Productos"} isOverflow={false}>
            <NavSectionProductsMobile item={infoSectionProducts}/>
        </LayoutTitleMobile>
    )
}