import style from "/styles/Desktop/UserAccount/wishListView.module.css"
import utilities from "/styles/utilities.module.css";
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
import RatingStarDesktop from "../Misc/ratingStarDesktop";
import PriceIncludeInfoEvent from "../Misc/priceIncludeInfoEvent";
import {PriceIncludeInfoProp} from "../Misc/priceIncludeInfoEvent";

const price: PriceIncludeInfoProp = {
    MaxPrice: 39990,
    MinPrice: 12990,
    IsDarkMode: false
}

export default function WishListView() {
    return (
        <div className={`${style.mainCont}`}>
            <div className={style.containerImage}>
                <div className={style.sizeImage}>
                    <Image layout={"fill"} src={"/images/cartel1.jpg"}/>
                </div>
                <div className={style.wishListLogo}>
                    <Image layout={"fill"} src={GlobalConst.sourceImages.wishList}/>
                </div>
            </div>
            <div className={style.mainDivInfo}>
                <div className={`${utilities.clamp2} ${style.title}`}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, temporibus.
                </div>
                <div className={style.price}>
                    <PriceIncludeInfoEvent item={price}/>
                </div>
                <RatingStarDesktop item={5}/>
            </div>
        </div>

    )
}