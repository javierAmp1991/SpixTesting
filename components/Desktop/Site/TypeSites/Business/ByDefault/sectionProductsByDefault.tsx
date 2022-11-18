import LayoutSectionProducst from "../../Misc/layoutSectionProducst";
import ProductSectionBh from "../Beauty&Health/productSectionBh";
import {SectionProductItem} from "../../../../../../Class/Misc/GlobalClass";
import {useContext} from "react";
import {
    SectionProductsByDefaultContext
} from "../../../../../Providers/Site/TypeSite/Business/ByDefault/SiteBusinessByDefaultProvider";

export default function SectionProductsByDefault(){
    const sectionProducst: SectionProductItem[] = useContext(SectionProductsByDefaultContext)
    return(
        <LayoutSectionProducst>
            {
                sectionProducst.map(item =>
                    <ProductSectionBh key={item.Id} sectionProducts={item}/>
                )
            }
        </LayoutSectionProducst>
    )
}