import style from "/styles/Desktop/Review/writeReview.module.css"
import utilities from "/styles/utilities.module.css"
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
import {EventLookUp, EventPageEvent} from "../../../dataDemo/data";
import {ResumeReviews} from "../../../dataDemo/data";
import PayPageProductSelectedView from "../PayPage/productSelectedView";
import React from "react";
export default function SideCard(){
    const resumeReview = ResumeReviews.resumeReviews
    const productEvent: EventLookUp = EventPageEvent.eventPage
    return(
        <div className="p-8">
            <div className={`${utilities.fontTitle} pb-8`}>
                Opiniones de otros usuarios
            </div>
            <div className="pb-8">
                <div className={style.gridProduct}>
                    <div>
                        <Image width={75} height={75} src={productEvent.CoverImage}/>
                    </div>
                    <div>
                        <div>
                            {productEvent.EventName}
                        </div>
                        <div className={utilities.fontSecundaryText}>Bar restaurant</div>
                    </div>

                </div>
                {/*<PayPageProductSelectedView item={ListProducts.listProducts[0]} />*/}
            </div>

            <div className="justify-left grid gap-3 content-start pb-8">
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

            <div className={`${utilities.fontPrimaryText} grid gap-2`}>
                {
                    resumeReview.infoReviews.map((item, index) =>
                        <div key={index} className={style.gridStars}>
                            <div>
                                {item.numStars} estrellas
                            </div>

                            <div className="relative">
                                <div className={style.styleBarReview}/>
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
    )
}