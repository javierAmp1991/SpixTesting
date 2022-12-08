import style from "/styles/Desktop/ProductManagement/allProducts.module.css"
import CustomInput, {CustomInputProps, TypeInput} from "../Misc/customInput";
import CustomInputLabel, {InputLabelProps} from "../Misc/customInputLabel";
import {useState} from "react";
import {GlobalStings} from "../../../public/globalConst";
import {MediaType} from "../../../Class/UserAccount/userAccount";
import {ProductItem, TypeProducts} from "../../../Class/Misc/GlobalClass";

const stringEmpty: string = GlobalStings.globalStrings.stringEmpty
const titleCreateProduct: string = "Crear Producto"
const createText: string = "Crear"
const applyText: string = "Aplicar"


export default function PopUpCreateEditProduct({handleChange, closePopUp, item}:
                                                   { handleChange: Function, closePopUp: Function, item?: ProductItem }) {
    const isEdit = item != null
    let [nameProduct, setNameProduct] = useState(isEdit ? item.Name : stringEmpty)
    let [skuProduct, setSkuProduct] = useState(isEdit ? `${item.SKU}` : stringEmpty)
    let [descriptionProduct, setDescriptionProduct] = useState(isEdit ? item.Description : stringEmpty)
    let [principalImage, setPrincipalImage] = useState(isEdit ? item.ImagePath : stringEmpty)
    let [imageSecond, setImageSecond] = useState(stringEmpty)
    let [imageThird, setImageThird] = useState(stringEmpty)
    let [imageFour, setImageFour] = useState(stringEmpty)
    let [priceProduct, setPriceProduct] = useState(isEdit ? `${item.Price}` : stringEmpty)
    let [timeService, setTimeService] = useState(stringEmpty)

    const resetInputs = () => {
        setNameProduct(stringEmpty)
        setSkuProduct(stringEmpty)
        setPriceProduct(stringEmpty)
        setDescriptionProduct(stringEmpty)
        setPrincipalImage(stringEmpty)
        setImageThird(stringEmpty)
        setImageFour(stringEmpty)
        setImageSecond(stringEmpty)
    }
    const handleCreateProduct = () => {
        let newProduct: ProductItem = {
            Id: "dajdjasdadad",
            Rating: 0,
            SKU: parseInt(skuProduct),
            Description: descriptionProduct,
            Name: nameProduct,
            ImagePath: principalImage,
            Price: parseInt(priceProduct)
        }
        handleChange(newProduct)
        resetInputs()
        closePopUp()
    }

    const handleInputName = (e) => setNameProduct(e.target.value)
    const handleInputSKU = (e) => setSkuProduct(e.target.value)
    const handleInputDescription = (e) => setDescriptionProduct(e.target.value)
    const handleInputPrice = (e) => setPriceProduct(e.target.value)
    const handleInputTime = (e)=> setTimeService(e.target.value)
    const handlePrincipalImage = (e) => setPrincipalImage(URL.createObjectURL(e.target.files[0]))
    const handleImageSecond = (e) => setImageSecond(URL.createObjectURL(e.target.files[0]))
    const handleImageThird = (e) => setImageThird(URL.createObjectURL(e.target.files[0]))
    const handleImageFour = (e) => setImageFour(URL.createObjectURL(e.target.files[0]))
    const inputName: CustomInputProps = {
        Value: nameProduct,
        NameInput: "Nombre",
        PlaceholderInput: "Ingrese nombre del producto",
        TypeInput: TypeInput.Input,
        Onchange: handleInputName,
        IsObligatory: `true`
    }
    const inputSKU: CustomInputProps = {
        Value: skuProduct,
        NameInput: "SKU",
        PlaceholderInput: "Ingrese un SKU",
        TypeInput: TypeInput.Input,
        TypeTextInput: "number",
        Onchange: handleInputSKU,
        IsObligatory: `true`
    }
    const inputDescription: CustomInputProps = {
        Value: descriptionProduct,
        NameInput: "Descripcion",
        PlaceholderInput: "Describa el producto",
        TypeInput: TypeInput.TextArea,
        Onchange: handleInputDescription,
        HeightTextArea: 100,
        IsObligatory: `true`
    }
    const inputPrice: CustomInputProps = {
        Value: priceProduct,
        NameInput: "Precio",
        PlaceholderInput: "Ingrese precio producto",
        TypeInput: TypeInput.Input,
        TypeTextInput: "number",
        Onchange: handleInputPrice,
        IsObligatory: `true`,
        PercentageCharge: 10
    }
    const inputTime: CustomInputProps = {
        Value: timeService,
        NameInput: "Tiempo",
        PlaceholderInput: "Ingrese el tiempo que se demora el servicio",
        TypeInput: TypeInput.Input,
        Onchange: handleInputTime,
        IsObligatory: `true`,
    }
    const inputImagePrincipal: InputLabelProps = {
        Type: MediaType.Image,
        FileUpload: principalImage,
        OnChange: handlePrincipalImage,
        TextInput: true
    }
    const inputImageSecond: InputLabelProps = {
        Type: MediaType.Image,
        FileUpload: imageSecond,
        OnChange: handleImageSecond,
        TextInput: false
    }
    const inputImageThird: InputLabelProps = {
        Type: MediaType.Image,
        FileUpload: imageThird,
        OnChange: handleImageThird,
        TextInput: false
    }
    const inputImageFourth: InputLabelProps = {
        Type: MediaType.Image,
        FileUpload: imageFour,
        OnChange: handleImageFour,
        TextInput: false
    }
    let listInputs: CustomInputProps[] = [
        inputName, inputSKU, inputDescription, inputTime, inputPrice
    ]
    let listInputLabel: InputLabelProps[] = [
        inputImageSecond, inputImageThird, inputImageFourth
    ]

    return (
        <div className={style.mainDivPopUp}>
            <div className={style.titleCreate}>
                {titleCreateProduct}
            </div>

            <div className={style.gridImageInputs}>
                <div className={style.gridLabels}>
                    <CustomInputLabel item={inputImagePrincipal}/>
                    <div className={style.gridSideImages}>
                        {
                            listInputLabel.map((item, index) =>
                                <CustomInputLabel key={index} item={item}/>
                            )
                        }
                    </div>
                </div>
                <div className={style.gridInputs}>
                    {
                        listInputs.map((item, index) =>
                            <CustomInput key={index} item={item}/>
                        )
                    }
                </div>
            </div>

            <button onClick={handleCreateProduct} className={style.button}>
                {createText}
            </button>
        </div>
    )
}