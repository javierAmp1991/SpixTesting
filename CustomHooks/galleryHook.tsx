import {MultimediaItem} from "../Class/Layouts/layoutClass";
import {useState} from "react";
import utilities from "/styles/utilities.module.css";

export class GalleryHook {
    InitialList: MultimediaItem[]
    SetGallery: Function
    DisplayGallery: boolean
    HandleDisplayGallery: Function
}

function useGalleryImagesHook(gal: MultimediaItem[]) {
    let [displayGallery, setDisplayGallery] = useState(false)
    const handleGallery = (num: number) => {}
    const handleDisplayGallery = () => {
        setDisplayGallery(!displayGallery)
        document.body.classList.toggle(utilities.noScrollBody)
    }

    const galleryHook: GalleryHook = {
        InitialList: gal,
        DisplayGallery: displayGallery,
        SetGallery: handleGallery,
        HandleDisplayGallery: handleDisplayGallery
    }
    return galleryHook
}

export default useGalleryImagesHook