import style from "/styles/Desktop/Site/TypeSite/Bussines/Restaurant/descriptionCard.module.css"
import Image from "next/image";
import {GlobalConst} from "../../../../../../public/globalConst";

const directionText: string = "Direccion:"
const contactText: string = "Contactos:"
export default function DescriptionCard() {
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
                <Image layout={"fill"} objectFit={"cover"} src={"/images/hellsKitchen.jpg"} alt={""}/>
            </div>
            <div className={style.mainDivInfo}>
                <div className={style.gridImageName}>
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
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Corporis culpa dicta libero minima molestiae nihil odio officia
                    quo totam. Alias cum eveniet inventore ipsam necessitatibus,
                    nemo nobis omnis reprehenderit ut voluptatem! Adipisci atque, culpa
                    cum deleniti dignissimos dolores eos eveniet iste iusto laboriosam
                </div>
                <div>
                    <span>{directionText}</span> San Francisco 657, California
                </div>
                <div className={style.gridInfoNew}>
                    <div>{contactText}</div>
                    <div className={style.sizeIcon}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.googleMap}/>
                    </div>
                    <div className={style.sizeIcon}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.whatsaapIcon}/>
                    </div>
                    <div className={style.sizeIcon}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.instagramICon}/>
                    </div>
                    <div className={style.sizeIcon}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.tiktokIcon}/>
                    </div>
                    <div className={style.sizeIcon}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.facebookIcon}/>
                    </div>
                </div>
            </div>
        </div>
    )
}