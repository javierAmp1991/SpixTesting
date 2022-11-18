import style from "/styles/Mobile/Site/TypeSite/Bussines/Beauty&Health/ourJobs.module.css"
import Image from "next/image"
import {PresentationCard} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {useContext, useState} from "react";
import {HeaderDataBHContext} from "../../../../../Providers/Site/TypeSite/Business/Beauty&Health/beautyHealthProvider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LayoutTitleCustomMobile from "../Misc/layoutTitleCustomMobile";
import {LayoutTitleLinkProps} from "../../../../../../Class/Layouts/layoutClass";
import Slider from "react-slick";

const seeGalery: string = "Ver Galeria"
const title: string = "Nuestros Trabajos"

export default function OurJobsMobile() {
    const info: PresentationCard = useContext(HeaderDataBHContext)
    const layoutTitleProp: LayoutTitleLinkProps = {
        Title: title
    }
    let [control, setControl] = useState(0)

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        slidesToShow: 1,
        speed: 700,
        beforeChange: (current, next) => setControl(next)
    };

    return (
        <div className={style.mainDiv}>
            <LayoutTitleCustomMobile item={layoutTitleProp}>
                <>
                    {/*<div className={`${style.contSlider}`}>
                        {
                            info.SideImages.map((item, index) =>
                                <div key={index} className={style.contImage}>
                                    <div className={style.sizeImage}>
                                        <Image layout={"fill"} src={item} alt={""}/>
                                    </div>
                                </div>
                            )
                        }
                    </div>*/}

                    <div className={style.contSlider}>
                        <Slider {...settings}>
                            {
                                info.SideImages.map((item, index) =>
                                    <div key={index}
                                         className={`${style.sizeImage} ${index === control ? style.focus : style.noFocus}`}>
                                        <Image layout={"fill"} src={item} alt={""}/>
                                    </div>
                                )
                            }
                        </Slider>
                    </div>

                    <div className={style.seeGalery}>
                        {seeGalery}
                    </div>
                </>
            </LayoutTitleCustomMobile>
        </div>
    )
}