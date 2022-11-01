import style from "/styles/Desktop/Site/TypeSite/Bussines/Restaurant/navProductSection.module.css"
import {SectionProductItem} from "../../../../../../Class/Misc/GlobalClass";
import {useContext, useEffect, useState} from "react";
import {SectionProductsContext} from "../../../../../Providers/Site/TypeSite/Business/Restaurant/restaurantProvider";

const hidePositionNav: string = `translateY(-50px)`
const showPositionNav: string = `translateY(5px)`

export default function NavProductsSection({hasBeenReached}: { hasBeenReached: boolean }) {
    const infoSectionProducts: SectionProductItem[] = useContext(SectionProductsContext)
    let [tagSelected, setTagSelected] = useState("")
    const handleTagSelected = (id: string) => {
        let data = document.getElementById(id)
        data.scrollIntoView({behavior: "smooth"})
        setTagSelected(tagSelected = id)
    }
    let [topPX, setTopPX] = useState(hidePositionNav)
    let [firUbication, setFirstUbication] = useState(0)

    useEffect(() => {
        const functionScroll = () => {
            if (hasBeenReached) {
                if (window.scrollY > firUbication) setTopPX(topPX = hidePositionNav)
                else setTopPX(topPX = showPositionNav)
            } else setTopPX(topPX = hidePositionNav)

            setFirstUbication(firUbication = window.scrollY)
        }
        window.addEventListener(`scroll`, functionScroll)
        return () => window.removeEventListener(`scroll`, functionScroll);
    })

    return (
        <div style={{transform: topPX}} className={style.mainDiv}>
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