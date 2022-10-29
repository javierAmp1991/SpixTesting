import style from "/styles/Desktop/Site/TypeSite/Bussines/Restaurant/navProductSection.module.css"
import {SectionProductItem} from "../../../../../../Class/Misc/GlobalClass";
import {useContext, useEffect, useRef, useState} from "react";
import {SectionProductsContext} from "../../../../../Providers/Site/TypeSite/Business/Restaurant/restaurantProvider";

export default function NavProductsSection() {
    const infoSectionProducts: SectionProductItem[] = useContext(SectionProductsContext)
    let [tagSelected, setTagSelected] = useState("")
    let [styleNav, setStyleNav] = useState(true)
    const handleStyleNav = () => setStyleNav(styleNav = true)
    const handleTagSelected = (id: string) => {
        let data = document.getElementById(id)
        data.scrollIntoView({behavior: "smooth"})
        setTagSelected(tagSelected = id)
    }


    const [isSticky, setIsSticky] = useState(false)
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
    }, [])

    const cssStyle = {
        main: isSticky && style.mainDivStiky
    }

    return (
        <div ref={refDesktop} className={`${style.mainDiv} ${cssStyle.main}`}>
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