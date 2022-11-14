import style from "/styles/Desktop/Layouts/layoutDisplayGalery.module.css"
import Image from "next/image";

export default function LayoutDisplayGalery() {
    return (
        <div className={style.mainDiv}>
            <div className={style.principalGrid}>
                <div>

                </div>

                <div className={style.gridMin}>
                    <div>
                        <Image layout={"fill"} src={"/images/thedoor1.jpg"} alt={""}/>
                    </div>
                </div>
            </div>
        </div>
    )
}