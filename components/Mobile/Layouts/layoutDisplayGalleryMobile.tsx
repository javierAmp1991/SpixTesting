import style from "../../../styles/Mobile/Layouts/layoutDisplayGallery.module.css";
import {useRef, useState} from "react";
import Image from "next/image";

export default function LayoutDisplayGalleryMobile({listImages}: { listImages: string[] }) {
    const divRef = useRef(null)
    let [circleSelected, setCircleSelected] = useState(0)

    const handleScroll = (e) => {
        const sizeContainer: number = divRef.current.offsetWidth
        const scrollEvent: number = e.target.scrollLeft
        const newPointControl = Math.round(scrollEvent / sizeContainer);
        setCircleSelected(circleSelected = newPointControl)
    }
    return (
        <div>
            <div onScroll={handleScroll} ref={divRef} className={style.gridImageSection}>
                {
                    listImages.map((item, index) =>
                        <div key={index} className={style.sizeImage}>
                            <Image layout={"fill"} src={item}/>
                        </div>
                    )
                }
            </div>
            <div className={style.gridNavItems}>
                {
                    listImages.map((item, index) =>
                        <div key={index} className={`${style.sizeImageMin}
                             ${index == circleSelected && style.focus}`}>
                            <Image layout={"fill"} src={item}/>
                        </div>
                    )
                }
            </div>
        </div>
    )
}