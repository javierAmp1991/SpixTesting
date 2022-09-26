import style from "/styles/Desktop/CRM/publicity.module.css"
import React from "react";
import Image from "next/image";
import Link from "next/link";


export default function PublicityView({linkImage}) {
    const altImage: string = "publicidad"
    return (
        <Link href={""}>
            <div className={style.publicityProperties}>
                <Image layout={"fill"} objectFit={"cover"} src={linkImage} alt={altImage}/>
            </div>
        </Link>
    )
}