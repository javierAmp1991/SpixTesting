import style from "/styles/Desktop/Site/TypeSite/Bussines/Default/navSectionProducts.module.css"
import {SectionProductItem} from "../../../../../../Class/Misc/GlobalClass";
import {useContext} from "react";
import {SectionProductsContext} from "../../../../../Providers/Site/TypeSite/Business/Default/defaultProvider";
import Image from "next/image";

export default function NavSectionProducts({item} : {item: SectionProductItem[]}) {
    const handleTagSelected = (id: string) => {
        let data = document.getElementById(id)
        data.scrollIntoView({behavior: "smooth"})
    }
    return (
        <div className={style.grid}>
            {
                item.map((item, index) =>
                    <button key={item.Id} onClick={() => handleTagSelected(item.Id)}
                            className={index == 0 ? style.first : style.all}>
                        <div className={index == 0 ? style.nameSectionFirst : style.nameSection}>
                            {item.Name}
                        </div>
                        <div className={style.totalProducts}>
                            ({item.ListProducts.length} productos)
                        </div>
                        <div className={index == 0? style.sizeImage2 : style.sizeImage}>
                            <Image layout={"fill"} src={item.ListProducts[index].ImagePath}/>
                        </div>

                    </button>
                )
            }
        </div>
    )
}