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
                    <div className={style.sizeImage}>
                        <Image layout={"fill"} src={item.ImagePath} alt=""/>
                    </div>
                    <div className={utilities.positionLastTicket}>
                        <Image layout={"fill"}
                            src={GlobalConst.sourceImages.inOfferBanner} alt=""/>
                    </div>
                </div>
                <div className={style.contInfo}>
                    <div className={`${utilities.fontPrimaryText} mb-1`}>
                        {item.Name}
                    </div>
                    <div className={`${utilities.fontSubTitle} mb-0.5`}>
                        ${Intl.NumberFormat("ES-CL"
                    ).format(Math.round(item.Price))}
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
                                        ${Intl.NumberFormat("ES-CL"
                                    ).format(Math.round((((item.DiscountPercent * item.Price) / 100) + item.Price)))}
                                    </span>
                                </>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}