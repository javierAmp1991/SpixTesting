import Image from "next/image";
import React from "react";
import style from "/styles/Desktop/CRM/publicityNews.module.css"
import utilities from "/styles/utilities.module.css";
import {PublicitySearch} from "../../../dataDemo/search/searchData";

export default function PublicityNews({item}: { item: PublicitySearch }) {
    return (
        <div className={style.mainDiv}>
            <div className={style.sizeBanner}>
                <Image layout={"fill"} objectFit={"cover"} src={item.BannerPath}/>
            </div>
            <div className={style.divInfo}>
                <div className={utilities.fontName}>
                    {item.Title}
                </div>
                <div className={utilities.fontPrimaryText}>
                    {item.Subtitle}
                </div>
                <div className={utilities.fontSecundaryText}>
                    {item.Date.getDate()} de {item.Date.toLocaleString("es-US", {month: "short"})} del {item.Date.getFullYear()}
                </div>
            </div>
        </div>
    )
}