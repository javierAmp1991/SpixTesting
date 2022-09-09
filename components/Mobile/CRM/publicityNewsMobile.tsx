import Image from "next/image";
import React from "react";
import style from "/styles/Mobile/CRM/publicityNews.module.css"
import utilities from "/styles/utilities.module.css";
import {PublicitySearch} from "../../../dataDemo/search/searchData";

export default function PublicityNewsMobile({item}: { item: PublicitySearch }) {
    return (
        <div className={style.mainDiv}>
            <div className={style.sizeBanner}>
                <Image layout={"fill"} objectFit={"cover"} src={item.BannerPath}/>
            </div>
            <div className={style.divInfo}>
                <div className={utilities.fontName}>
                    {item.Title}
                </div>
                <div>
                    {item.Subtitle}
                </div>
                <div className={utilities.fontPrimaryText}>
                    {item.Date.toLocaleDateString()}
                </div>
            </div>
        </div>
    )
}