import style from "/styles/Desktop/CRM/publicity.module.css"
import React from "react";
import Image from "next/image";


export default function PublicityView({linkImage}) {
    const altImage:string = "publicidad"
    return (
        <Image src={linkImage} className={style.publicityProperties} alt={altImage}/>
    )
}