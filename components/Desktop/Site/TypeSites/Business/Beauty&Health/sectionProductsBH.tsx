import ProductSectionBh from "./productSectionBh";
import {SectionProductItem} from "../../../../../../Class/Misc/GlobalClass";
import {useContext} from "react";
import {
    SectionProductsBHContext
} from "../../../../../Providers/Site/TypeSite/Business/Beauty&Health/beautyHealthProvider";
import LayoutSectionProducst from "../../Misc/layoutSectionProducst";

export default function SectionProductsBH() {
    const sectionProducts: SectionProductItem[] = useContext(SectionProductsBHContext)
    return (
        <LayoutSectionProducst>
            {
                sectionProducts.map(item =>
                    <ProductSectionBh key={item.Id} sectionProducts={item}/>
                )
            }
        </LayoutSectionProducst>
    )
}