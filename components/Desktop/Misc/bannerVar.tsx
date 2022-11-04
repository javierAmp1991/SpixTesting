import style from "/styles/Desktop/Misc/fullBanner.module.css"
import Link from "next/link";
import Image from "next/image";

export default function BannerVar({item, size}: { item: string, size: string }) {
    return (
        <Link href={"/"}>
            <div style={{height: size}} className={style.sizeImageBanner}>
                <Image layout={"fill"} objectFit={"cover"} src={item} alt={""}/>
            </div>
        </Link>
    )
}