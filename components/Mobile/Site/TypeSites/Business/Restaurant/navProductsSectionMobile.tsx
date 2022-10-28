import style from "/styles/Mobile/Site/TypeSite/Bussines/Restaurant/navProductSection.module.css"
import {SectionProductItem} from "../../../../../../Class/Misc/GlobalClass";
import {useContext, useState} from "react";
import {SectionProductsContext} from "../../../../../Providers/Site/TypeSite/Business/Restaurant/restaurantProvider";

export default function NavProductsSectionMobile() {
    const infoSectionProducts: SectionProductItem[] = useContext(SectionProductsContext)
    let [tagSelected, setTagSelected] = useState("")
    let [styleNav, setStyleNav] = useState(true)
    const handleStyleNav = () => setStyleNav(styleNav = true)
    const handleTagSelected = (id: string) => {
        let data = document.getElementById(id)
        data.scrollIntoView({behavior: "smooth"})
        setTagSelected(tagSelected = id)
    }
    const cssStyle = {
        main: styleNav ? style.mainDiv : style.mainDivStiky
    }
    return (
            <div className={style.mainDiv}>
                {
                    infoSectionProducts.map(item =>
                        <button key={item.Id} onClick={() => handleTagSelected(item.Id)}
                                className={item.Id == tagSelected ? style.tagSelected : style.tag}>
                            {item.Name}
                        </button>
                    )
                }
            </div>
    )
}