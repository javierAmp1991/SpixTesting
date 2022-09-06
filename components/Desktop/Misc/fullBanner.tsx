import style from "/styles/Desktop/Misc/fullBanner.module.css"
import Link from "next/link";
import Image from "next/image";

export default function FullBanner({item} : {item: string}) {
    return (
        <Link href={"/"}>
            <div className={style.sizeImageBanner}>
                <Image layout={"fill"} objectFit={"cover"} src={item} alt={""}/>
            </div>
        </Link>
    )
}
