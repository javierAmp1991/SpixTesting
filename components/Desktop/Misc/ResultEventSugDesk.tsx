import {GlobalConst} from "../../../public/globalConst";
import style from "/styles/Desktop/Misc/resultSugCont.module.css"
import utilities from "/styles/utilities.module.css"

const title: string = "Eventos"
import {EventResult} from "./headerSpixDesktop";
import Image from "next/image";

export default function ResultEventSugDesk({item}: { item: EventResult[] }) {
    return (
        <div className={style.mainCont}>
            <div className={style.gridTitleImage}>
                <div className={style.sizeImage}>
                <Image layout={"fill"} src={GlobalConst.sourceImages.stadiumIcon} alt=""/>
                </div>
                <div className={utilities.fontSubTitle}>{title}</div>
            </div>
            <div className={style.contResult}>
                {
                    item.map((item1, index) =>
                        <div key={index}>
                            <div className={`${utilities.fontPrimaryText} mb-1`}>
                                {item1.Name}
                            </div>
                            <div className="h-4 w-24 mb-1.5 relative">
                                <Image layout={"fill"}  src={GlobalConst.sourceImages.reviewStars} alt=""/>
                            </div>
                            <div className={utilities.fontSecundaryText}>
                                En:
                                {
                                    item1.InVenue.map((item, index) =>
                                        index > 2 ?
                                            <span>...</span>
                                            :
                                            index == 2 ?
                                                <span>{item}</span>
                                                :
                                                <span> {item}, </span>
                                    )
                                }
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}