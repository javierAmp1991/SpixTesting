import {UploadImageProvisory} from "../Class/Misc/GlobalClass";
import {useState} from "react";

export class UploadImageHookProps {
    ListUploadImages: UploadImageProvisory[]
    HandleAddImages: Function
    HandleDeleteImages: Function
}

function useUploadImageHook(): UploadImageHookProps {
    let [uploadImages, setUploadImages] = useState([])
    const handleUploadImages = (e, num: number) => {
        const newUploadImage: UploadImageProvisory = {
            FileImage: e.target.files[0],
            Id: `${e.target.files[num]}`,
            ProvisoryUrl: URL.createObjectURL(e.target.files[0])
        }
        setUploadImages(uploadImages = [...uploadImages, newUploadImage])
    }
    const handleDeleteImage = (idImage: string) => {
        const newLisUploadImage: UploadImageProvisory[] = uploadImages.filter((item: UploadImageProvisory) => item.Id != idImage)
        setUploadImages(uploadImages = newLisUploadImage)
    }

    const uploadImagesHookProps: UploadImageHookProps = {
        ListUploadImages: uploadImages,
        HandleAddImages: handleUploadImages,
        HandleDeleteImages: handleDeleteImage
    }

    return uploadImagesHookProps
}

export default useUploadImageHook