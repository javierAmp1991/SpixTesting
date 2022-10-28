import style from "/styles/Desktop/Site/TypeSite/Bussines/Restaurant/navProductSection.module.css"
import {SectionProductItem} from "../../../../../../Class/Misc/GlobalClass";
import {useContext, useState} from "react";
import {SectionProductsContext} from "../../../../../Providers/Site/TypeSite/Business/Restaurant/restaurantProvider";
import Link from "next/link";

export default function NavProductsSection() {
    const infoSectionProducts: SectionProductItem[] = useContext(SectionProductsContext)
    let [tagSelected, setTagSelected] = useState("")
    const handleTagSelected = (id: string) => setTagSelected(tagSelected = id)

    return (
        <div className={style.mainDiv}>
            {
                infoSectionProducts.map(item =>
                    <Link key={item.Id} href={`#${item.Id}`}>
                        <button onClick={() => handleTagSelected(item.Id)}
                                className={item.Id == tagSelected ? style.tagSelected : style.tag}>
                            {item.Name}
                        </button>
                    </Link>
                )
            }
        </div>
    )
}