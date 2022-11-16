import style from "/styles/Mobile/Site/TypeSite/Bussines/Misc/headerSiteBusiness.module.css";
import Link from "next/link";
import Image from "next/image";
import {GlobalConst} from "../../../../../../public/globalConst";
import {ContactItems, TypeActionContact} from "../../../../../../Class/Site/TypeSite/Events/events";

const title: string = "Opciones"

export default function ContactPopUpMobile({item}: { item: ContactItems[] }) {
    return (
        <div className={style.mainDivPopUp}>
            <div className={style.background}>
                <Image layout={"fill"} src={GlobalConst.sourceImages.backgroundContact}/>
            </div>
            <div className={style.mainDivButtons}>
                <div className={style.title}>
                    {title}
                </div>
                <Link href={"/"}>
                    <a className={style.buttonPopUp}>
                        <div className={style.sizeIconPopUp}>
                            <Image layout={"fill"} src={GlobalConst.sourceImages.reportIcon} alt={""}/>
                        </div>
                        <div className={style.textPopUp}>
                            Reportar
                        </div>
                    </a>
                </Link>
                {
                    item.map(item =>
                        item.Type == TypeActionContact.Link ?
                            <a href={item.Link} className={style.buttonPopUp}>
                                <div className={style.sizeIconPopUp}>
                                    <Image layout={"fill"} src={item.Icon} alt={""}/>
                                </div>
                                <div className={style.textPopUp}>
                                    {item.Link}
                                </div>
                            </a>
                            :
                            <button className={style.buttonPopUp}>
                                <div className={style.sizeIconPopUp}>
                                    <Image layout={"fill"} src={item.Icon} alt={""}/>
                                </div>
                                <div className={style.textPopUp}>
                                    {item.Link}
                                </div>
                            </button>
                    )
                }
            </div>
        </div>
    )
}