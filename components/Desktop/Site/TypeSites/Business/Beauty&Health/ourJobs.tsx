import style from "/styles/Desktop/Site/TypeSite/Bussines/Beauty&Health/ourJobs.module.css"
import {PresentationCard} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {useContext, useState} from "react";
import {HeaderDataBHContext} from "../../../../../Providers/Site/TypeSite/Business/Beauty&Health/beautyHealthProvider";
import Image from "next/image";
import {GlobalConst} from "../../../../../../public/globalConst";

const ourJobsText: string = "Nuestros Trabajos"
const seeGallery: string = "Ver Galeria"
const initialTranslate: string = `translate(-0)`

export default function OurJobs() {
    const info: PresentationCard = useContext(HeaderDataBHContext)
    let [controlImage, setControlImage] = useState(1)
    let [translateControl, setTranslateControl] = useState(initialTranslate)
    const handleRightClick = () => {

    }
    const handleLeftClick = () => {

    }
    return (
        <div className={style.mainDiv}>
            <div className={style.title}>
                {ourJobsText}
            </div>
            <div className={style.seeGallery}>
                {seeGallery}
            </div>
            <div className={style.mainGridCarrousel}>
                <button className={style.sizeArrow}>
                    <Image layout={"fill"} src={GlobalConst.sourceImages.leftArrow}/>
                </button>
                <div className={style.contCarrousel}>
                    <div style={{transform: translateControl}} className={style.gridCarrousel}>
                        {
                            info.SideImages.map((item, index) =>
                                <div key={index} className={`${style.sizeImage} ${getStyleImage(index)}`}>
                                    <Image layout={"fill"} src={item} alt={""}/>
                                </div>
                            )
                        }
                    </div>
                </div>
                <button className={style.sizeArrow}>
                    <Image layout={"fill"} src={GlobalConst.sourceImages.rightArrow}/>
                </button>
            </div>
        </div>
    )

    function getStyleImage(num: number) {
        return num == controlImage ? style.focus : style.noFocus
    }
}