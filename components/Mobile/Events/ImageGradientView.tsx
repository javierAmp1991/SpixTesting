import Image from "next/image";
import style from "/styles/Mobile/Events/imageGradientView.module.css"
import RatingStar from "../Misc/ratingStar";
import {BaseEventCardWithGradient, EventCardWithGradientPrice} from "../../../dataDemo/EventView/EventCardWithGradient";
import {GlobalConst} from "../../../public/globalConst";
import PrincipalInfoEventMobile, {PrincipalInfoEventPropMob} from "../Misc/principalInfoEventMobile";
import PriceIncludeInfoEventMobile, {PriceIncludeInfoPropMobile} from "../Misc/priceIncludeInfoEventMobile";

export default function ImageGradientViewMobile({item}: { item: BaseEventCardWithGradient }) {
    let itemWithPrice: EventCardWithGradientPrice = item as EventCardWithGradientPrice

    function getMoneyValue(num: number): string {
        return Intl.NumberFormat("ES-CL").format(Math.round(num))
    }

    const newItem: PrincipalInfoEventPropMob = {
        Title: item.Title,
        Subtitle: item.Subtitle,
        Rating: null,
        isDarkMode: true
    }

    const priceInclude: PriceIncludeInfoPropMobile = {
        MaxPrice: itemWithPrice.MaxPrice,
        MinPrice: itemWithPrice.MinPrice,
        IsDarkMode: true
    }

    return (
        <div className={style.principalDiv}>
            <div className={style.mainDiv}>
                <div className={style.sizeImage}>
                    <Image layout={"fill"} objectFit={"cover"} src={item.PathImage} alt={""}/>
                </div>
                <div className={style.gradientVisible}/>
                {/*                <div className={style.gradient2}/>*/}
                <div className={style.mainDivInfo}>
                    <PrincipalInfoEventMobile item={newItem}/>
                    <PriceIncludeInfoEventMobile item={priceInclude}/>
                    {/*                    <div className={style.title}>
                        {item.Title}
                    </div>
                    <div className={style.subtitle}>
                        {item.Subtitle}
                    </div>
                    <div className={style.contRating}>
                        <RatingStar item={1}/>
                    </div>
                    <div className={`${style.gridIconInfo} ${style.priceVisible}`}>
                        <div className={style.sizeIcon}>
                            <Image layout={"fill"} src={GlobalConst.sourceImages.ticketIconWhite} alt={""}/>
                        </div>
                        {
                            itemWithPrice.MinPrice == itemWithPrice.MaxPrice ?
                                <div>
                                    {getMoneyValue(itemWithPrice.MinPrice)}
                                </div>
                                :
                                <div>
                                    {getMoneyValue(itemWithPrice.MinPrice)} - {getMoneyValue(itemWithPrice.MaxPrice)}
                                </div>
                        }
                    </div>*/}
                </div>
            </div>
        </div>
    )
}