import style from "/styles/Desktop/Misc/mapPopUp.module.css";
import utilities from "../../../styles/utilities.module.css";
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
import React from "react";
export class MapPopUpProp{
    Name: string
    Venue: string
    Capacity: number
    ImageMap: string
    LinkGoogleMap: string
}
export default function MapPopUp({item} : {item: MapPopUpProp}){
    return(
        <div className={style.mainContMap}>
            <div className={style.titleCont}>
                <div className={`${utilities.fontTitle} mb-2`}>
                    {item.Name}
                </div>
                <div className={utilities.fontSecundaryText}>
                    Capacidad: {getMoneyValue(item.Capacity)} personas
                </div>
            </div>
            <div className={style.contMap}>
                <div className={style.imgMap}>
                    <Image layout={"fill"} src={item.ImageMap} alt=""/>
                </div>
            </div>
            <div>
                <div className={utilities.fontPrimaryText}>
                    {item.Venue}
                </div>
                <div className={style.gridLinkMap}>
                    <div className={style.sizeLogoMap}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.googleMap} alt=""/>
                    </div>
                    <a href={item.LinkGoogleMap} className={utilities.styleLink}>
                        Ver en Google Maps
                    </a>
                </div>
            </div>
        </div>
    )

    function getMoneyValue(num: number): string {
        return Intl.NumberFormat("ES-CL").format(Math.round(num))
    }
}