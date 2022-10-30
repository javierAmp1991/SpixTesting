import style from "/styles/Desktop/Site/TypeSite/Bussines/Restaurant/navProductSection.module.css"
import {SectionProductItem} from "../../../../../../Class/Misc/GlobalClass";
import {useContext, useEffect, useState} from "react";
import {SectionProductsContext} from "../../../../../Providers/Site/TypeSite/Business/Restaurant/restaurantProvider";

const hidePositionNav: string = `translateY(-50px)`
const showPositionNav: string = `translateY(15px)`

export default function NavProductsSection({isSticky}: { isSticky: boolean }) {
    const infoSectionProducts: SectionProductItem[] = useContext(SectionProductsContext)
    let [tagSelected, setTagSelected] = useState("")
    const handleTagSelected = (id: string) => {
        let data = document.getElementById(id)
        data.scrollIntoView({behavior: "smooth"})
        setTagSelected(tagSelected = id)
    }
    let [topPX, setTopPX] = useState(hidePositionNav)
    let [scrollNumber, setScrollNumber] = useState(0)
    let [firUbication, setFirstUbication] = useState(0)


    /* const [isSticky, setIsSticky] = useState(false)
     const refDesktop = useRef()
     useEffect(() => {
         const cachedRef = refDesktop.current,
             observer = new IntersectionObserver(
                 ([e]) => setIsSticky(e.intersectionRatio < 1),
                 {
                     threshold: [1],
                     rootMargin: '-1px 0px 0px 0px'
                 }
             )

         observer.observe(cachedRef)

         // unmount
         return function () {
             observer.unobserve(cachedRef)
         }
     }, [])*/

    useEffect(() => {
            const functionScroll = () => {
                if (isSticky) {
                    setScrollNumber(scrollNumber = window.scrollY)
                    if (window.scrollY > firUbication) setTopPX(topPX = hidePositionNav)
                    else setTopPX(topPX = showPositionNav)
                } else setTopPX(topPX = hidePositionNav)
            }
            window.addEventListener(`scroll`, functionScroll)
            setFirstUbication(firUbication = window.scrollY)
        }
    )

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
            <div>{scrollNumber}</div>
        </div>
    )
}