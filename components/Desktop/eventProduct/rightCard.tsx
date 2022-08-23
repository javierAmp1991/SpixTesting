import React, {useEffect, useState} from "react";
import {GlobalConst} from "../../../public/globalConst";
import {Product} from "../../../dataDemo/data";
import style from "../../../styles/Desktop/eventProducts/rightCard.module.css"
import utilities from "../../../styles/utilities.module.css";
import {Guest} from "../../../pages/eventProducts";
import PayPageProductSelectedView from "./payPageProductSelectedView";
import ButtonBlueDesk from "../../Mobile/Misc/buttonBlue";
import PopUpContainer from "../Misc/popUpContainer";
import Image from "next/image";

const referenceDiv = "referenceDiv"
const textButton: string = "Comprar"
const newGuestText: string = "Nuevo invitado"
const idTranslateMobile: string = "idTranslateDiv007asb"
const initialValue: number = -99999999
const numDiv: number = 155
export default function RightCard({
                                      methodProps, listGuest, guestSelected,
                                      removeItemGuestSelected, amountPerItem, upDateGuestSelected
                                  }:
                                      {
                                          methodProps: any, listGuest: Guest[], guestSelected: Guest,
                                          listProduct: Product[], removeItemGuestSelected: any,
                                          amountPerItem: any, upDateGuestSelected: any
                                      }) {
    //region hooks
    const totalPrice = getTotal()
    let [counter, setCounter] = useState(0)
    let [styleButton, setStylebutton] = useState(style.buttonInvalid)
    let [translateCarrousel, setTranslateDiv] = useState("")
    const translateRight = () => {
        /*const numDiv: number = document.getElementById(idTranslateMobile).offsetWidth*/
        counter = counter - 1
        setCounter(counter = counter < listGuest.length * -1 ? listGuest.length * -1 : counter)
        setTranslateDiv(translateCarrousel = `translate(${numDiv * counter}px)`);
    }
    const translateLeft = () => {
        /*const numDiv: number = document.getElementById(idTranslateMobile).offsetWidth*/
        counter = counter + 1
        setCounter(counter = counter > 0 ? 0 : counter)
        setTranslateDiv(translateCarrousel = `translate(${numDiv * counter}px)`)
    }

    let [isCarrousel, setIsCarrousel] = useState(listGuest.length > 1)
    const handleIsCarrousel = () => {
        if (listGuest.length > 1) {
            setIsCarrousel(isCarrousel = true);
        } else {
            setIsCarrousel(isCarrousel = false);
        }
    }

    let [isDisplayAdd, setIsDisplayAdd] = useState(false)
    const handleDisplayAdd = () => setIsDisplayAdd(isDisplayAdd = !isDisplayAdd)

    let [nameGuest, setNameGuest] = useState("")
    const handleNameGuest = e => {
        setNameGuest(nameGuest = e.target.value)
    }
    let [emailGuest, setEmailGuest] = useState("")
    const handleEmailGuest = e => {
        setEmailGuest(emailGuest = e.target.value)
    }

    let [indexAsi, setIndexAsi] = useState(initialValue)
    const handleIndexAsi = (num: number) => {
        setIndexAsi(indexAsi = num)
    }
    let [idCounter, setIdCounter] = useState(0)

    const handleAddGuest = () => {
        if (emailGuest != "" && nameGuest != "") {
            const newGuest: Guest = {
                id: `1234abc${counter}`,
                isSelected: false,
                name: nameGuest,
                email: emailGuest,
                listProductAmount: []
            }
            methodProps.addGuest(newGuest);
            const num: number = listGuest.length
            setEmailGuest(emailGuest = "")
            setNameGuest(nameGuest="")
            handleIndexAsi(num)
            handleDisplayAdd();
            translateRight()
        }
    }

    const handleRemoveGuest = (item: Guest) => {
        const num: number = (listGuest.indexOf(item) - 1)
        methodProps.removeGuest(item);
        handleGuestSelected(num)
        handleIndexAsi(num)
        translateLeft()
    }

    const handleGuestSelected = (index: number) => {
        methodProps.guestSelected(listGuest[index])
    }

    useEffect(() => {
        if (indexAsi != initialValue) {
            methodProps.guestSelected(listGuest[indexAsi])
        }
    }, [indexAsi])

    useEffect(() => {
        handleIsCarrousel()
    })

    useEffect(() => {
        if (emailGuest != "" && nameGuest != "") {
            setStylebutton(styleButton = style.buttonValid)
        } else {
            setStylebutton(styleButton = style.buttonInvalid)
        }
    }, [emailGuest, nameGuest])
    //endregion

    return (
        <div className={style.sideCard}>
            <div className={style.gridCarrouselAdd}>
                <div className="w-full overflow-scroll">
                    <div style={{transform: translateCarrousel}}
                         className={` ${style.containerClients}`}>
                        {
                            listGuest.map((item, index) =>
                                index != 0 ?
                                    <div className={item.isSelected ? style.TabIconSelected : style.TabIcon}
                                         key={index}>
                                                <span className={`${utilities.clamp1}`}
                                                      onClick={() => methodProps.guestSelected(item)}>
                                                    {item.name}</span>
                                        <div onClick={() => handleRemoveGuest(item)}
                                             className={style.sizeCloseimg}>
                                            <Image layout={"fill"}
                                                   src={GlobalConst.sourceImages.closeLoggin} alt=""/>
                                        </div>
                                    </div>
                                    :
                                    <div id={referenceDiv}
                                         onClick={() => methodProps.guestSelected(item)}
                                         className={item.isSelected ? style.TabIconSelected : style.TabIcon}
                                         key={index}>
                                        {item.name}
                                    </div>
                            )
                        }
                        <div onClick={handleDisplayAdd}
                             className={`${style.gridNewGuestIcon}`}>
                            <span className={utilities.fontPrimaryText}>{newGuestText}</span>
                            <div className={style.addIconStyle}>
                                <Image layout={"fill"}
                                       src={GlobalConst.sourceImages.addIcon} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    isCarrousel ?
                        <div className={style.gridArrows}>
                            <div onClick={translateLeft}
                                 className={style.arrow}>
                                <Image layout={"fill"}
                                       src={GlobalConst.sourceImages.leftArrowClean} alt=""/>
                            </div>
                            <div onClick={translateRight}
                                 className={style.arrow}>
                                <Image layout={"fill"}
                                       src={GlobalConst.sourceImages.rightArrowClean} alt=""/>
                            </div>
                        </div>
                        :
                        <div className={style.Arrow}>
                            <Image layout={"fill"} src={GlobalConst.sourceImages.leftArrowRed} alt=""/>
                        </div>
                }
            </div>

            <div className="overflow-y-scroll">
                <div className={`${utilities.fontSubTitle} ${style.paddingTotalGuest}`}>
                    <span>Total Invitados ({listGuest.length - 1})</span>
                </div>

                <div className={`${style.gridSelected}`}>
                    {
                        guestSelected.listProductAmount.map((item, index) =>
                            <PayPageProductSelectedView deleteItem={removeItemGuestSelected}
                                                        item={item} key={index}
                                                        amountPerItem={amountPerItem}/>
                        )
                    }
                </div>
            </div>

            <div className={style.gridTotalButton}>
                <div className={`${utilities.fontTitle}`}>
                    <span> Total ${Intl.NumberFormat("ES-MX"
                    ).format(Math.round(totalPrice))}</span>
                </div>
                <button className={style.styleButton}>
                    {textButton}
                </button>
            </div>

            {
                isDisplayAdd ?
                    <PopUpContainer closePopUp={handleDisplayAdd}
                                    isBackground={true}
                                    isButtonVisible={true}>
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
                                               placeholder={"nombre invitado"}/>
                                    </div>
                                    <div className={`${style.gridInfoInput} ${utilities.fontSecundaryText}`}>
                                        <div className={utilities.fontPrimaryText}>Ingrese correo invitado</div>
                                        <input onChange={handleEmailGuest}
                                               className={style.styleInput} type="email"
                                               placeholder={"correo invitado"}/>
                                    </div>
                                    <div className={utilities.fontSecundaryText}>
                                        * Infomracion descriptiva
                                    </div>
                                </div>
                                <button onClick={handleAddGuest} className={styleButton}>
                                    Agregar
                                </button>
                            </div>
                        }
                    </PopUpContainer> : <></>
            }
        </div>
    )

    function getTotal(): number {
        let total = 0;
        if (listGuest.length > 0) {
            listGuest.forEach((Guest) => {
                Guest.listProductAmount.forEach(item => {
                    total = total + (item.Amount * item.Product.Price);
                })
            })
        } else total = 0;
        return total;
    }
}