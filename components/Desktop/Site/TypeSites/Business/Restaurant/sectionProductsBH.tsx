import style from "/styles/Desktop/Site/TypeSite/Bussines/Restaurant/initialPageRestaurant.module.css";
import ProductSectionBh from "../Beauty&Health/productSectionBh";
import {SectionProductItem} from "../../../../../../Class/Misc/GlobalClass";
import {useContext} from "react";
import {
    SectionProductsBHContext
} from "../../../../../Providers/Site/TypeSite/Business/Beauty&Health/beautyHealthProvider";

export default function SectionProductsBH(){
    const sectionProducts: SectionProductItem[] = useContext(SectionProductsBHContext)
    return(
        <div className={style.gridSectionProducts}>
            {
                sectionProducts.map(item =>
                    <ProductSectionBh key={item.Id} sectionProducts={item}/>
                )
            }
        </div>
    )
}