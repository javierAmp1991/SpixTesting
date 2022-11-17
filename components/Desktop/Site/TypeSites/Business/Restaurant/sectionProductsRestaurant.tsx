import style from "/styles/Desktop/Site/TypeSite/Bussines/Restaurant/initialPageRestaurant.module.css";
import ProductSection from "./ProductSection";
import {SectionProductItem} from "../../../../../../Class/Misc/GlobalClass";
import {useContext} from "react";
import {SectionProductsContext} from "../../../../../Providers/Site/TypeSite/Business/Restaurant/restaurantProvider";
const idTest: string = "isTestDesktopScrollControl"

export default function SectionProductsRestaurant(){
    const infoSectionProducts: SectionProductItem[] = useContext(SectionProductsContext)
    return(
        <div className={style.gridSectionProducts} id={idTest}>
            {
                infoSectionProducts.map(item =>
                    <ProductSection key={item.Id} sectionProducts={item}/>
                )
            }
        </div>
    )
}