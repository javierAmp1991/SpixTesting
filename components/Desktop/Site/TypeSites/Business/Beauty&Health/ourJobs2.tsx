import style from "/styles/Desktop/Site/TypeSite/Bussines/Beauty&Health/ourJobs2.module.css"
import Image from "next/image"
import {PresentationCard} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {useContext} from "react";
import {HeaderDataBHContext} from "../../../../../Providers/Site/TypeSite/Business/Beauty&Health/beautyHealthProvider";
import {GlobalId} from "../../../../../../public/globalConst";

const title: string = "Nuestros Trabajos"
const listCortes: string[] = ["/images/corte4.jpeg", "/images/corte1.jpg", "/images/corte2.jpg", "/images/corte3.jpg", "/images/corte5.jpg"]
const idPortal: string = GlobalId.globalIds.idPortal

export default function OurJobs2() {

    const info: PresentationCard = useContext(HeaderDataBHContext)
    return (
        <div className={style.mainDiv}>
            <div className={style.up}>
               {/* <div className={style.title}>
                    {title}
                </div>*/}
                <button className={style.seeGalery}>
                    Ver galeria
                </button>
            </div>

            <div className={`${style.contSlider} ${getPadding()}`}>
                {
                    listCortes.map((item, index) =>
                        <div key={index} className={`${style.contImage} 
                                ${index % 2 == 0 ? style.top : style.bottom}
                                 ${index % 2 != 0 ? style.up : style.down} `}>
                            <div className={style.sizeImage}>
                                <Image layout={"fill"} src={item} alt={""}/>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )

    function getPadding(): string {
        if (listCortes.length == 3) return style.padding3
        else if (listCortes.length == 4) return style.padding4
        else return ""
    }

    function getStyle(num: number): string {
        if (num == 2) return style.focus
        else if (num == 0 || num == 4) return style.noFocus2
        else return style.noFocus
    }
}