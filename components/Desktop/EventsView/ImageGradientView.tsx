import Image from "next/image";
import style from "/styles/Desktop/Events/imageGradientView.module.css"
import utilities from "/styles/utilities.module.css";

export default function ImageGradientView(){
    return(
        <div>
            <div className={style.mainDiv}>
                <div className={style.sizeImage}>
                    <Image layout={"fill"} objectFit={"cover"} src={"/images/cartel1.jpg"}/>
                </div>
                <div className={style.gradient}/>
                <div className={style.text}>
                    Texto
                </div>
            </div>
        </div>
    )
}