import Link from "next/link";
import Image from "next/image";
import style from "/styles/Mobile/Search/resaleEventDesktop.module.css";
import {EventLookUp} from "../../../dataDemo/data";

export default function ResaleEventMobile({item} : {item: EventLookUp}) {
    return (
        <Link href={"/resaleTicketSearch"}>
            <div className={style.sizeImage}>
                <Image layout={"fill"} src={item.CoverImage}/>
            </div>
        </Link>
    )
}