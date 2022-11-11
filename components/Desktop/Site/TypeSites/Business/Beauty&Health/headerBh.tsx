import BannerVar from "../../../../Misc/bannerVar";
import style from "/styles/Desktop/Site/TypeSite/Bussines/Beauty&Health/headerBh.module.css"
import Image from "next/image";
import {PresentationCard} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {useContext, useState} from "react";
import {HeaderDataBHContext} from "../../../../../Providers/Site/TypeSite/Business/Beauty&Health/beautyHealthProvider";
import Link from "next/link";
import SocialBar from "../../../../Misc/socialBar";
import utilities from "/styles/utilities.module.css";
import PopUpContainer from "../../../../Misc/popUpContainer";
import MapPopUp from "../../../../Misc/mapPopUp";
import {createPortal} from "react-dom";
import {GlobalId} from "../../../../../../public/globalConst";

const sizeBanner: string = `calc(100vh - 97px)`
const contactText: string = "Redes y contacto:"
const directionText: string = "Direccion: "
const idPortal: string = GlobalId.globalIds.idPortal

export default function HeaderBh() {
    const info: PresentationCard = useContext(HeaderDataBHContext)
    let [displayMap, setDisplayMap] = useState(false)
    const handlePopUp = () => setDisplayMap(displayMap = !displayMap)
    return (
        <div className={style.mainDiv}>
            <BannerVar item={info.Banner} size={sizeBanner}/>
           {/* <div className={style.blackScreen}/>
            <div className={style.blackScreen2}/>*/}
            <div className={style.info}>
                <div className={style.sizeLogo}>
                    <Image layout={"fill"} src={info.LogoPath}/>
                </div>
                <div className={style.gridTags}>
                    {
                        info.Tags.map(item =>
                            <div key={item} className={style.tag}>
                                {item}
                            </div>
                        )
                    }
                </div>
                <div className={style.title}>
                    {info.Name}
                </div>
                <div className={style.gridSocialContact}>
                    <SocialBar/>
                    <div className={style.gridContact}>
                        <span>{contactText}</span>
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

                <div className={style.description}>
                    {info.Description}
                </div>
                <div className={style.contDirection}>
                    <span>{directionText}</span>
                    <button onClick={handlePopUp} className={utilities.styleLink}>{info.Venue.Venue}</button>
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
}