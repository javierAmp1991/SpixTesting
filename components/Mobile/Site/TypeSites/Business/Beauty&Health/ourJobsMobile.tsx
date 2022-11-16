import style from "/styles/Mobile/Site/TypeSite/Bussines/Beauty&Health/ourJobs.module.css"
import Image from "next/image"
import {PresentationCard} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {useContext} from "react";
import {HeaderDataBHContext} from "../../../../../Providers/Site/TypeSite/Business/Beauty&Health/beautyHealthProvider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const listCortes: string[] =
    ["/images/corte4.jpeg", "/images/corte1.jpg", "/images/corte2.jpg", "/images/corte3.jpg", "/images/corte5.jpg"]
const seeGalery: string = "Ver Galeria"
const title: string = "Nuestros Trabajos"

export default function OurJobsMobile() {
    const info: PresentationCard = useContext(HeaderDataBHContext)
    return (
        <div className={style.mainDiv}>
            {/* <div className={style.title}>
                {title}
            </div>*/}
            <div className={style.separationLine}/>

            <div className={style.seeGalery}>
                {seeGalery}
            </div>

            <div className={`${style.contSlider}`}>
                {
                    listCortes.map((item, index) =>
                        <div key={index} className={`${style.contImage} 
                                ${index % 2 == 0 ? style.top : style.bottom}
                                 ${index % 2 != 0 ? style.up : style.down}`}>
                            <div className={style.sizeImage}>
                                <Image layout={"fill"} src={item} alt={""}/>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}