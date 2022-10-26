import Image from "next/image";
import style from "/styles/Desktop/SitePage/PpalProductRestaurant.module.css"
import utilities from "/styles/utilities.module.css";

export default function PrincipalProductRestaurant({isLeft}: { isLeft: boolean }) {
    return (
        isLeft ?
            <div className={style.mainDivLeft}>
                <div className={style.sizeImage}>
                    <Image layout={"fill"} src={"/images/product1.jpg"}/>
                </div>
                <div className={style.mainDivInfo}>
                    <div className={style.title}>
                        Titulo
                    </div>
                    <div className={`${style.description} ${utilities.clamp4}`}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Adipisci debitis error itaque quod tempore!
                        Aspernatur autem dolor natus recusandae voluptatem!
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                    </div>
                </div>
            </div>
            :
            <div className={style.mainDivRight}>
                <div className={style.mainDivInfo}>
                    <div className={style.title}>
                        Titulo
                    </div>
                    <div className={`${style.description} ${utilities.clamp4}`}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Adipisci debitis error itaque quod tempore!
                        Aspernatur autem dolor natus recusandae voluptatem!
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                    </div>
                </div>
                <div className={style.sizeImage}>
                    <Image layout={"fill"} src={"/images/product1.jpg"}/>
                </div>
            </div>

    )
}