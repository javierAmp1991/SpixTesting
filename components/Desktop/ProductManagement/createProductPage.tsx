import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
import style from "/styles/Desktop/ProductManagement/createProduct.module.css"
import {useRef, useState} from "react";
import {UploadImageProvisory} from "../../../Class/Misc/GlobalClass";
import LayoutUserAccount from "../UserAccount/layoutUserAccount.";
import {LayoutUserAccountProp, ProductManagement} from "../../../Class/UserAccount/userAccount";
import {index} from "@zxing/text-encoding/es2015/encoding/indexes";

const titleSection: string = "Crear Producto"
const subtitleSection: string = "Crea tus productos"
const idLabelImage: string = "idLabelPhoto001Id"
const nameText: string = "Nombre"
const namePlaceHolder: string = "Ingrese el nombre del producto"
const uploadImagetext: string = "Subir Foto"
const descriptionText: string = "Desripcion"
const descriptionPlaceholder: string = "Ingrese la descripcion del producto"
const priceText: string = "Precio"
const pricePlaceholder: string = "Ingrese el precio del producto"
const layoutProp: LayoutUserAccountProp = {
    Title: titleSection,
    SubTitle: subtitleSection
}
const isThisService: string = "¿Este producto es un servicio?"
const confirmButton: string = "Confirmar"

