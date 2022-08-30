import Image from "next/image";
import React from "react";
import {GlobalConst} from "../../../public/globalConst";
const listFilters: string[] = ["filtro1", "filtro2", "filtro3", "filtro4", "filtro5", "filtro6", "filtro7", "filtro8", "filtro9"]
import style from "/styles/Mobile/RestaurantFilterPage/filterSection.module.css"

export default function FilterSection() {
    return (
        <div>
            <div className={style.carrouselCont}>
                {
                    listFilters.map((item, index) =>
                        <div key={index} className={style.gridFilterImage}>
                            <div className={style.imageSize}>
                                <Image layout={"fill"} src={GlobalConst.sourceImages.ratingIndFull} alt={""}/>
                            </div>
                            <div className={"mt-2"}>
                                {item}
                            </div>
                        </div>
                    )
                }
            </div>

            <div className={style.buttonsCont}>
                <div className={style.gridButton}>
                    <div className={style.imageSize}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.ratingIndFull} alt={""}/>
                    </div>
                    <div>
                        Filtro1
                    </div>
                </div>
                <div className={style.gridButton}>
                    <div className={style.imageSize}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.ratingIndFull} alt={""}/>
                    </div>
                    <div>
                        Filtro2
                    </div>
                </div>
            </div>
        </div>
    )
}