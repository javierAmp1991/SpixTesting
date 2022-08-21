import style from "../../../styles/Mobile/eventProducts/contResultProduct.module.css";
import {sectionProduct} from "../../../dataDemo/data";
import SectionProductMobile from "./sectionProductMobile";
import {GlobalConst} from "../../../public/globalConst";
import utilities from "../../../styles/utilities.module.css";
import React, {useEffect, useState} from "react";
import PopUpContainerMob from "../Misc/popUpContainerMob";
import ButtonBlueDesk from "../Misc/buttonBlue";
import {Guest} from "../../../pages/eventProducts";
import Image from "next/image";

const newGuest: string = "Nuevo Invitado"
const placeHolderName: string = "nombre invitado"
const placeHolderEmail: string = "correo invitado"

const numDiv: number = 137
const initialValue: number = -99999999

export default function ContResultProduct({
                                              listSectionProduct,
                                              methodProps, listGuests,
                                              isOpen, addItem, removeItem,
                                          }:
                                              {
                                                  listSectionProduct: sectionProduct[],
                                                  methodProps: any,
                                                  listGuests: Guest[],
                                                  isOpen: boolean,
                                                  addItem: any, removeItem: any
                                              }) {
    const cssStyle = getCssStyle()
    let [styleButton, setStylebutton] = useState(style.buttonInvalid)
    let [isCarrousel, setIsCarrousel] = useState(listGuests.length > 1)
    const handleIsCarrousel = () => {
        if (listGuests.length > 1) {
            setIsCarrousel(isCarrousel = true);
        } else {
            setIsCarrousel(isCarrousel = false);
        }
    }

    let [counter, setCounter] = useState(0)
    let [translateCarrousel, setTranslateDiv] = useState("")
    const translateRight = () => {
        counter = counter - 1
        setCounter(counter = counter < listGuests.length * -1 ? listGuests.length * -1 : counter)
        setTranslateDiv(translateCarrousel = `translate(${numDiv * counter}px)`);
    }
    const translateLeft = () => {
        counter = counter + 1
        setCounter(counter = counter > 0 ? 0 : counter)
        setTranslateDiv(translateCarrousel = `translate(${numDiv * counter}px)`)
    }

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

    let [indexAsi, setIndexAsi] = useState(initialValue)
    const handleIndexAsi = (num: number) => {
        setIndexAsi(indexAsi = num)
    }

    const handleAddGuest = () => {
        if (emailGuest != "" && nameGuest != "") {
            const newGuest: Guest = {
                id: "1234abc",
                isSelected: false,
                name: nameGuest,
                email: emailGuest,
                listProductAmount: []
            }
            methodProps.addGuest(newGuest)
            /*const num: number = listGuests.length
            handleIndexAsi(num)*/
            handleDisplayAdd()
        }
    }

    const handleRemoveGuest = (item: Guest) => {
        const num: number = (listGuests.indexOf(item) - 1)
        methodProps.removeGuest(item);
        handleGuestSelected(num)
        translateLeft();
        handleIndexAsi(num)
    }

    const handleGuestSelected = (index: number) => {
        methodProps.guestSelected(listGuests[index])
    }

    useEffect(() => {
        if (indexAsi != initialValue) {
            methodProps.guestSelected(listGuests[indexAsi])
        }
    },[indexAsi, listGuests, methodProps])

    useEffect(() => {
        handleIsCarrousel()
    })
    useEffect(() => {
        if (emailGuest != "" && nameGuest != "") {
            setStylebutton(styleButton = style.buttonValid)
        } else {
            setStylebutton(styleButton = style.buttonInvalid)
        }
    },[emailGuest, nameGuest])

    return (
        <div className={style.contVar}>
            <div className={style.bannerSize}>
                <Image layout={"fill"} objectFit={"cover"} src={GlobalConst.sourceImages.bannerCom} alt=""/>
            </div>
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
            <div className={style.styleSnapScroll}>
                <div className={` ${style.containerClients}`}>
                    {
                        listGuests.map((item, index) =>
                            index != 0 ?
                                <div className={`${item.isSelected ? style.TabIconSelected : style.TabIcon}
                                 ${style.snapScroll}`}
                                     key={index}>
                                                <span className={`${style.nameElipsis} ${utilities.clamp1}`}
                                                      onClick={() => methodProps.guestSelected(item)}>
                                                    {item.name}</span>
                                    <span onClick={() => handleRemoveGuest(item)}
                                          className={style.sizeCloseimg}>
                                    <Image layout={"fill"}
                                           src={GlobalConst.sourceImages.closeLoggin} alt=""/>
                                    </span>
                                </div>
                                :
                                <div
                                    onClick={() => methodProps.guestSelected(item)}
                                    className={`${item.isSelected ? style.TabIconSelected : style.TabIcon}
                                 ${style.snapScroll}`}
                                    key={index}>
                                    <span className={`${style.nameElipsis} ${utilities.clamp1}`}>
                                    {item.name}
                                    </span>
                                </div>
                        )
                    }
                    <div onClick={handleDisplayAdd}
                         className={`${utilities.gridMaxContent2} ${style.snapScroll} gap-2 ml-2`}>
                        <span className={utilities.fontPrimaryText}>{newGuest}</span>
                        <span className={style.addIconStyle}>
                            <Image layout={"fill"} src={GlobalConst.sourceImages.addIcon} alt=""/>
                        </span>
                    </div>
                    {
                        isCarrousel ?
                            <></> :
                            <div className={style.Arrow}>
                                <Image layout={"fill"} src={GlobalConst.sourceImages.leftArrowRed} alt=""/>
                            </div>
                    }
                </div>
            </div>
            <div className={cssStyle.paddingContResult}>
                {
                    listSectionProduct.map((item, index) =>
                        <div key={index} className={style.separationiLineSection}>
                            <SectionProductMobile addItem={addItem} removeItem={removeItem} item={item}/>
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
                                <button className={styleButton} onClick={handleAddGuest}>
                                    Agregar
                                </button>
                            </div>
                        }
                    </PopUpContainerMob> : <></>
            }
        </div>
    )

    function getCssStyle() {
        return {
            paddingContResult: isOpen ? style.paddingContResult : style.paddingContResult0
        }
    }
}