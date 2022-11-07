import style from "/styles/Mobile/EventPage/footer.module.css"
import {GlobalConst} from "../../../public/globalConst";
import Image from "next/image";

export default function FooterMobile() {
    return (
        <div className={style.sizeBanner}>
            <Image layout={"fill"} objectFit={"cover"} src={"/images/sponsors2.png"} alt=""/>
        </div>
    )
}