import {MultimediaItem} from "../Class/Layouts/layoutClass";
import {useState} from "react";

export class GalleryHook {
    InitialList: MultimediaItem[]
    SetGallery: Function
}

function useGalleryImagesHook(gal: MultimediaItem[]) {
    let [galleryList, setGalleryList] = useState(gal)
    const handleGallery = (newId) => setGalleryList(gal.filter(item => item.Id == newId).concat(gal.filter(item => item.Id != newId)))
    const galleryHook: GalleryHook = {
        InitialList: galleryList,
        SetGallery: handleGallery
    }

    return galleryHook
}
export default useGalleryImagesHook