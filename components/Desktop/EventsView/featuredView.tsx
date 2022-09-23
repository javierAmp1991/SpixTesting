import utilities from "/styles/utilities.module.css"
import style from "/styles/Desktop/Home/homeFeatured.module.css"
import Image from "next/image";
import React from "react";
import {BaseFeaturedView} from "../../../dataDemo/EventView/featureView";
import PrincipalInfoEvent, {PrincipalInfoEventProp} from "../Misc/principalInfoEvent";
import PriceIncludeInfoEvent, {PriceIncludeInfoProp} from "../Misc/priceIncludeInfoEvent";
import DateInfoEvent, {DateInfoProp} from "../Misc/dateInfoEvent";
import ProductViewSquare from "../Misc/productViewSquare";
import ProductViewDesk from "../Misc/productViewDesk";

export default function FeaturedViewDesktop({item, darkModeState}:
                                                { item: BaseFeaturedView, darkModeState: boolean, itemsShow: number }) {
    const darkModeFalse: boolean = false;
    let cssStyle = getCssStyles()
    const principalInfoEventProp: PrincipalInfoEventProp = {
        Title: item.Title,
        Subtitle: item.Subtitle,
        Rating: item.Rating,
        isDarkMode: darkModeFalse
    }
    const priceIncludeInfo: PriceIncludeInfoProp = {
        MinPrice: item.MinPrice,
        MaxPrice: item.MaxPrice,
        IsDarkMode: darkModeState
    }
    const dateInfo: DateInfoProp = {
        MinDate: item.MinDate,
        MaxDate: item.MaxDate,
        IsDarkMode: darkModeState
    }
    return (

        <div className={`${style.mainDiv} ${cssStyle.bgInfo} ${cssStyle.borderCard}`}>
            <div className="relative">
                <div className={style.bannerFeatureProperties}>
                    <Image layout={"fill"} objectFit={"cover"} objectPosition={"top"} src={item.PathImage} alt=""/>
                </div>
            </div>

            <div className={style.mainDivInfo}>
                <div className={style.topDiv}>
                    <PrincipalInfoEvent item={principalInfoEventProp}/>
                    <div className={style.bottomDivSearch}>
                        {/*<DateInfoEvent item={dateInfo}/>*/}
                        <PriceIncludeInfoEvent item={priceIncludeInfo}/>
                    </div>
                </div>
                <div className={style.mainDivProductsSingle}>
                    {
                        item.ListProducts.map((item, index) =>
                            index == 0 &&
                            <ProductViewDesk isDisplayOffer={false} item={item} size={135}/>
                        )
                    }
                </div>
            </div>
        </div>
    )

    function getCssStyles() {
        return {
            borderCard: darkModeState ? utilities.borderCardDesktopDarkMode : utilities.borderCardDesktop,
            bgInfo: darkModeFalse ? utilities.bgDarkModeInfoDesktop : utilities.bgNormalInfoDesktop,
        }
    }
}