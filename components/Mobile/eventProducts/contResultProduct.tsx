import style from "../../../styles/Mobile/eventProducts/contResultProduct.module.css";
import {sectionProduct} from "../../../dataDemo/data";
import SectionProductMobile from "./sectionProductMobile";
import {GlobalConst} from "../../../public/globalConst";
import utilities from "../../../styles/utilities.module.css";
import React, {useState} from "react";
import PopUpContainerMob from "../Misc/popUpContainerMob";
import ButtonBlueDesk from "../Misc/buttonBlue";
import {Guest} from "../../../pages/eventProducts";
import Image from "next/image";

const newGuest: string = "Nuevo Invitado"
const placeHolderName: string = "nombre invitado"
const placeHolderEmail: string = "correo invitado"

export default function ContResultProduct({listSectionProduct, addItem, methodProps, listGuests}:
                                              {
                                                  listSectionProduct: sectionProduct[],
                                                  addItem: any,
                                                  methodProps: any,
                                                  listGuests: Guest[]
                                              }) {
    let [isDisplayAdd, setIsDisplayAdd] = useState(false)
    const handleDisplayAdd = () => setIsDisplayAdd(isDisplayAdd = !isDisplayAdd)

    let [emailGuest, setEmailGuest] = useState("")
    const handleEmailGuest = e => {
        setEmailGuest(emailGuest = e.target.value)
    }

    let [nameGuest, setNameGuest] = useState("")
    const handleNameGuest = e => {
        setNameGuest(nameGuest = e.target.value)
    }

    const acceptGuest = () => {
        if (emailGuest != "" && nameGuest != "") {
            methodProps.addGuest(nameGuest, emailGuest)
            handleDisplayAdd()
        }
    }
    return (
        <div className={style.contVar}>
            <Image className={style.bannerSize} src={GlobalConst.sourceImages.bannerCom} alt=""/>
            <div className={style.principalGrid}>
                <div className={style.gridTagsCont}>
                    {
                        listSectionProduct.map((item, index) =>
                            <a className={style.tagStyle} href={`#${item.Title}`} key={index}>
                                {item.Title}
                            </a>
                        )
                    }
                </div>
            </div>
            <div className={style.gridTabs}>
                <div className={` ${style.containerClients}`}>
                    {
                        listGuests.map((item, index) =>
                            index != 0 ?
                                <div className={item.isSelected ? style.TabIconSelected : style.TabIcon}
                                     key={index}>
                                                <span className={`${style.nameElipsis} ${utilities.clamp1}`}
                                                      onClick={() => methodProps.guestSelected(item)}>
                                                    {item.name}</span>
                                    <Image onClick={() => methodProps.removeGuest(item)}
                                         className={style.sizeCloseimg}
                                         src={GlobalConst.sourceImages.closeLoggin} alt=""/>
                                </div>
                                :
                                <div
                                    onClick={() => methodProps.guestSelected(item)}
                                    className={item.isSelected ? style.TabIconSelected : style.TabIcon}
                                    key={index}>
                                    <span className={`${style.nameElipsis} ${utilities.clamp1}`}>
                                    {item.name}
                                    </span>
                                </div>
                        )
                    }
                    <div onClick={handleDisplayAdd}
                         className={`${utilities.gridMaxContent2} gap-2 ml-2`}>
                        <span className={utilities.fontPrimaryText}>{newGuest}</span>
                        <Image src={GlobalConst.sourceImages.addIcon}
                             className={style.addIconStyle}
                             alt=""/>
                    </div>
                </div>

            </div>
            <div className={style.paddingContResult}>
                {
                    listSectionProduct.map((item, index) =>
                        <div key={index} className={style.separationiLineSection}>
                            <SectionProductMobile addItem={addItem} item={item}/>
                        </div>
                    )
                }
            </div>
            {
                isDisplayAdd ?
                    <PopUpContainerMob closePopUp={handleDisplayAdd} isBackground={true}>
                        {
                            <div className={style.mainContPop}>
                                <div className={`${utilities.fontTitle} ${style.contTitleClose}`}>
                                    Datos del invitado
                                </div>
                                <div className={style.gridInputs}>
                                    <div className={`${style.gridInfoInput} ${utilities.fontSecundaryText}`}>
                                        <div className={utilities.fontPrimaryText}>Ingrese nombre invitado</div>
                                        <input onChange={handleNameGuest}
                                               maxLength={15}
                                               className={style.styleInput} type="text"
                                               placeholder={placeHolderName}/>
                                    </div>
                                    <div className={`${style.gridInfoInput} ${utilities.fontSecundaryText}`}>
                                        <div className={utilities.fontPrimaryText}>Ingrese correo invitado</div>
                                        <input onChange={handleEmailGuest}
                                               className={style.styleInput} type="email"
                                               placeholder={placeHolderEmail}/>
                                    </div>
                                    <div className={utilities.fontSecundaryText}>
                                        * Infomracion descriptiva
                                    </div>
                                </div>
                                <div onClick={acceptGuest}>
                                    <ButtonBlueDesk text={"Agregar"}/>
                                </div>
                            </div>
                        }
                    </PopUpContainerMob> : <></>
            }
        </div>
    )
}