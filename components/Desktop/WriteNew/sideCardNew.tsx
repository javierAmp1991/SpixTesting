import style from "/styles/Desktop/WriteNew/writeNew.module.css";
import utilities from "/styles/utilities.module.css";
import Image from "next/image";
import React from "react";
import PrincipalInfoEventMobile, {PrincipalInfoEventPropMob} from "../../Mobile/Misc/principalInfoEventMobile";

const writeNew: string = "Leer noticia";
const today: string = "Hoy";

export class SideNewPop {
    Id: string
    PathBanner: string
    Title: string
    SubTitle: string
    Rating: number
    PathImageNew: string
    TitleNew: string
    SubtitleNew: string
}

export default function SideCardNew({item}: { item: SideNewPop }) {
    const newItem: PrincipalInfoEventPropMob = {
        Title: item.Title,
        Subtitle: item.SubTitle,
        isDarkMode: false,
        Rating: item.Rating
    }
    return (
        <div className={style.mainContSideCard}>
            <div className={style.bannerStyle}>
                <Image layout={"fill"} src={item.PathBanner} alt={""}/>
            </div>
            <div className={style.mainDivPadding}>
                <div className={style.mainContInfo}>
                    <PrincipalInfoEventMobile item={newItem}/>
                </div>

                <div className={style.mainContPrevNew}>
                    <div className={utilities.borderCardDesktopNoHover}>
                        <div className={style.stylePortada}>
                            <Image layout={"fill"} objectFit={"cover"} src={item.PathImageNew} alt={""}/>
                        </div>
                        <div className={style.gridNew}>
                            <div className={`${style.title} ${utilities.clamp1}`}>
                                {item.TitleNew}
                            </div>
                            <div className={`${style.subtitle} ${utilities.clamp2}`}>
                                {item.SubtitleNew}
                            </div>
                            <div className={utilities.fontPrimaryText}>
                                {today}
                            </div>
                            <div className={utilities.styleLink}>
                                {writeNew}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}