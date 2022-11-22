import style from "/styles/Mobile/Site/TypeSite/Misc/navSectionProducts.module.css"
import Image from "next/image";
import {SectionProductItem} from "../../../../../Class/Misc/GlobalClass";

export default function NavSectionProductsMobile({item}: { item: SectionProductItem[] }) {
    const handleTagSelected = (id: string) => {
        let data = document.getElementById(id).getBoundingClientRect()
        window.scrollTo({top: (data.top + window.scrollY - 60), behavior: "smooth"})
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
                        <div className={index == 0 ? style.sizeImage2 : style.sizeImage}>
                            <Image layout={"fill"} src={item.ListProducts[index].ImagePath} alt={""}/>
                        </div>

                    </button>
                )
            }
        </div>
    )
}