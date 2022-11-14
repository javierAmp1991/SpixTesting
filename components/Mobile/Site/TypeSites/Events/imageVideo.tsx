import LayoutWithNavCircleMobile from "../../../Layouts/layoutWithNavCircleMobile";
import {PrincipalInfoEvent} from "../../../../../Class/Site/TypeSite/Events/events";
import React, {useContext} from "react";
import {PrincipalInfoEventContext} from "../../../../Providers/Site/TypeSite/Events/eventProvider";
import style from "/styles/Mobile/Site/TypeSite/Events/imageVideo.module.css";
import utilities from "/styles/utilities.module.css";
import Image from "next/image";

export default function ImageVideoMobile() {
    const info: PrincipalInfoEvent = useContext(PrincipalInfoEventContext)
    return (
        <div className={style.overflowDiv}>
          {/*  <div className={style.sizeLogo}>
                <Image layout={"fill"} src={info.PathLogo}/>
            </div>*/}
            <LayoutWithNavCircleMobile isDarkMode={false}>
                {
                    info.Images.map((item, index) =>
                        index == 0 ?
                            <div className={`${style.sizeContainer} ${utilities.snapScroll}`}>
                                <video poster={info.Images[0]} className={style.sizeVideo} controls src={info.Video}/>
                            </div>
                            :
                            <div className={utilities.snapScroll} key={index}>
                                <div className={style.sizeContainer}>
                                    <Image layout={"fill"} objectFit={"cover"} src={item} alt=""/>
                                </div>
                            </div>
                    )
                }
            </LayoutWithNavCircleMobile>
        </div>

    )
}