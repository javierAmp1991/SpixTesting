import ProductViewHor from "../../../../Misc/ProductViewHor";
import {ProductItem, SectionProductItem} from "../../../../../../Class/Misc/GlobalClass";
import style from "/styles/Desktop/Site/TypeSite/Bussines/Restaurant/productSection.module.css"
import LayoutTitleCustom from "../Misc/layoutTitleCustom";
import {LayoutTitleLinkProps} from "../../../../../../Class/Layouts/layoutClass";

export default function ProductSection({sectionProducts}: { sectionProducts: SectionProductItem }) {
    const propLayoutTitle: LayoutTitleLinkProps = {
        Title: sectionProducts.Name,
        Id: sectionProducts.Id
    }
    return (
        <LayoutTitleCustom item={propLayoutTitle}>
            <div className={style.gridProducts}>
                {
                    sectionProducts.ListProducts.map((item: ProductItem) =>
                        <ProductViewHor key={item.Id} item={item} isDisplayOffer={true}/>)
                }
            </div>
        </LayoutTitleCustom>
    )
}