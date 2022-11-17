import style from "../../../styles/Mobile/Layouts/layoutDisplayGallery.module.css";
import {useRef, useState} from "react";
import Image from "next/image";
import {LayoutGalleryMobile} from "../../../Class/Layouts/layoutClass";

export default function LayoutDisplayGalleryMobile({item}: {item: LayoutGalleryMobile}) {
    const divRef = useRef(null)
    let [circleSelected, setCircleSelected] = useState(0)
    const handleScroll = (e) => {
        const sizeContainer: number = divRef.current.offsetWidth
        const scrollEvent: number = e.target.scrollLeft
        const newPointControl = Math.round(scrollEvent / sizeContainer);
        setCircleSelected(circleSelected = newPointControl)
    }
    const handleClose = () => item.CloseGallery()
    return (
        <div className={style.mainDiv}>
            <div onClick={handleClose} className={style.blackScreen}/>
            <div className={style.renderDiv}>
                <div onScroll={handleScroll} ref={divRef} className={style.gridImageSection}>
                    {
                        item.InitialImages.map((item, index) =>
                            <div key={index} className={style.sizeImage}>
                                <Image layout={"fill"} src={item} alt={""}/>
                            </div>
                        )
                    }
                </div>
                <div className={style.gridNavItems}>
                    {
                        item.InitialImages.map((item, index) =>
                            <div key={index} className={`${style.sizeImageMin}
                             ${index == circleSelected && style.focus}`}>
                                <Image layout={"fill"} src={item} alt={""}/>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}