import Image from "next/image";
import {BaseFeaturedView} from "../../../dataDemo/EventView/featureView";
import style from "/styles/Desktop/Search/featuredViewPrincipal.module.css"
import utilities from "/styles/utilities.module.css";
import {GlobalConst} from "../../../public/globalConst";
import React from "react";
import PrincipalInfoEvent, {PrincipalInfoEventProp} from "../Misc/principalInfoEvent";
import DateInfoEvent from "../Misc/dateInfoEvent";
import {DateInfoProp} from "../Misc/dateInfoEvent";
import PriceIncludeInfoEvent from "../Misc/priceIncludeInfoEvent";
import {PriceIncludeInfoProp} from "../Misc/priceIncludeInfoEvent";

export default function FeaturedViewPrincipal({item}: { item: BaseFeaturedView }) {
    const principalInfoEventProp: PrincipalInfoEventProp = {
        Title: item.Title,
        Subtitle: item.Subtitle,
        Rating: item.Rating,
        isDarkMode: false
    }
    const priceIncludeInfo: PriceIncludeInfoProp = {
        MinPrice: item.MinPrice,
        MaxPrice: item.MaxPrice,
        IsDarkMode: false
    }
    const dateInfo: DateInfoProp = {
        MinDate: item.MinDate,
        MaxDate: item.MaxDate,
        IsDarkMode: false,
    }

    return (
        <div className={style.mainDiv}>
            <div className={style.sizeBanner}>
                <Image layout={"fill"} objectFit={"cover"} objectPosition={"right"} src={item.PathImage} alt={""}/>
            </div>
            <div className={style.borderLogo}>
                <div className={style.logoFeatureProperties}>
                    <Image layout={"fill"} src={item.PathLogo} alt=""/>
                </div>
            </div>
            <div className={style.gridFeaturePrincipal}>
                <div className={style.mainDivInfo}>
                    <div className={style.topDiv}>
                        <div>
                            <PrincipalInfoEvent item={principalInfoEventProp}/>
                            <div className={style.bottomDivSearch}>
                                <DateInfoEvent item={dateInfo}/>
                                <PriceIncludeInfoEvent item={priceIncludeInfo}/>
                            </div>
                        </div>
                    </div>

                    <div className={style.mainDivProducts}>
                        {
                            item.ListProducts.map((item, index) =>
                                <div key={index} className={style.boxShadowPro}>
                                    <div className={style.sizeImageProduct}>
                                        <div className={style.aspectImage}>
                                            <Image layout={"fill"} src={item.ImagePath} alt=""/>
                                        </div>
                                        <div className={utilities.positionLastTicket}>
                                            <Image layout={"fill"} src={GlobalConst.sourceImages.inOfferBanner}
                                                   alt=""/>
                                        </div>
                                    </div>

                                    <div className={style.gridInfoProduct}>
                                        <div className={`${utilities.fontPrimaryText} ${utilities.clamp1}`}>
                                            {item.Name}
                                        </div>
                                        <div className={utilities.fontPriceIncludeDesktop}>
                                            ${Intl.NumberFormat("ES-CL"
                                        ).format(Math.round(item.Price))}
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}