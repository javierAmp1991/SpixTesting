import {ProductItem, SectionProductItem} from "../../../../../../Class/Misc/GlobalClass";
import style from "/styles/Mobile/Site/TypeSite/Bussines/Restaurant/productSection.module.css"
import ProductViewHorMobile from "../../../../Misc/ProductViewHorMobile";

export default function ProductSectionMobile({sectionProducts}: { sectionProducts: SectionProductItem }) {
    return (
        <div id={sectionProducts.Id} className={style.mainDiv}>
            <div className={style.title}>
                {sectionProducts.Name}
            </div>
            <div className={style.gridProducts}>
                {
                    sectionProducts.ListProducts.map((item: ProductItem) =>
                        <ProductViewHorMobile key={item.Id} item={item} isDisplayOffer={true}/>)
                }
            </div>
        </div>
    )
}