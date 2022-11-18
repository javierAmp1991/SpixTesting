import style from "/styles/Mobile/Site/TypeSite/Bussines/Beauty&Health/ourJobs.module.css"
import Image from "next/image"
import {PresentationCard} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {useContext} from "react";
import {HeaderDataBHContext} from "../../../../../Providers/Site/TypeSite/Business/Beauty&Health/beautyHealthProvider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LayoutTitleCustomMobile from "../Misc/layoutTitleCustomMobile";
import {LayoutTitleLinkProps} from "../../../../../../Class/Layouts/layoutClass";

const seeGalery: string = "Ver Galeria"
const title: string = "Nuestros Trabajos"

export default function OurJobsMobile() {
    const info: PresentationCard = useContext(HeaderDataBHContext)
    const layoutTitleProp: LayoutTitleLinkProps = {
        Title: title
    }
    return (
        <div className={style.mainDiv}>
            <LayoutTitleCustomMobile item={layoutTitleProp}>
                <>
                    <div className={`${style.contSlider}`}>
                        {
                            info.SideImages.map((item, index) =>
                                <div key={index} className={style.contImage}>
                                    <div className={style.sizeImage}>
                                        <Image layout={"fill"} src={item} alt={""}/>
                                    </div>
                                </div>
                            )
                        }
                    </div>

                    <div className={style.seeGalery}>
                        {seeGalery}
                    </div>
                </>
            </LayoutTitleCustomMobile>
        </div>
    )
}