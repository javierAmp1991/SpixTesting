import Image from "next/image";
import {BaseFeaturedView} from "../../../dataDemo/EventView/featureView";
import style from "/styles/Desktop/Search/featuredViewPrincipal.module.css"
import utilities from "/styles/utilities.module.css";
import {GlobalConst} from "../../../public/globalConst";
import React, {useState} from "react";
import PrincipalInfoEvent, {PrincipalInfoEventProp} from "../Misc/principalInfoEvent";
import DateInfoEvent from "../Misc/dateInfoEvent";
import {DateInfoProp} from "../Misc/dateInfoEvent";
import PriceIncludeInfoEvent from "../Misc/priceIncludeInfoEvent";
import {PriceIncludeInfoProp} from "../Misc/priceIncludeInfoEvent";
import ProductViewDesk from "../Misc/productViewDesk";
import ProductViewSquare from "../Misc/productViewSquare";

export default function FeaturedViewPrincipal({item}: { item: BaseFeaturedView }) {
    let [selectedItem, setSelectedItem] = useState(0)
    const handleSelectedItem = (num: number) => {
        setSelectedItem(selectedItem = num)
    }
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
            {/*<div className={style.borderLogo}>
                <div className={style.logoFeatureProperties}>
                    <Image layout={"fill"} src={item.PathLogo} alt=""/>
                </div>
            </div>*/}
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
                                index >= 0 && index <= 4 &&
                                <ProductViewSquare isDisplayOffer={false} item={item} size={160}/>
                            )
                        }
                    </div>
                </div>
            </div>

            {/*<div className={style.gridImageSelection}>
                {
                    item.ListProducts.map((itemNew, index) =>
                        <div key={itemNew.Name} onClick={() => handleSelectedItem(index)}
                             className={`${style.sizeImageSelection} ${index == selectedItem ? style.boxShadowProSelected : style.boxShadowPro}`}>
                            <Image layout={"fill"} src={itemNew.ImagePath}/>
                        </div>
                    )
                }
            </div>*/}
        </div>
    )
}