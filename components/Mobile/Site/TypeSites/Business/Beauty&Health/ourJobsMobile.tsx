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

const title: string = "Sobre nosotros"/*
const listCortes: string[] = ["/images/corte4.jpeg", "/images/corte1.jpg", "/images/corte2.jpg", "/images/corte3.jpg", "/images/corte5.jpg"]*/
const listCortes: string[] = ["/images/corte4.jpeg", "/images/corte1.jpg", "/images/corte2.jpg"]
const contactText: string = "Redes y contacto:"
const directionText: string = "Direccion: "
const idPortal: string = GlobalId.globalIds.idPortal

export default function OurJobsMobile() {
    const info: PresentationCard = useContext(HeaderDataBHContext)
    let [displayMap, setDisplayMap] = useState(false)
    let [idx, setIdx] = useState(1)
    const handlePopUp = () => setDisplayMap(displayMap = !displayMap)
    return (
        <div className={style.mainDiv}>
            <div className={style.up}>
                <div className={style.title}>
                    {title}
                </div>
                <div className={style.contInfo}>
                    <div className={style.description}>
                        {info.Description}
                    </div>
                    <div className={style.contDirec}>
                        <span>{directionText}</span>
                        <button onClick={handlePopUp} className={style.contDirection}>
                            {info.Venue.Venue}
                        </button>
                    </div>
                    <div className={style.gridContact}>
                        {contactText}
                        {
                            info.Contact.map((item) =>
                                <Link key={item.Id} href={item.Link}>
                                    <div className={style.sizeIcon}>
                                        <Image layout={"fill"} src={item.Icon} alt={""}/>
                                    </div>
                                </Link>
                            )
                        }
                    </div>
                </div>


                <div className={style.contSlider}>
                    {
                        listCortes.map((item, index) =>
                            <div key={index} className={style.sizeImage}>
                                <Image layout={"fill"} src={item} alt={""}/>
                            </div>
                        )
                    }
                </div>
                <div className={style.seeGalery}>
                    Ver Galeria
                </div>
            </div>
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