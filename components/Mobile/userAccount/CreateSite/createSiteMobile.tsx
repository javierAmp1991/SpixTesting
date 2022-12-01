import style from "/styles/Mobile/UserAccount/CreateSite/createSite.module.css"
import {
    MyBusinessProviderProp,
    SocialMediaOptionProvider,
    TypeInputsCreateSite,
    TypeSocialMedia
} from "../../../../Class/UserAccount/userAccount";
import {useContext, useRef, useState} from "react";
import {CreateSiteContext, SocialMediaOptionsContext} from "../../../Providers/UserAccount/MyBusinessProvider";
import Image from "next/image";
import {GlobalConst} from "../../../../public/globalConst";

const nextText: string = "Siguiente";
const spixBase: string = "www.spix.cl/"
const title: string = "Informacion"
const contactTitle: string = "Contacto"
const redesTitle: string = "Redes sociales"
const placeholderRedes: string = "selecciona y agrega una red social"
const addButtonText: string = "Agregar"

export default function CreateSiteMobile() {
    const refInputRedes = useRef(null)
    const handleSelect = (e) => setValueSelect(e.target.value)
    const myBusinessProvider: MyBusinessProviderProp = useContext(CreateSiteContext)
    const socialmedia: SocialMediaOptionProvider = useContext(SocialMediaOptionsContext)
    let [valueSelect, setValueSelect] = useState(socialmedia.Options[0].Id)
    const isAllStepDone: boolean = myBusinessProvider.IsStepOneDone
    const cssStyle = getCssStyle()
    const handleNext = () => {
        myBusinessProvider.NavTabs(2)
    }
    const handleInput = (e, type: TypeInputsCreateSite) => myBusinessProvider.HandleInput(e, type)
    const handleAddRedes = () => {
        refInputRedes.current.value != "" &&
        socialmedia.Options.forEach(item => {
            if (item.Id == valueSelect) socialmedia.HandleAdd(refInputRedes.current.value, item.Type)
        })
    }
    const handleDeleteRed = (id: string) => socialmedia.HandleDelete(id)

    return (
        <div className={style.mainDiv}>
            <div className={style.title}>
                {title}
            </div>

            <div className={style.gridPrincipalInfo}>
                {
                    myBusinessProvider.ListInputs.map((item) =>
                        <div key={item.Id} className={`${style.gridNameInput}
                         ${item.Type == TypeInputsCreateSite.Description && style.descriptionDiv}`}>
                            <div> {item.IsObligatory &&
                                <span className={style.colorObligatory}>* </span>}
                                {item.Name}
                            </div>
                            {
                                item.Type == TypeInputsCreateSite.Description ?
                                    <textarea onChange={(e) => handleInput(e, item.Type)} value={item.Value}
                                              className={style.textArea}/>
                                    :
                                    <input onChange={(e) => handleInput(e, item.Type)} value={item.Value}
                                           className={style.input} type={"text"}/>
                            }
                            {
                                item.Type == TypeInputsCreateSite.Name &&
                                <div>
                                    {spixBase}{item.Value == "" ? "ejemploNombreSitio" : item.Value}
                                </div>
                            }
                        </div>
                    )
                }
            </div>

            <div className={style.gridSocial}>
                <div>
                    {contactTitle}
                </div>
                <div className={style.gridContactInput}>
                    {
                        myBusinessProvider.ListContact.map(item =>
                            <div key={item.Id} className={`${style.gridNameInput}
                         ${item.Type == TypeInputsCreateSite.Description && style.descriptionDiv}`}>
                                <div> {item.IsObligatory &&
                                    <span className={style.colorObligatory}>* </span>}
                                    {item.Name}
                                </div>
                                {
                                    item.Type == TypeInputsCreateSite.Description ?
                                        <textarea onChange={(e) => handleInput(e, item.Type)} value={item.Value}
                                                  className={style.textArea}/>
                                        :
                                        <input onChange={(e) => handleInput(e, item.Type)} value={item.Value}
                                               className={style.input} type={"text"}/>
                                }
                            </div>
                        )
                    }
                </div>
            </div>

            <div className={style.gridSocial}>
                <div>
                    {redesTitle}
                </div>
                <input ref={refInputRedes} placeholder={placeholderRedes} className={style.input} type={"text"}/>
                <div className={style.gridInputSelection}>
                    <select onChange={handleSelect} className={style.input}>
                        {
                            socialmedia.Options.map(item =>
                                <option key={item.Id} value={item.Id}>
                                    {item.Name}
                                </option>)
                        }
                    </select>
                    <button onClick={handleAddRedes} className={style.buttonAdd}>
                        {addButtonText}
                    </button>
                </div>
                <div className={style.gridRedes}>
                    {
                        socialmedia.Items.map(item =>
                            <div className={style.gridImageSocial} key={item.Id}>
                                <Image width={14} height={14} src={getIcon(item.Type)}/>
                                <span>{item.Link}</span>
                                <button onClick={() => handleDeleteRed(item.Id)} className={style.deleteRed}>
                                    eliminar
                                </button>
                            </div>
                        )
                    }
                </div>
            </div>

            <button onClick={handleNext} className={`${style.button} ${cssStyle.colorButton}`}>
                {nextText}
            </button>
        </div>
    )

    function getCssStyle() {
        return {
            lastStep: isAllStepDone ? style.lastStepGreen : style.lastStepGray,
            colorButton: isAllStepDone ? style.buttonBlue : style.buttonGray
        }
    }

    function getIcon(type: TypeSocialMedia) {
        if (type == TypeSocialMedia.Facebook) return GlobalConst.sourceImages.facebookIcon
        else if (type == TypeSocialMedia.TikTok) return GlobalConst.sourceImages.tiktokIcon
        else if (type == TypeSocialMedia.Instagram) return GlobalConst.sourceImages.instagramICon
        else return GlobalConst.sourceImages.webPageIcon
    }

}