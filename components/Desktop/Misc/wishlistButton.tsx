import style from "/styles/Desktop/Misc/wishlistButton.module.css"
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
import {wishlistButtonProps} from "../../../Class/Misc/GlobalClass";

const iWishText: string = "!Lo Deseo!"

export default function WishlistButton({item}: { item: wishlistButtonProps }) {
    return (
        <button className={style.mainDiv}>
            <div className={style.sizeIcon}>
                <Image layout={"fill"} src={GlobalConst.sourceImages.wishList}/>
            </div>
            <div>
                {item.Like}
            </div>
        </button>
    )
}