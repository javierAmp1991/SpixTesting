import style from "/styles/Mobile/Site/TypeSite/Bussines/Beauty&Health/ourJobs.module.css"
import Image from "next/image"
import {PresentationCard} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {useContext} from "react";
import {HeaderDataBHContext} from "../../../../../Providers/Site/TypeSite/Business/Beauty&Health/beautyHealthProvider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const seeGalery: string = "Ver Galeria"
const title: string = "Nuestros Trabajos"

export default function OurJobsMobile() {
    const info: PresentationCard = useContext(HeaderDataBHContext)
    return (
        <div className={style.mainDiv}>
           {/* <div className={style.seeGalery}>
                {seeGalery}
            </div>*/}

            <div className={`${style.contSlider}`}>
                {
                    info.SideImages.map((item, index) =>
                        <div key={index} className={`${style.contImage} ${getStyle(index)}`}>
                            <div className={style.sizeImage}>
                                <Image layout={"fill"} src={item} alt={""}/>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
    function getStyle(num: number): string {
        if (num == 0) return style.first
        else if (num == 1) return style.second
        else if (num == 2) return style.third
        else return style.four
    }
}