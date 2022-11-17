import style from "/styles/Desktop/Site/TypeSite/Bussines/Beauty&Health/ourJobs.module.css"
import {PresentationCard} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {useContext, useRef} from "react";
import {HeaderDataBHContext} from "../../../../../Providers/Site/TypeSite/Business/Beauty&Health/beautyHealthProvider";
import Image from "next/image";
import {GlobalConst} from "../../../../../../public/globalConst";

const ourJobsText: string = "Nuestros Trabajos"
const seeGallery: string = "Ver Galeria"
const initialTranslate: string = `translate(-0)`
const idImages: string = "idBaseImageBH"
const gap: number = 48
const lessSpace: number = gap * 2

export default function OurJobs() {
    const info: PresentationCard = useContext(HeaderDataBHContext)
    let initialSelection: number = 0
    const mainDivRef = useRef(null)
    const sizeDivRef = useRef(null)

    const handleRight = () => {
        initialSelection += 1
        const firstElement = mainDivRef.current.children[0];
        mainDivRef.current.style.transition = `1000ms linear`;
        mainDivRef.current.style.transform = `translateX(-${((sizeDivRef.current.offsetWidth - lessSpace) / 3) + gap}px)`;
        const transition = () => {
            mainDivRef.current.style.transition = `none`;
            mainDivRef.current.style.transform = `translateX(0)`;
            mainDivRef.current.appendChild(firstElement);
            mainDivRef.current.removeEventListener('transitionend', transition)
        }
        mainDivRef.current.addEventListener('transitionend', transition);
    }

    const handleLeft = () => {
        initialSelection -= 1
        const lastIndex: number = mainDivRef.current.children.length - 1;
        const lastElement = mainDivRef.current.children[lastIndex];
        mainDivRef.current.insertBefore(lastElement, mainDivRef.current.firstChild);
        mainDivRef.current.style.transition = `none`;
        mainDivRef.current.style.transform = `translateX(-${((sizeDivRef.current.offsetWidth - lessSpace) / 3) + gap}px)`;

        setTimeout(() => {
            mainDivRef.current.style.transition = `1000ms linear`;
            mainDivRef.current.style.transform = `translateX(0px)`;
        }, 30)
    }

    return (
        <div className={style.mainDiv}>
            <div className={style.title}>
                {ourJobsText}
            </div>
            <div className={style.mainGridCarrousel}>
                <button onClick={handleLeft} className={style.sizeArrow}>
                    <Image layout={"fill"} src={GlobalConst.sourceImages.leftArrow} alt={""}/>
                </button>
                <div ref={sizeDivRef} className={style.contCarrousel}>
                    <div ref={mainDivRef} className={style.gridCarrousel}>
                        {
                            info.SideImages.map((item, index) =>
                                <div id={idImages + index} key={index} className={`${style.sizeImage}`}>
                                    <Image layout={"fill"} src={item} alt={""}/>
                                </div>
                            )
                        }
                    </div>
                </div>
                <button onClick={handleRight} className={style.sizeArrow}>
                    <Image layout={"fill"} src={GlobalConst.sourceImages.rightArrow} alt={""}/>
                </button>
            </div>
            <div className={style.seeGallery}>
                {seeGallery}
            </div>
        </div>
    )
}