import style from "/styles/Desktop/Review/writeReview.module.css"
import utilities from "/styles/utilities.module.css"
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
import {EventLookUp, EventPageEvent} from "../../../dataDemo/data";
import {ResumeReviews} from "../../../dataDemo/data";
import React from "react";
import PrincipalInfoEventMobile, {PrincipalInfoEventPropMob} from "../../Mobile/Misc/principalInfoEventMobile";

const starSingletext: string = "estrella"
const starMoretext: string = "estrellas"

export default function SideCard() {
    const newItem: PrincipalInfoEventPropMob = {
        Title: "Tributo a PetShop Boys y A ha",
        Subtitle: "Lo mejor del rock ochentero",
        isDarkMode: false,
        Rating: null
    }
    const resumeReview = ResumeReviews.resumeReviews
    const productEvent: EventLookUp = EventPageEvent.eventPage
    return (
        <div>
            <div className={style.bannerStyle}>
                <Image layout={"fill"} src={productEvent.BannerPath} alt={""}/>
            </div>
            <div className={style.mainDivInfo}>
                <div className={style.divInfo}>
                    <PrincipalInfoEventMobile item={newItem}/>
                </div>

                <div className={style.mainDivResume}>
                    <div className={style.fontReviewResume}>
                        {resumeReview.rating} de 5
                    </div>
                    <div className={style.sizeStarResume}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.reviewStars} alt=""/>
                    </div>
                    <div className={`${utilities.fontPrimaryText} ${style.resumeReview}`}>
                        {resumeReview.totalReview} <span>Reseñas</span>
                    </div>
                </div>

                <div className={`${utilities.fontPrimaryText} ${style.gridRatings}`}>
                    {
                        resumeReview.infoReviews.map((item, index) =>
                            <div key={index} className={style.gridStars}>
                                <div>
                                    {item.numStars} {item.numStars == 1 ? starSingletext : starMoretext}
                                </div>

                                <div className={style.styleBarReview}>
                                    <div style={{width: item.numReviews}} className={style.styleProgresBarReview}></div>
                                </div>

                                <div>
                                    <span>{item.numReviews}%</span>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}