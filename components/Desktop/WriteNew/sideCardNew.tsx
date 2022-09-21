import style from "/styles/Desktop/WriteNew/writeNew.module.css"
import Image from "next/image";
import {EventPageEvent} from "../../../dataDemo/data";
import React from "react";
import PrincipalInfoEventMobile, {PrincipalInfoEventPropMob} from "../../Mobile/Misc/principalInfoEventMobile";
import DateInfoEvent, {DateInfoProp} from "../Misc/dateInfoEvent";


export default function SideCardNew() {
    const newItem: PrincipalInfoEventPropMob = {
        Title: "Tributo a PetShop Boys y A ha",
        Subtitle: "Lo mejor del rock ochentero",
        isDarkMode: false,
        Rating: 20
    }
    const newDate: DateInfoProp = {
        MinDate: new Date(2022, 10, 24),
        MaxDate: new Date(2022, 10, 24),
        IsDarkMode: false
    }
    return (
        <div>
            <div className={"px-4 pt-6"}>
                <div className={style.bannerStyle}>
                    <Image layout={"fill"} objectFit={"cover"} src={EventPageEvent.eventPage.CoverImage} alt={""}/>
                </div>
            </div>
            <div className="p-6">
                <div className="pb-7">
                    <PrincipalInfoEventMobile item={newItem}/>
                    <div className={"mt-2"}>
                        <DateInfoEvent item={newDate}/>
                    </div>
                </div>
                {/*    <div className="justify-left grid gap-3 content-start pb-8">
                    <div className={style.fontReviewResume}>
                        {resumeReview.rating} de 5
                    </div>
                    <div className={`${utilities.gridContentCenter} justify-start mb-1.5`}>
                        <div className={style.sizeStarResume}>
                            <Image layout={"fill"} src={GlobalConst.sourceImages.reviewStars} alt=""/>
                        </div>
                    </div>
                    <div className={`${utilities.fontPrimaryText} text-left`}>
                        {resumeReview.totalReview} <span>Reseñas</span>
                    </div>
                </div>

                <div className={`${utilities.fontPrimaryText} grid gap-4`}>
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
                </div>*/}
            </div>
        </div>
    )
}