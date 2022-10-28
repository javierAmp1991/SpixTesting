import style from "/styles/Desktop/Site/TypeSite/Bussines/Restaurant/descriptionCard.module.css"
import Image from "next/image";
import {GlobalConst} from "../../../../../../public/globalConst";
import {PresentationCard} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {useContext} from "react";
import {HeaderContext} from "../../../../../Providers/Site/TypeSite/Business/Restaurant/restaurantProvider";
import Link from "next/link";
import utilities from "/styles/utilities.module.css";
import SocialBar from "../../../../Misc/socialBar";


const directionText: string = "Direccion:"
const contactText: string = "Contactos:"
export default function DescriptionCard() {
    const info: PresentationCard = useContext(HeaderContext)
    return (
        /*<div className={style.mainDiv}>
            <div className={style.sizeImage}>
                <Image layout={"fill"} objectFit={"cover"} src={"/images/hellsKitchen.jpg"} alt={""}/>
            </div>
            <div className={style.mainDivInfo}>
                <div className={style.gridInfoNew}>
                    <div className={style.secondGradient}>
                        <div className={style.firstGradient}>
                            <div className={style.sizeLogo}>
                                <Image layout={"fill"} src={"/images/hellsKitchen.jpeg"}/>
                            </div>
                        </div>
                    </div>
                    <div className={style.Name}>
                        HellsKitchen Nightmare
                    </div>
                </div>
                <div className={style.title}>
                    Nuestro Local
                </div>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Corporis culpa dicta libero minima molestiae nihil odio officia
                    quo totam. Alias cum eveniet inventore ipsam necessitatibus,
                    nemo nobis omnis reprehenderit ut voluptatem! Adipisci atque, culpa
                    cum deleniti dignissimos dolores eos eveniet iste iusto laboriosam
                </div>
            </div>
        </div>*/
        <div className={style.mainDiv}>
            <div className={style.sizeImage}>
                <Image layout={"fill"} objectFit={"cover"} src={info.ImagePath} alt={""}/>
            </div>
            <div className={style.mainDivInfo}>
                <div className={style.gridImageName}>
                    <div className={style.secondGradient}>
                        <div className={style.firstGradient}>
                            <div className={style.sizeLogo}>
                                <Image layout={"fill"} src={info.LogoPath}/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={style.Name}>
                            {info.Name}
                        </div>
                        <SocialBar/>
                    </div>
                </div>
                <div>
                    {info.Description}
                </div>
                <div>
                    <span>{directionText}</span>
                    {/*<button className={utilities.styleLink}>{info.Venue}</button>*/}
                </div>
                <div className={style.gridInfoNew}>
                    <div>{contactText}</div>
                    <Link href={info.WebPage}>
                        <div className={style.sizeIcon}>
                            <Image layout={"fill"} src={GlobalConst.sourceImages.googleMap}/>
                        </div>
                    </Link>
                    <div className={style.sizeIcon}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.whatsaapIcon}/>
                    </div>
                    <Link href={info.Instagram}>
                        <div className={style.sizeIcon}>
                            <Image layout={"fill"} src={GlobalConst.sourceImages.instagramICon}/>
                        </div>
                    </Link>
                    <Link href={info.TikTok}>
                        <div className={style.sizeIcon}>
                            <Image layout={"fill"} src={GlobalConst.sourceImages.tiktokIcon}/>
                        </div>
                    </Link>
                    <Link href={info.Facebook}>
                        <div className={style.sizeIcon}>
                            <Image layout={"fill"} src={GlobalConst.sourceImages.facebookIcon}/>
                        </div>
                    </Link>
                </div>
                <div className={style.gridButtons}>
                    <div className={style.button}>
                        Ver carta
                    </div>
                    <div className={style.button}>
                        Reservar Mesa
                    </div>
                </div>
            </div>
        </div>
    )
}