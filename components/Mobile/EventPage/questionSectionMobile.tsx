import LayoutCommRevQue from "../Layouts/layoutCommRevQue";
import style from "/styles/Mobile/EventPage/questionSection.module.css";
import utilities from "/styles/utilities.module.css";
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
import {useRef, useState} from "react";
import PopUpContainerMob from "../Misc/popUpContainerMob";
import EmoticonsContainerMobile from "../Misc/emoticonsContainerMobile";
const sendQuestion: string= "Enviar"
const placeHolderQuestion: string = "Escribe tu pregunta"
const listEmoticons: string[] = ["😀", "😁", "😂", "🤣", "😃", "😄", "😀", "😁", "😂", "🤣", "😃", "😄", "😍", "💗", "😑",
    "😀", "😁", "😂", "🤣", "😃", "😄", "😀", "😁", "😂", "🤣", "😃", "😄", "😍", "💗", "😑",
    "😀", "😁", "😂", "🤣", "😃", "😄", "😀", "😁", "😂", "🤣", "😃", "😍", "😄", "💗", "😑"]

export default function QuestionSectionMobile({children}) {
    let [isMakeQuestion, setMakeQuestion] = useState(false)
    const handleDisplayPopUp = () => {
        setMakeQuestion(isMakeQuestion = !isMakeQuestion)
    }
    let [displayEmoticons, setDisplayEmoticons] = useState(false)

    const handleDisplayEmoticons = () => {
        setDisplayEmoticons(displayEmoticons = !displayEmoticons)
    }
    let textAreaQuestion = useRef(null)
    let [inputQuestion, setInputQuestion] = useState("")
    const handleAddEmoticon = (emoticon: string) => {
        textAreaQuestion.current.value += emoticon
    }
    return (
        <div>
            <LayoutCommRevQue>
                {children}
                <button className={style.styleButtonAdd}
                        onClick={handleDisplayPopUp}>
                    Escribe una pregunta
                </button>
            </LayoutCommRevQue>

            {
                isMakeQuestion &&
                <PopUpContainerMob isButtonVisible={true} isBackground={true} closePopUp={handleDisplayPopUp}>
                    <div className={style.mainContPadding}>
                        <div className={`${utilities.fontTitle}`}>
                            Tu pregunta
                        </div>
                        <div className={style.textAresContainer}>
                            <textarea ref={textAreaQuestion} placeholder={placeHolderQuestion}
                                      className={style.textAreaStyle}/>
                        </div>
                        <EmoticonsContainerMobile addEmoticon={handleAddEmoticon}/>
                        <div>
                            <button className={style.buttonStyle}>
                                {sendQuestion}
                            </button>
                        </div>
                    </div>
                </PopUpContainerMob>
            }
        </div>
    )
}