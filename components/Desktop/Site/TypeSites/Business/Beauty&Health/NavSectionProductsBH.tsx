import style from "/styles/Desktop/Site/TypeSite/Bussines/Beauty&Health/navSectionProducts.module.css"
import {SectionProductItem} from "../../../../../../Class/Misc/GlobalClass";
import Image from "next/image";

const control: number = 2

export default function NavSectionProductsBH({item}: { item: SectionProductItem[] }) {
    const handleTagSelected = (id: string) => {
        let data = document.getElementById(id).getBoundingClientRect()
        window.scrollTo({top: (data.top + window.scrollY - 60), behavior: "smooth"})
    }
    return (
        <div className={style.grid}>
            {
                item.map((item, index) =>
                    <button key={item.Id} onClick={() => handleTagSelected(item.Id)}
                            className={`${index == control ? style.first : style.all}
                            ${(index == 1 || index == 4) && style.rightText} ${(index == 0 || index == 3) && style.leftText}`}>
                        <div className={index == control ? style.nameSectionFirst : style.nameSection}>
                            {item.Name}
                        </div>
                        <div className={index == control ? style.totalProductsFirst : style.totalProducts}>
                            ({item.ListProducts.length} productos)
                        </div>
                        <div className={`${index == control ? style.sizeImage2 : style.sizeImage}
                       ${(index == 1 || index == 4) && style.leftImage} ${(index == 0 || index == 3) && style.rightImage}`}>
                            <Image layout={"fill"} src={item.ListProducts[index].ImagePath} alt={""}/>
                        </div>
                    </button>
                )
            }
        </div>
    )
}