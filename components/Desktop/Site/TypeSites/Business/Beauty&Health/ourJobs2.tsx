import style from "/styles/Desktop/Site/TypeSite/Bussines/Beauty&Health/ourJobs2.module.css"
import Image from "next/image"
import {PresentationCard} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {useContext, useState} from "react";
import {HeaderDataBHContext} from "../../../../../Providers/Site/TypeSite/Business/Beauty&Health/beautyHealthProvider";
import {GlobalId} from "../../../../../../public/globalConst";
import PopUpContainer from "../../../../Misc/popUpContainer";
import MapPopUp from "../../../../Misc/mapPopUp";
import {createPortal} from "react-dom";
import Link from "next/link";

const title: string = "Sobre nosotros"
/*const listCortes: string[] = ["/images/corte4.jpeg", "/images/corte1.jpg", "/images/corte2.jpg", "/images/corte3.jpg", "/images/corte5.jpg"]*/
const listCortes: string[] = ["/images/corte4.jpeg", "/images/corte1.jpg", "/images/corte2.jpg"]
const idPortal: string = GlobalId.globalIds.idPortal
const directionText: string = "Direccion: "
const contactText: string = "Redes y contacto: "

export default function OurJobs2() {

    const info: PresentationCard = useContext(HeaderDataBHContext)
    let [displayMap, setDisplayMap] = useState(false)
    const handlePopUp = () => setDisplayMap(displayMap = !displayMap)
    return (
        <div className={style.mainDiv}>
            <div className={style.up}>
                <div className={style.title}>
                    {title}
                </div>
                <div>
                    {info.Description}
                </div>
                <div>
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
            <div>


                <div className={style.contSlider}>
                    {
                        listCortes.map((item, index) =>
                            <div key={index} className={style.sizeImage}>
                                <Image layout={"fill"} src={item} alt={""}/>
                            </div>
                        )
                    }
                    <button className={style.seeGalery}>
                        Ver galeria
                    </button>
                </div>
            </div>
            {
                displayMap &&
                createPortal(
                    <PopUpContainer closePopUp={handlePopUp} isButtonVisible={true} isBackground={true}>
                        <MapPopUp item={info.Venue}/>
                    </PopUpContainer>, document.getElementById(idPortal)
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