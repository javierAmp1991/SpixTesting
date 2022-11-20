import style from "/styles/Mobile/Site/TypeSite/Bussines/Beauty&Health/ourJobs.module.css"
import Image from "next/image"
import {PresentationCard} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {useContext, useEffect, useRef, useState} from "react";
import {HeaderDataBHContext} from "../../../../../Providers/Site/TypeSite/Business/Beauty&Health/beautyHealthProvider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LayoutTitleCustomMobile from "../Misc/layoutTitleCustomMobile";
import {LayoutGalleryProps, LayoutTitleLinkProps} from "../../../../../../Class/Layouts/layoutClass";
import Slider from "react-slick";
import LayoutDisplayGalleryMobile from "../../../../Layouts/layoutDisplayGalleryMobile";
import {createPortal} from "react-dom";
import {GlobalId} from "../../../../../../public/globalConst";

const seeGalery: string = "Ver Galeria"
const title: string = "Nuestros Trabajos"
const idPortal: string = GlobalId.globalIds.idPortal
const idfirst: string = "idFirst"

export default function OurJobsMobile() {
    const info: PresentationCard = useContext(HeaderDataBHContext)
    const layoutTitleProp: LayoutTitleLinkProps = {
        Title: title
    }
    let [control, setControl] = useState(0)
    let [displayGallery, setDisplayGallery] = useState(false)
    const handleGallery = () => setDisplayGallery(displayGallery = !displayGallery)
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        slidesToShow: 1,
        speed: 300,
        beforeChange: (current, next) => setControl(next),
    }
    const galleryProps: LayoutGalleryProps = {
        InitialMedia: info.GalleryImages,
        CloseGallery: handleGallery
    }
    const divRef = useRef(null)
    const handleScroll = (e) => {
        const sizeContainer: number = divRef.current.offsetWidth
        const scrollEvent: number = e.target.scrollLeft
        const newPointControl = Math.round(scrollEvent / sizeContainer);
        setControl(newPointControl)
    }

    useEffect(() => {
        divRef.current.scrollTo({left: 200, behavior: "smooth"})
    },[])

    return (
        <div className={style.mainDiv}>
            <LayoutTitleCustomMobile item={layoutTitleProp}>
                <>
                    <div onScroll={handleScroll} ref={divRef} className={`${style.contSlider}`}>
                        <div className={style.stop}/>
                        {
                            info.SideImages.map((item, index) =>
                                <div key={index} className={`${style.contImage}`}>
                                    <div className={style.sizeImage}>
                                        <Image layout={"fill"} src={item} alt={""}/>
                                    </div>
                                </div>
                            )
                        }
                        <div className={style.stop}>

                        </div>
                    </div>

                    {/* <div className={style.contSlider}>
                        <Slider {...settings}>
                            {
                                info.SideImages.map((item, index) =>
                                    <div key={index}
                                         className={`${style.sizeImage} ${index === control ? style.focus : style.noFocus}`}>
                                        <Image priority={true} layout={"fill"} src={item} alt={""}/>
                                    </div>
                                )
                            }
                        </Slider>
                    </div>*/}

                    <button onClick={handleGallery} className={style.seeGalery}>
                        {seeGalery}
                    </button>
                </>
            </LayoutTitleCustomMobile>
            {
                displayGallery &&
                createPortal(
                    <LayoutDisplayGalleryMobile item={galleryProps}/>, document.getElementById(idPortal)
                )
            }
        </div>
    )
}