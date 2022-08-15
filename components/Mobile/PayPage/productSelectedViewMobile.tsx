import style from "/styles/Mobile/PayPage/productSelectedView.module.css"
import {Product} from "../../../dataDemo/data";
import utilities from "/styles/utilities.module.css"
import {GlobalConst} from "../../../public/globalConst";
import Image from "next/image";

export default function PayPageProductSelectedViewMobile({item}: { item: Product }) {
    return (
        <div className={style.containerProduct}>
            <div className={style.grid}>
                <div className="relative">
                    <div className={style.sizeImage}>
                        <Image layout={"fill"} objectFit={"cover"} src={item.ImagePath} alt=""/>
                    </div>
                    <div className={utilities.positionLastTicket}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.inOfferBanner} alt=""/>
                    </div>
                </div>
                <div className={style.contInfo}>
                    <div className={`${utilities.fontPrimaryText} mb-1`}>
                        {item.Name}
                    </div>
                    <div className={`${utilities.fontSubTitle} mb-0.5`}>
                        ${item.Price}
                    </div>
                    <div className={`${utilities.fontSecundaryText} ${utilities.font12}`}>
                        {
                            item.Include != null ?
                                <div>
                                    {item.Include}
                                </div>
                                :
                                <>
                                    <span>Antes </span>
                                    <span className="line-through">
                                                    ${(((item.DiscountPercent * item.Price) / 100) + item.Price)}</span>
                                </>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}