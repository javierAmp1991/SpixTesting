import style from "/styles/Mobile/Site/TypeSite/Bussines/Restaurant/navProductSection.module.css"
import {SectionProductItem} from "../../../../../../Class/Misc/GlobalClass";
import {useContext, useEffect, useRef, useState} from "react";
import {SectionProductsContext} from "../../../../../Providers/Site/TypeSite/Business/Restaurant/restaurantProvider";

export default function NavProductsSectionMobile() {
    const infoSectionProducts: SectionProductItem[] = useContext(SectionProductsContext)
    let [tagSelected, setTagSelected] = useState("")
    let [styleNav, setStyleNav] = useState(true)
    const handleStyleNav = () => setStyleNav(styleNav = true)
    let [topPX, setTopPX] = useState("-50px")
    let [control, setControl] = useState(0)
    let [firUbication, setFirstUbication] = useState(0)
    let [scrollNumber, setScrollNumber] = useState(0)
    let isSticky: boolean = true

    useEffect(() => {
            const functionScroll = () => {
                setScrollNumber(scrollNumber = window.scrollY)
                if (window.scrollY > firUbication) setTopPX(topPX = "-50px")
                else setTopPX(topPX = "0")
            }

            window.addEventListener(`scroll`, functionScroll)
            setFirstUbication(firUbication = window.scrollY)
        }
    )

    /*const [isSticky, setIsSticky] = useState(false)
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
    }, [])*/
    const handleTagSelected = (id: string) => {
        let data = document.getElementById(id)
        data.scrollIntoView({behavior: "smooth"})
        setTagSelected(tagSelected = id)
    }

    return (
        <div style={{top: topPX}} className={`${style.mainDiv}`}>
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