import style from "/styles/Mobile/Site/TypeSite/Bussines/Beauty&Health/ourJobs.module.css"
import Image from "next/image"
import SocialBar from "../../../../Misc/socialBar";
import Link from "next/link";
import utilities from "/styles/utilities.module.css";
import {PresentationCard} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {useContext, useState} from "react";
import {HeaderDataBHContext} from "../../../../../Providers/Site/TypeSite/Business/Beauty&Health/beautyHealthProvider";
import {GlobalId} from "../../../../../../public/globalConst";
import MapPopUp from "../../../../Misc/mapPopUp";
import {createPortal} from "react-dom";
import PopUpContainerMob from "../../../../Misc/popUpContainerMob";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const title: string = "Sobre nosotros"
const listCortes: string[] = ["/images/corte4.jpeg", "/images/corte1.jpg", "/images/corte2.jpg", "/images/corte3.jpg", "/images/corte5.jpg"]
const contactText: string = "Redes y contacto:"
const directionText: string = "Direccion: "
const idPortal: string = GlobalId.globalIds.idPortal

export default function OurJobsMobile() {
    const info: PresentationCard = useContext(HeaderDataBHContext)
    let [displayMap, setDisplayMap] = useState(false)
    let [idx, setIdx] = useState(1)
    const handlePopUp = () => setDisplayMap(displayMap = !displayMap)
    var settings = {
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        centerPadding: 20,
        arrows: false,
        beforeChange: (current, next) => setIdx(idx = next == 4 ? 5 : next + 1),
    };
    return (
        <div className={style.mainDiv}>
            <div className={style.up}>
                <div className={style.title}>
                    {title}
                </div>

                <div className={style.description}>
                    {info.Description}
                </div>

            </div>
            <div className={style.contSlider}>
                <Slider {...settings}>
                    {
                        listCortes.map((item, index) =>
                            <div key={index} className={`${style.sizeImage} ${index === idx ? style.focus : style.noFocus}`}>
                                <Image layout={"fill"} src={item} alt={""}/>
                            </div>
                        )
                    }
                </Slider>
            </div>

            {/* <div className={style.gridCarrousel}>
                <div/>
                <div className={style.gridImages}>
                    {
                        listCortes.map((item, index) =>
                            <div key={index} className={`${style.sizeImage} ${getStyle(index)}`}>
                                <Image layout={"fill"} src={item} alt={""}/>
                            </div>
                        )
                    }
                </div>
                <div/>
            </div>*/}
            {
                displayMap &&
                createPortal(
                    <PopUpContainerMob closePopUp={handlePopUp} isButtonVisible={true} isBackground={true}>
                        <MapPopUp item={info.Venue}/>
                    </PopUpContainerMob>, document.getElementById(idPortal)
                )
            }
        </div>
    )

    function getStyle(num: number): string {
        if (num == 2) return style.focus
        else if (num == 0 || num == 4) return style.noFocus2
        else return style.noFocus
    }
}