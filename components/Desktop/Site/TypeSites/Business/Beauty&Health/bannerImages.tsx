import style from "/styles/Desktop/Site/TypeSite/Bussines/Beauty&Health/ourJobs2.module.css"
import Image from "next/image"
import {PresentationCard} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {useContext} from "react";
import {HeaderDataBHContext} from "../../../../../Providers/Site/TypeSite/Business/Beauty&Health/beautyHealthProvider";
import useGalleryImagesHook, {GalleryHook} from "../../../../../../CustomHooks/galleryHook";
import {LayoutGalleryProps} from "../../../../../../Class/Layouts/layoutClass";
import LayoutDisplayGallery from "../../../../Layouts/layoutDisplayGallery";
import {createPortal} from "react-dom";
import {GlobalId} from "../../../../../../public/globalConst";

const idPortal: string = GlobalId.globalIds.idPortal

export default function BannerImages() {
    const info: PresentationCard = useContext(HeaderDataBHContext)
    const initialGallery: GalleryHook = useGalleryImagesHook(info.GalleryImages)
    const handleOpenGallery = (id: string) => {
        initialGallery.SetGallery(id)
        initialGallery.HandleDisplayGallery()
    }
    const galleryProp: LayoutGalleryProps = {
        CloseGallery: initialGallery.HandleDisplayGallery,
        InitialMedia: initialGallery.InitialList
    }

    return (
        <div className={style.mainDiv}>
            <div className={`${style.contSlider}`}>
                {
                    info.GalleryImages.map((item, index) =>
                        <button onClick={() => handleOpenGallery(item.Id)} key={index}
                                className={`${style.contImage} ${getStyle(index)}`}>
                            <div className={style.sizeImage}>
                                <Image layout={"fill"} src={item.Link} alt={""}/>
                            </div>
                        </button>
                    )
                }
            </div>
            {
                initialGallery.DisplayGallery &&
                createPortal(
                    <LayoutDisplayGallery item={galleryProp}/>, document.getElementById(idPortal)
                )
            }
        </div>
    )

    function getStyle(num: number): string {
        if (num == 0) return style.first
        else if (num == 1) return style.second
        else if (num == 2) return style.third
        else return style.four
    }
}