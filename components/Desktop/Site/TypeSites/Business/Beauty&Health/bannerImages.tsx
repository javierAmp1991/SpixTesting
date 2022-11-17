import style from "/styles/Desktop/Site/TypeSite/Bussines/Beauty&Health/ourJobs2.module.css"
import Image from "next/image"
import {PresentationCard} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {useContext} from "react";
import {HeaderDataBHContext} from "../../../../../Providers/Site/TypeSite/Business/Beauty&Health/beautyHealthProvider";
import {GlobalId} from "../../../../../../public/globalConst";
const idPortal: string = GlobalId.globalIds.idPortal

export default function BannerImages() {

    const info: PresentationCard = useContext(HeaderDataBHContext)
    return (
        <div className={style.mainDiv}>
            <div className={`${style.contSlider}`}>
                {
                    info.SideImages.map((item, index) =>
                        <button key={index} className={`${style.contImage} ${getStyle(index)}`}>
                            <div className={style.sizeImage}>
                                <Image layout={"fill"} src={item} alt={""}/>
                            </div>
                        </button>
                    )
                }
            </div>
           {/* <button className={style.seeGalery}>
                Ver galeria
            </button>*/}
        </div>
    )

    function getStyle(num: number): string {
        if (num == 0) return style.first
        else if (num == 1) return style.second
        else if (num == 2) return style.third
        else return style.four
    }
}