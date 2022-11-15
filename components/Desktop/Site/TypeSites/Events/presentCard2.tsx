import style from "/styles/Desktop/Site/TypeSite/Events/presentCard2.module.css";
import {
    HeaderSiteEventsProp,
    PrincipalInfoEvent,
    TypeSiteEvents
} from "../../../../../Class/Site/TypeSite/Events/events";
import React, {useContext} from "react";
import {PrincipalInfoEventContext} from "../../../../Providers/Site/TypeSite/Events/eventProvider";
import ImageVideo from "./imageVideo";
import {GlobalId} from "../../../../../public/globalConst";
import {LevelUser} from "./sideCard";
import HeaderSiteEvents from "./Misc/headerSiteEvents";

const user: LevelUser = {
    Id: "iwewqndsaj2383",
    User: "@user001",
    Level: 0
}
const userRequirement: number = 2
const idPortal: string = GlobalId.globalIds.idPortal

export default function PresentCard2() {
    const info: PrincipalInfoEvent = useContext(PrincipalInfoEventContext)
    const headerEvents: HeaderSiteEventsProp = {
        Name: info.Name,
        Description: info.Description,
        Tags: info.Tags,
        Produce: info.Produce,
        TypeSite: TypeSiteEvents.Default,
        SocialButtons: {
            Like: {
                IsLike: true,
                Like: 500,
            },
            WishList: {
                IsLike: false,
                Like: 156
            }
        },
        Width: "85%"
    }
    return (
        <div className={style.mainDiv}>
            <div className={style.mainDiv2}>
                {/*<div className={style.gridInfo}>
                    <div className={style.gridAtr}>
                        {info.Attributes.map((item, index) =>
                            <div key={item} className={style.tagCategory}>
                                {item}
                            </div>
                        )}
                    </div>

                    <div>
                        <div className={style.name}>
                            {info.Name}
                        </div>

                        <div className={"pt-3"}>
                            <div className={style.description}>
                                Back to 80's en vivo: Noruega (Tributo A Ha ) y Suburbia (Tributo a Pet Shop Boys).
                                Evento con aforo , según fase , para mayores de 18 años con pase de movilidad .Tenemos
                                convenio con estacionamiento en Petrobras , Reserva tu estacionamiento al whats
                            </div>
                        </div>

                        <div className={style.gridProduceLogo}>
                            <span className={style.produce}>Produce:</span> El Huevo
                        </div>
                    </div>

                    <div className={style.gridContact}>
                        {contactText}
                        {
                            info.Contact.map(item =>
                                <Link key={item.Id} href={item.Link}>
                                    <a className={style.grid2}>
                                        <div className={style.sizeIcon}>
                                            <Image layout={"fill"} src={item.Icon} alt={""}/>
                                        </div>
                                    </a>
                                </Link>
                            )
                        }
                    </div>


                    <div className={style.gridSocialRedes}>
                        <WishlistButton item={wishlistButton}/>
                        <LikeButton2 item={likeButton}/>
                    </div>
                    <div className={style.separationLine}/>


                    <div>
                        <LayoutCarrouselDesktop layoutProp={layoutPropNews}>
                            {
                                questions.map((item, index) =>
                                    index == 0 &&
                                    <QuestionShortDesk key={item.Id} item={item}/>
                                )
                            }
                        </LayoutCarrouselDesktop>
                    </div>
                     <Link href={"/"}>
                        <a>
                        <div className={style.seeMoreQuestion}> ver mas preguntas</div>
                        </a>
                    </Link>

                </div>*/}
                <HeaderSiteEvents item={headerEvents}/>
                <ImageVideo/>
            </div>
        </div>
    )
}