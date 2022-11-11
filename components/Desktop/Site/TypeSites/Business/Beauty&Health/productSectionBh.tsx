import ProductViewHor from "../../../../Misc/ProductViewHor";
import {ProductItem, SectionProductItem} from "../../../../../../Class/Misc/GlobalClass";
import style from "/styles/Desktop/Site/TypeSite/Bussines/Beauty&Health/productSection.module.css"

export default function ProductSectionBh({sectionProducts}: { sectionProducts: SectionProductItem }) {
    return (
        <div id={sectionProducts.Id} className={style.mainDiv}>
            <div  className={style.title}>
                {sectionProducts.Name}
            </div>
            <div className={style.gridProducts}>
                {
                    sectionProducts.ListProducts.map((item: ProductItem) =>
                        <ProductViewHor key={item.Id} item={item} isDisplayOffer={true}/>)
                }
            </div>
        </div>
    )
}