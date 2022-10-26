import style from "/styles/Desktop/Misc/fullBanner.module.css"
import Link from "next/link";
import Image from "next/image";

export default function FullBannerRestaurant({item} : {item: string}) {
    return (
        <Link href={"/"}>
            <div className={style.sizeBannerRestaurant}>
                <Image layout={"fill"} objectFit={"cover"} src={item} alt={""}/>
            </div>
        </Link>
    )
}
