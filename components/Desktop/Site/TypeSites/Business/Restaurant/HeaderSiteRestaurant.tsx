import style from "/styles/Desktop/Site/TypeSite/Bussines/Restaurant/header.module.css"
import Image from "next/image";
import {GlobalConst} from "../../../../../../public/globalConst";

export default function HeaderSiteRestaurant() {
    return (
        <div className={style.mainGrid}>
            <div className={style.gridInfo}>
                <div className={style.Name}>
                    HellsKitchen Nightmare
                </div>
            </div>
            <div className={style.gridInfo}>
                <div>San Francisco 657, California</div>
                <div>www.hellskitchen.com</div>
                <div className={style.gridWhatssap}>
                    <div className={style.sizeIcon}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.whatsaapIcon}/>
                    </div>
                    +56976534519
                </div>
                <div className={style.sizeIcon}>
                    <Image layout={"fill"} src={GlobalConst.sourceImages.instagramICon}/>
                </div>
                <div className={style.sizeIcon}>
                    <Image layout={"fill"} src={GlobalConst.sourceImages.tiktokIcon}/>
                </div>
                <div className={style.sizeIcon}>
                    <Image layout={"fill"} src={GlobalConst.sourceImages.facebookIcon}/>
                </div>
            </div>
        </div>
    )
}