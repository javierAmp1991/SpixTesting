import ProductSection from "../Business/Restaurant/ProductSection";
import {SectionProductItem} from "../../../../../Class/Misc/GlobalClass";
import {useContext} from "react";
import {SectionProductsEventContext} from "../../../../Providers/Site/TypeSite/Events/eventProvider";
import LayoutSectionProducst from "../Misc/layoutSectionProducst";

export default function SectionProductsSiteEvents() {
    const infoSectionProducts: SectionProductItem[] = useContext(SectionProductsEventContext)
    return (
        <LayoutSectionProducst>

            {
                infoSectionProducts.map(item =>
                    <ProductSection key={item.Id} sectionProducts={item}/>
                )
            }
        </LayoutSectionProducst>
    )
}