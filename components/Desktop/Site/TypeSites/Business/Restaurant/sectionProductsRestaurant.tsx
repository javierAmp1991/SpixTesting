import ProductSection from "./ProductSection";
import {SectionProductItem} from "../../../../../../Class/Misc/GlobalClass";
import {useContext} from "react";
import {SectionProductsContext} from "../../../../../Providers/Site/TypeSite/Business/Restaurant/restaurantProvider";
import LayoutSectionProducst from "../../Misc/layoutSectionProducst";

const idTest: string = "isTestDesktopScrollControl"

export default function SectionProductsRestaurant() {
    const infoSectionProducts: SectionProductItem[] = useContext(SectionProductsContext)
    return (
        <div id={idTest}>
            <LayoutSectionProducst>
                {
                    infoSectionProducts.map(item =>
                        <ProductSection key={item.Id} sectionProducts={item}/>
                    )
                }
            </LayoutSectionProducst>
        </div>
    )
}