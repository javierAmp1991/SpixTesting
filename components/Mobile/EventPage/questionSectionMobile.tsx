import LayoutCommRevQue from "../Layouts/layoutCommRevQue";
import style from "/styles/Mobile/EventPage/questionSection.module.css";
import utilities from "/styles/utilities.module.css";
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
import {useRef, useState} from "react";
import PopUpContainerMob from "../Misc/popUpContainerMob";
const sendQuestion: string= "Enviar Pregunta"
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
            </LayoutCommRevQue>
            <button onClick={handleDisplayPopUp}>
                Escribe una pregunta
            </button>
            {
                isMakeQuestion &&
                <PopUpContainerMob isBackground={true} closePopUp={handleDisplayPopUp}>
                    <div className={style.mainContPadding}>
                        <div className={`${utilities.fontTitle}`}>
                            Tu pregunta
                        </div>
                        <div className={style.textAresContainer}>
                            <textarea ref={textAreaQuestion} placeholder={placeHolderQuestion}
                                      className={style.textAreaStyle}/>
                        </div>
                        <div className={displayEmoticons ? style.emoticonContainerOpen : style.emoticonContainerClose}>
                            {
                                listEmoticons.map((item, index) =>
                                    <button onClick={() => handleAddEmoticon(item)} key={index}
                                            className={style.emoticonStyle}>{item}</button>
                                )
                            }
                            <button onClick={handleDisplayEmoticons} className={style.positionAddIcon}>
                                <Image height={17} width={17} src={GlobalConst.sourceImages.emoticonButton}/>
                            </button>
                        </div>
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