import style from "/styles/Desktop/Site/TypeSite/Events/informationImages.module.css";
import Image from "next/image";
import SocialBar from "../../../Misc/socialBar";
import {PrincipalInfoEvent} from "../../../../../Class/Site/TypeSite/Events/events";
import {useContext} from "react";
import {PrincipalInfoEventContext} from "../../../../Providers/Site/TypeSite/Events/eventProvider";
import RatingStarDesk from "../../../Misc/ratingStarDesk";
import ImageVideo from "./imageVideo";
import RatingStarVar from "../../../Misc/ratingStarVar";

const restrictionText: string = "Restricciones: "
const attributesText: string = "Restricciones: "
const categoryText: string = "Categoria: "

export default function InformationImages() {
    const info: PrincipalInfoEvent = useContext(PrincipalInfoEventContext)
    return (
        <div className={style.mainDiv}>
            <div className={style.gridInfo}>
                <div className={style.gridLogoSocial}>
                    <div className={style.gridImageName}>
                        <div className={style.gradient}>
                            <div className={`${style.sizeLogo}`}>
                                <Image layout={"fill"} src={info.PathLogo} alt=""/>
                            </div>
                        </div>
                        <div className={style.name}>
                            {info.Name}
                            <RatingStarVar item={info.Rating} size={16}/>
                            <div className={style.gridrestrictions}>
                                <div className={style.colorRestriction}>
                                    {restrictionText}
                                </div>
                                {
                                    info.Restrictions.map((item, index) =>
                                        <a className={style.sizeRestrictionIcon} key={index}>
                                            <Image layout={"fill"} objectFit={"cover"} src={item} alt=""/>
                                        </a>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <SocialBar/>
                </div>

            </div>

            <ImageVideo/>

            <div className={style.gridInfo}>
                <div className={style.description}>
                    {info.Description}
                </div>
                <div>
                    {categoryText} <span className={style.category}>{info.Category}</span>
                </div>
                <div className={style.gridAtr}>
                    {attributesText}
                    {info.Attributes.map((item, index) =>
                        <span key={item} className={style.atr}>{item}
                            {
                                index == info.Attributes.length - 1 ? "." : ", "
                            }
                        </span>
                    )}
                </div>
            </div>
        </div>
    )
}