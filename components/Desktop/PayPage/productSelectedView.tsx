import style from "/styles/Desktop/PayPage/productSelectedView.module.css"
import {Product} from "../../../dataDemo/data";
import utilities from "/styles/utilities.module.css"
import {GlobalConst} from "../../../public/globalConst";
import Image from "next/image";

export default function PayPageProductSelectedView({item}: { item: Product }) {
    return (
        <div className={style.containerProduct}>
            <div className={style.grid}>
                <div className="relative">
                    <Image className={style.sizeImage} src={item.ImagePath} alt=""/>
                    <Image className={utilities.positionLastTicket} src={GlobalConst.sourceImages.inOfferBanner} alt=""/>
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