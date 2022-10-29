import style from "/styles/Mobile/Site/TypeSite/Bussines/Restaurant/navProductSection.module.css"
import {SectionProductItem} from "../../../../../../Class/Misc/GlobalClass";
import {useContext, useEffect, useRef, useState} from "react";
import {SectionProductsContext} from "../../../../../Providers/Site/TypeSite/Business/Restaurant/restaurantProvider";

export default function NavProductsSectionMobile({isStikcy}: { isStikcy: boolean }) {
    const infoSectionProducts: SectionProductItem[] = useContext(SectionProductsContext)
    let [tagSelected, setTagSelected] = useState("")
    let [styleNav, setStyleNav] = useState(true)
    const handleStyleNav = () => setStyleNav(styleNav = true)
    let [topPX, setTopPX] = useState("-50px")
    let [control, setControl] = useState(0)
    let [firUbication, setFirstUbication] = useState(0)

    useEffect(() => {
            const functionScroll = () => {
                if (window.pageYOffset > firUbication) setTopPX(topPX = "-50px")
                else setTopPX(topPX = "15px")
            }

            window.addEventListener(`scroll`, functionScroll)
            setFirstUbication(firUbication = window.pageYOffset)
        }
    )

    const [isSticky, setIsSticky] = useState(false)
    const refMobile = useRef()
    useEffect(() => {
        const cachedRef = refMobile.current,
            observer = new IntersectionObserver(
                ([e]) => {
                    setIsSticky(e.intersectionRatio < 1)
                },
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
    const handleTagSelected = (id: string) => {
        let data = document.getElementById(id)
        data.scrollIntoView({behavior: "smooth"})
        setTagSelected(tagSelected = id)
    }

    const cssStyle = {
        main: isSticky && style.mainDivStiky
    }
    return (
        <div style={{top: topPX}} className={`${style.mainDiv} ${cssStyle.main}`}>
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