import style from "/styles/Mobile/Site/TypeSite/Bussines/Beauty&Health/ourJobs.module.css"
import Image from "next/image"
import {PresentationCard} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {useContext, useEffect, useRef} from "react";
import {HeaderDataBHContext} from "../../../../../Providers/Site/TypeSite/Business/Beauty&Health/beautyHealthProvider";
import LayoutTitleCustomMobile from "../Misc/layoutTitleCustomMobile";
import {LayoutGalleryProps, LayoutTitleLinkProps} from "../../../../../../Class/Layouts/layoutClass";
import LayoutDisplayGalleryMobile from "../../../../Layouts/layoutDisplayGalleryMobile";
import {createPortal} from "react-dom";
import {GlobalId} from "../../../../../../public/globalConst";
import useGalleryImagesHook, {GalleryHook} from "../../../../../../CustomHooks/galleryHook";

const seeGalery: string = "Ver Galeria"
const title: string = "Nuestros Trabajos"
const idPortal: string = GlobalId.globalIds.idPortal

export default function OurJobsMobile() {
    const info: PresentationCard = useContext(HeaderDataBHContext)
    const layoutTitleProp: LayoutTitleLinkProps = {
        Title: title
    }

    const divRef = useRef(null)
    const initialGallery: GalleryHook = useGalleryImagesHook(info.GalleryImages)
    const handleOpenGallery = (id: string) => {
        initialGallery.SetGallery(id)
        initialGallery.HandleDisplayGallery()
    }
    const galleryProp: LayoutGalleryProps = {
        CloseGallery: initialGallery.HandleDisplayGallery,
        InitialMedia: initialGallery.InitialList
    }

    useEffect(() => {
        divRef.current.scrollTo({left: 200, behavior: "smooth"})
    }, [])

    return (
        <div className={style.mainDiv}>
            <LayoutTitleCustomMobile item={layoutTitleProp}>
                <>
                    <div ref={divRef} className={`${style.contSlider}`}>
                        <div className={style.stop}/>
                        {
                            info.GalleryImages.map((item, index) =>
                                <button onClick={() => handleOpenGallery(item.Id)} key={index}
                                        className={`${style.contImage}`}>
                                    <div className={style.sizeImage}>
                                        <Image layout={"fill"} src={item.Link} alt={""}/>
                                    </div>
                                </button>
                            )
                        }
                        <div className={style.stop}>

                        </div>
                    </div>

                    <button onClick={()=>initialGallery.HandleDisplayGallery()} className={style.seeGalery}>
                        {seeGalery}
                    </button>
                </>
            </LayoutTitleCustomMobile>
            {
                initialGallery.DisplayGallery &&
                createPortal(
                    <LayoutDisplayGalleryMobile item={galleryProp}/>, document.getElementById(idPortal)
                )
            }
        </div>
    )
}