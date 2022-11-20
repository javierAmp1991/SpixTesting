import {MultimediaItem} from "../Class/Layouts/layoutClass";
import {useState} from "react";

export class GalleryHook {
    InitialList: MultimediaItem[]
    SetGallery: Function
    DisplayGallery: boolean
    HandleDisplayGallery: Function
}

function useGalleryImagesHook(gal: MultimediaItem[]) {
    let [galleryList, setGalleryList] = useState(gal)
    let [displayGallery, setDisplayGallery] = useState(false)
    const handleGallery = (newId) => setGalleryList(gal.filter(item => item.Id == newId).concat(gal.filter(item => item.Id != newId)))
    const handleDisplayGallery = () => setDisplayGallery(!displayGallery)

    const galleryHook: GalleryHook = {
        InitialList: galleryList,
        DisplayGallery: displayGallery,
        SetGallery: handleGallery,
        HandleDisplayGallery: handleDisplayGallery
    }

    return galleryHook
}

export default useGalleryImagesHook