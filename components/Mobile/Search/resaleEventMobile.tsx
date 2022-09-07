import Link from "next/link";
import Image from "next/image";
import style from "/styles/Mobile/Search/resaleEventDesktop.module.css";
import {ResaleProduct} from "../../../dataDemo/data";

export default function ResaleEventMobile({item} : {item: ResaleProduct}) {
    return (
        <Link href={"/resaleTicketSearch"}>
            <div className={style.sizeImage}>

            </div>
        </Link>
    )
}