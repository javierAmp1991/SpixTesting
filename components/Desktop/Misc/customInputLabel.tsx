import Image from "next/image";
import {MediaType} from "../../../Class/UserAccount/userAccount";
import {GlobalConst, GlobalStings} from "../../../public/globalConst";
import style from "/styles/Desktop/Misc/customInputLabel.module.css"

const stringEmpty: string = GlobalStings.globalStrings.stringEmpty

export class InputLabelProps {
    Type: MediaType
    FileUpload: string
    OnChange: Function
    TextInput?: boolean
}

const addImageText: string = "Agregar Imagen"
const addVideoText: string = "Agregar Video"

export default function CustomInputLabel({item}: { item: InputLabelProps }) {
    const handleCleanInput = (e) => e.target.value = stringEmpty
    const handleOnChange = (e) => e != null && item.OnChange(e)
    return (
        <label className={style.contLabel}>
            {
                item.FileUpload != stringEmpty ?
                    <Image layout={"fill"} src={item.FileUpload}/>
                    :
                    item.TextInput == null ?
                        <Image layout={"fill"} src={getImage()}/>
                        :
                        <div className={style.contTextPlaceHolder}>
                            {
                                item.TextInput ?
                                    <div className={style.gridTextPlaceHolder}>
                                        {getText()}
                                        <div className={style.sizePlusIcon}>
                                            <Image layout={"fill"} src={GlobalConst.sourceImages.placeholderPlus}/>
                                        </div>
                                    </div>
                                    :
                                    <div className={style.sizePlusIcon}>
                                        <Image layout={"fill"} src={GlobalConst.sourceImages.placeholderPlus}/>
                                    </div>
                            }

                        </div>
            }

            {
                item.FileUpload != stringEmpty &&
                <div className={style.deleteIcon}>
                    <Image layout={"fill"} src={GlobalConst.sourceImages.deleteIcon}/>
                </div>
            }
            <input onClick={handleCleanInput} onChange={handleOnChange} className={style.input} type={"file"}/>
        </label>
    )

    function getImage(): string {
        if (item.Type == MediaType.Image) return GlobalConst.sourceImages.placeholderImage
        else if (item.Type == MediaType.Video) return GlobalConst.sourceImages.placeholderVideo
        else return GlobalConst.sourceImages.placeholderYoutube
    }

    function getText() {
        if (item.Type == MediaType.Image) return addImageText
        else if (item.Type == MediaType.Video) return addImageText
    }
}