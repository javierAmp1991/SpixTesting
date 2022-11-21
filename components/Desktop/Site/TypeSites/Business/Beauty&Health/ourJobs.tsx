import style from "/styles/Desktop/Site/TypeSite/Bussines/Beauty&Health/ourJobs.module.css"
import {PresentationCard} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {useContext, useRef, useState} from "react";
import {HeaderDataBHContext} from "../../../../../Providers/Site/TypeSite/Business/Beauty&Health/beautyHealthProvider";
import Image from "next/image";
import {GlobalConst, GlobalId} from "../../../../../../public/globalConst";
import {createPortal} from "react-dom";
import LayoutDisplayGallery from "../../../../Layouts/layoutDisplayGallery";
import {LayoutGalleryProps} from "../../../../../../Class/Layouts/layoutClass";
import useGalleryImagesHook, {GalleryHook} from "../../../../../../CustomHooks/galleryHook";

const ourJobsText: string = "Nuestros Trabajos"
const seeGallery: string = "Ver Galeria"
const idPortal: string = GlobalId.globalIds.idPortal
const gap: number = 48
const numberDivs: number = 3
const lessSpace: number = 48 * (numberDivs - 1)
const initialTranslate: string = `translateX(0)`

export default function OurJobs() {
    const info: PresentationCard = useContext(HeaderDataBHContext)
    const initialGallery: GalleryHook = useGalleryImagesHook(info.GalleryImages)
    let [translate, setTranslate] = useState(initialTranslate)
    let [control, setControl] = useState(1)
    const mainDivRef = useRef(null)
    const sizeDivRef = useRef(null)

    const handleSetCarrousel = (newControl: number) => {
        setTranslate(`translateX(-${(((sizeDivRef.current.offsetWidth - lessSpace) / numberDivs) + gap) * (newControl - 1)}px)`)
        setControl(newControl)
    }
    const handleArrow = (isRight: boolean) => {
        let newControl = isRight ? (control + 1) : (control - 1)
        isRight ?
            newControl > (info.SideImages.length - 2) ? setControl(info.SideImages.length - 1) : handleSetCarrousel(newControl)
            :
            newControl < 0 ? setControl(0) : handleSetCarrousel(newControl)
    }
    const handleOpenGallery = (id: string) => {
        initialGallery.SetGallery(id)
        initialGallery.HandleDisplayGallery()
    }
    const galleryProp: LayoutGalleryProps = {
        CloseGallery: initialGallery.HandleDisplayGallery,
        InitialMedia: initialGallery.InitialList
    }


    return (
        <div></div>
        /*<div className={style.mainDiv}>
            <div className={style.title}>
                {ourJobsText}
            </div>
            <button onClick={() => initialGallery.HandleDisplayGallery()} className={style.seeGallery}>
                {seeGallery}
            </button>
            <div className={style.mainGridCarrousel}>
                <button onClick={() => handleArrow(false)} className={style.sizeArrow}>
                    <Image layout={"fill"} src={GlobalConst.sourceImages.leftArrow} alt={""}/>
                </button>
                <div ref={sizeDivRef} className={style.contCarrousel}>
                    <div ref={mainDivRef} style={{transform: translate}} className={style.gridCarrousel}>
                        {
                            info.GalleryImages.map((item, index) =>
                                <button onClick={() => handleOpenGallery(item.Id)} key={index}
                                        className={`${style.sizeImage} ${index == control ? style.focus : style.noFocus}`}>
                                    <Image layout={"fill"} src={item.Link} alt={""}/>
                                </button>
                            )
                        }
                    </div>
                </div>
                <button onClick={() => handleArrow(true)} className={style.sizeArrow}>
                    <Image layout={"fill"} src={GlobalConst.sourceImages.rightArrow} alt={""}/>
                </button>
            </div>
            {
                initialGallery.DisplayGallery &&
                createPortal(
                    <LayoutDisplayGallery item={galleryProp}/>, document.getElementById(idPortal)
                )
            }
        </div>*/
    )
}