import style from "/styles/Desktop/EventPage/footer.module.css"
import Image from "next/image";

export default function FooterDesk() {
    return (
        <div className={style.mainDiv}>
            <div className={style.styleContainerText}>
                Agradecimientos a nuestros auspiciadores
            </div>
            <Image width={1300} height={240} src={"/images/sponsors1.png"} alt=""/>
        </div>
    )
}