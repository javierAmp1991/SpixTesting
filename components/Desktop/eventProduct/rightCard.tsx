import React, {useState} from "react";
import {GlobalConst} from "../../../public/globalConst";
import {Product} from "../../../dataDemo/data";
import style from "../../../styles/Desktop/eventProducts/rightCard.module.css"
import utilities from "../../../styles/utilities.module.css";
import {Guest} from "../../../pages/eventProducts";
import PayPageProductSelectedView from "./payPageProductSelectedView";
import ButtonBlueDesk from "../../Mobile/Misc/buttonBlue";
import PopUpContainer from "../Misc/popUpContainer";

const referenceDiv = "referenceDiv"
const textButton: string = "Continuar comprar"
const translateNum = 100
const newGuestText: string = "Nuevo invitado"

export default function RightCard({methodProps, listGuest, guestSelected, listProduct}:
                                      {
                                          methodProps: any, listGuest: Guest[], guestSelected: Guest,
                                          listProduct: Product[]
                                      }) {

    //region hooks
    const totalPrice = getTotal()

    let [counter, setCounter] = useState(0)
    let [translateCarrousel, setTranslateDiv] = useState("")
    const translateRight = () => {
        setCounter(counter = counter - 1)
        if (counter < listGuest.length * -1) {
            setCounter(counter = listGuest.length * -1)
        } else {
            setTranslateDiv(translateCarrousel = `translate(${translateNum * counter}px)`)
        }
    }
    const translateLeft = () => {
        setCounter(counter = counter + 1)
        if (counter > 0) {
            setCounter(counter = 0)
        } else {
            setTranslateDiv(translateCarrousel = `translate(${translateNum * counter}px)`)
        }
    }
    let [isCarrousel, setIsCarrousel] = useState(false)

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

    const acceptGuest = () => {
        if (emailGuest != "" && nameGuest != "") {
            methodProps.addGuest(nameGuest, emailGuest)
            handleDisplayAdd()
            translateRight()
        }
    }
    //endregion

    return (
        <div className={style.sideCard}>
            <div className={style.gridTabs}>
                <div className={style.gridCarrouselAdd}>
                    <div>
                        <div className={style.transition}>
                            <div style={{transform: translateCarrousel}}
                                className={` ${style.containerClients}`}>
                                {
                                    listGuest.map((item, index) =>
                                        index != 0 ?
                                            <div className={item.isSelected ? style.TabIconSelected : style.TabIcon}
                                                 key={index}>
                                                <span className={`${utilities.clamp1} `}
                                                    onClick={() => methodProps.guestSelected(item)}>
                                                    {item.name}</span>
                                                <img onClick={() => methodProps.removeGuest(item)}
                                                     className={style.sizeCloseimg}
                                                     src={GlobalConst.sourceImages.closeLoggin} alt=""/>
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
                                     className={`${utilities.gridMaxContent2} ml-3`}>
                                    <span className={utilities.fontPrimaryText}>{newGuestText}</span>
                                    <img src={GlobalConst.sourceImages.addIcon}
                                         className={style.addIconStyle}
                                         alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        isCarrousel ?
                            <div className={style.gridArrows}>
                                <img onClick={translateLeft}
                                     className={style.arrow}
                                     src={GlobalConst.sourceImages.leftArrowClean} alt=""/>
                                <img onClick={translateRight}
                                     className={style.arrow}
                                     src={GlobalConst.sourceImages.rightArrowClean} alt=""/>
                            </div> : <></>
                    }
                </div>
            </div>

            <div className={`${style.gridSelected}`}>
                {
                    listProduct.map((item, index) =>
                        <PayPageProductSelectedView deleteItem={null} item={item} key={index}/>
                    )
                }
            </div>

            <div className={style.gridTotalButton}>
                <div className={`${utilities.fontTitle}`}>
                    <span> Total $ {totalPrice}</span>
                </div>
                <button className={style.styleButton}>
                    {textButton}
                </button>
            </div>

            {
                isDisplayAdd ?
                    <PopUpContainer closePopUp={handleDisplayAdd} isBackground={true}>
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
                                <div onClick={acceptGuest}>
                                    <ButtonBlueDesk text={"Agregar"}/>
                                </div>
                            </div>
                        }
                    </PopUpContainer> : <></>
            }
        </div>
    )

    function getTotal() {
        let total = 0
        listGuest.map((guest: Guest) =>
            guest.listProductSelected.map((product: Product) =>
                total = total + product.Price
            )
        )
        return total
    }
}