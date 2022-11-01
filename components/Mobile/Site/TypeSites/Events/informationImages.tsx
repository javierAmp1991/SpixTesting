import Image from "next/image";
import SocialBar from "../../../../Desktop/Misc/socialBar";
import {PrincipalInfoEvent} from "../../../../../Class/Site/TypeSite/Events/events";
import {useContext} from "react";
import {PrincipalInfoEventContext} from "../../../../Providers/Site/TypeSite/Events/eventProvider";
import RatingStarVar from "../../../../Desktop/Misc/ratingStarVar";
import style from "/styles/Mobile/Site/TypeSite/Events/informationImages.module.css"
import ImageVideoMobile from "./imageVideo";
import DateSelector from "./dateSelector";

const restrictionText: string = "Restricciones: "
const attributesText: string = "Restricciones: "
const categoryText: string = "Categoria: "

export default function InformationImages() {
    const info: PrincipalInfoEvent = useContext(PrincipalInfoEventContext)
    return (
        <div className={style.mainDiv}>
            <div className={style.mainCont}>
                <div className={style.gridImageName}>
                    <div className={style.gradient}>
                        <div className={style.sizeLogo}>
                            <Image layout={"fill"} src={info.PathLogo}/>
                        </div>
                    </div>
                    <div className={style.gridInfo}>
                        <div className={style.name}>
                            {info.Name}
                        </div>
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
                        <SocialBar/>
                    </div>
                </div>
            </div>

            <DateSelector/>

            <ImageVideoMobile/>

            <div className={style.gridInfoUnder}>
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