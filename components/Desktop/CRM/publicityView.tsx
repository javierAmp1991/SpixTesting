import style from "/styles/Desktop/CRM/publicity.module.css"
import React from "react";
import Image from "next/image";


export default function PublicityView({linkImage}) {
    const altImage: string = "publicidad"
    return (
        <div className={style.publicityProperties}>
            <Image layout={"fill"} objectFit={"cover"} src={linkImage} alt={altImage}/>
        </div>
    )
}