export default function CreateProductPage() {

    /*    let [name, setName] = useState("")
        let [description, setDescription] = useState("")
        let [price, setPrice] = useState(0)
        const handleName = (e) => {
            setName(name = e.target.value)
        }
        const handleDescription = (e) => {
            setDescription(description = e.target.value)
        }
        const handlePrice = (e) => {
            setPrice(price = e.target.value)
        }*/

    let [images, setImages] = useState([])
    let [checkBox, setCheckBox] = useState(false)
    let [counterUrl, setCounterUrl] = useState(100)
    const handleImages = (e) => {
        if (e != null) {
            let newImage: UploadImageProvisory = {
                FileImage: e.target.files[0],
                Id: `${e.target.files[0]}${counterUrl}`,
                ProvisoryUrl: URL.createObjectURL(e.target.files[0])
            }
            setCounterUrl(counterUrl += 100)
            setImages(images = [...images, newImage])
        }
    }
    const handleCheckBox = () => setCheckBox(checkBox = !checkBox)
    const handleDeleteImage = (id: string) => {
        let newListImages = images.filter(item => item.Id != id)
        setImages(images = newListImages)
    }

    const nameRef = useRef(null)
    const descriptionRef = useRef(null)
    const priceRef = useRef(null)

    const handleSubmit = () => {
        let newProduct: ProductManagement = {
            Id: "idProduct",
            Name: nameRef.current.value,
            Price: priceRef.current.value,
            Description: descriptionRef.current.value,
            PathImages: [],
            IsService: checkBox
        }
        console.log(newProduct)
    }

    return (
        <LayoutUserAccount layoutProp={layoutProp}>
            <div className={style.mainDiv}>
                <div className={style.leftDiv}>
                    <div className={style.grid}>
                        <div className={style.upInput}>
                            {nameText}
                        </div>
                        <input ref={nameRef} placeholder={namePlaceHolder} className={style.inputStyle} type={"text"}/>
                    </div>
                    {/*<div className={style.grid}>
                        <div className={style.upInput}>
                            {uploadImagetext}
                        </div>
                        <div className={style.gridImagesUpload}>
                            {
                                images.map((item: UploadImageProvisory) =>
                                    <div key={item.Id} className={style.mainDivImage}>
                                        <button onClick={() => handleDeleteImage(item.Id)}
                                                className={style.deleteImageCont}>
                                            <div className={style.sizeDeleteImage}>
                                                <Image layout={"fill"} src={GlobalConst.sourceImages.closeLoggin}
                                                       alt={""}/>
                                            </div>
                                        </button>
                                        <div className={style.sizeImage}>
                                            <Image layout={"fill"} src={item.ProvisoryUrl} alt={""}/>
                                        </div>
                                    </div>)
                            }
                            {
                                images.length < 4 &&
                                <label htmlFor={idLabelImage} className={style.sizeImage}>
                                    <Image layout={"fill"} src={GlobalConst.sourceImages.placeHolderImageUpload}
                                           alt={""}/>
                                </label>
                            }

                        </div>
                        <input onChange={handleImages} id={idLabelImage} className={style.styleLabel} type={"file"}/>
                    </div>*/}
                    <div className={style.grid}>
                        <div className={style.upInput}>
                            {descriptionText}
                        </div>
                        <textarea ref={descriptionRef} placeholder={descriptionPlaceholder}
                                  className={style.textAreaStyle}/>
                    </div>
                    <div className={style.grid}>
                        <div className={style.upInput}>
                            {priceText}
                        </div>
                        <input ref={priceRef} placeholder={pricePlaceholder} className={style.inputStyle}
                               type={"number"}/>
                    </div>
                    <div className={style.gridChk}>
                        <div className={style.upInput}>
                            {isThisService}
                        </div>
                        <input onChange={handleCheckBox} className={style.checkBoxStyle} type={"checkbox"}/>
                    </div>
                    <button onClick={handleSubmit} className={style.buttonConfirm}>
                        {confirmButton}
                    </button>
                </div>
                <div className={style.rightDiv}>
                    <div className={style.grid}>
                        <div className={style.upInput}>
                            {uploadImagetext}
                        </div>
                        {
                            images[0] == null ?
                                <label htmlFor={idLabelImage} className={style.sizeImage}>
                                    <Image layout={"fill"} src={GlobalConst.sourceImages.placeHolderImageUpload}
                                           alt={""}/>
                                </label>
                                :
                                <div key={images[0].Id} className={style.mainDivImage}>
                                    <button onClick={() => handleDeleteImage(images[0].Id)}
                                            className={style.deleteImageCont}>
                                        <div className={style.sizeDeleteImage}>
                                            <Image layout={"fill"} src={GlobalConst.sourceImages.closeLoggin}
                                                   alt={""}/>
                                        </div>
                                    </button>
                                    <div className={style.sizeImage}>
                                        <Image layout={"fill"} src={images[0].ProvisoryUrl} alt={""}/>
                                    </div>
                                </div>

                        }

                        <div className={style.gridImagesUpload3}>
                            {/*images.map((item: UploadImageProvisory, index) =>
                            index != 0 &&
                            <div key={item.Id} className={style.mainDivImage}>
                                <button onClick={() => handleDeleteImage(item.Id)}
                                        className={style.deleteImageCont}>
                                    <div className={style.sizeDeleteImage}>
                                        <Image layout={"fill"} src={GlobalConst.sourceImages.closeLoggin}
                                               alt={""}/>
                                    </div>
                                </button>
                                <div className={style.sizeImage}>
                                    <Image layout={"fill"} src={item.ProvisoryUrl} alt={""}/>
                                </div>
                            </div>)*/}
                            {
                                [...Array(3)].map((e, index) =>
                                    images[index + 1] == null ?
                                        <label htmlFor={idLabelImage} className={style.sizeImage}>
                                            <Image layout={"fill"} src={GlobalConst.sourceImages.placeHolderImageUpload}
                                                   alt={""}/>
                                        </label>
                                        :
                                        <div key={images[index + 1].Id} className={style.mainDivImage}>
                                            <button onClick={() => handleDeleteImage(images[index + 1].Id)}
                                                    className={style.deleteImageCont}>
                                                <div className={style.sizeDeleteImage}>
                                                    <Image layout={"fill"} src={GlobalConst.sourceImages.closeLoggin}
                                                           alt={""}/>
                                                </div>
                                            </button>
                                            <div className={style.sizeImage}>
                                                <Image layout={"fill"} src={images[index + 1].ProvisoryUrl} alt={""}/>
                                            </div>
                                        </div>
                                )
                            }
                        </div>
                        {/*<div className={style.gridImagesUpload}>
                            {
                                images.map((item: UploadImageProvisory) =>
                                    <div key={item.Id} className={style.mainDivImage}>
                                        <button onClick={() => handleDeleteImage(item.Id)}
                                                className={style.deleteImageCont}>
                                            <div className={style.sizeDeleteImage}>
                                                <Image layout={"fill"} src={GlobalConst.sourceImages.closeLoggin}
                                                       alt={""}/>
                                            </div>
                                        </button>
                                        <div className={style.sizeImage}>
                                            <Image layout={"fill"} src={item.ProvisoryUrl} alt={""}/>
                                        </div>
                                    </div>)
                            }
                            {
                                images.length < 4 &&
                                <label htmlFor={idLabelImage} className={style.sizeImage}>
                                    <Image layout={"fill"} src={GlobalConst.sourceImages.placeHolderImageUpload}
                                           alt={""}/>
                                </label>
                            }

                        </div>*/}
                        <input onChange={handleImages} id={idLabelImage} className={style.styleLabel} type={"file"}/>
                    </div>
                </div>
            </div>
        </LayoutUserAccount>
    )
}