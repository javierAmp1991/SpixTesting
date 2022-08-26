import LayoutCommRevQueDesk from "../Layouts/layoutCommRevQueDesk";
import PopUpContainer from "../Misc/popUpContainer";
import {useRef, useState} from "react";
import utilities from "/styles/utilities.module.css"
import style from "/styles/Desktop/EventPage/questionSection.module.css"
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
const sendQuestion: string= "Enviar Pregunta"
const placeHolderQuestion: string = "Escribe tu pregunta"
const listEmoticons: string[] = ["😀", "😁", "😂", "🤣", "😃", "😄", "😀", "😁", "😂", "🤣", "😃", "😄", "😍", "💗", "😑",
    "😀", "😁", "😂", "🤣", "😃", "😄", "😀", "😁", "😂", "🤣", "😃", "😄", "😍", "💗", "😑",
    "😀", "😁", "😂", "🤣", "😃", "😄", "😀", "😁", "😂", "🤣", "😃", "😍", "😄", "💗", "😑"]

export default function QuestionSectionDesk({children}) {
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
            <LayoutCommRevQueDesk>
                {children}
            </LayoutCommRevQueDesk>
            <button onClick={handleDisplayPopUp}>
                Escribe una pregunta
            </button>
            {
                isMakeQuestion &&
                <PopUpContainer isButtonVisible={true} isBackground={true} closePopUp={handleDisplayPopUp}>
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
                                <Image height={24} width={24} src={GlobalConst.sourceImages.addIcon}/>
                            </button>
                        </div>
                        <div>
                            <button className={style.buttonStyle}>
                                {sendQuestion}
                            </button>
                        </div>
                    </div>
                </PopUpContainer>
            }
        </div>
    )
}