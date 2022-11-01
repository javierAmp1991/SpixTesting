import utilities from "/styles/utilities.module.css";
import style from "/styles/Desktop/Misc/writeQuestion.module.css"
import EmoticonsContainer from "./emoticonsContainer";
import {useRef} from "react";

const sendQuestion: string = "Enviar"
const placeHolderQuestion: string = "Escribe tu pregunta"
const title: string = "Tu Preunta"

export default function WriteQuestion() {
    let textAreaQuestion = useRef(null)
    const handleAddEmoticon = (emoticon: string) => {
        textAreaQuestion.current.value += emoticon
    }
    return (
        <div className={style.mainContPadding}>
            <div className={utilities.fontTitle}>
                {title}
            </div>
            <div>
                <div className={style.textAresContainer}>
                            <textarea ref={textAreaQuestion} placeholder={placeHolderQuestion}
                                      className={style.textAreaStyle}/>
                    <EmoticonsContainer addEmoticon={handleAddEmoticon}/>
                </div>
            </div>
            <div>
                <button className={style.buttonStyle}>
                    {sendQuestion}
                </button>
            </div>
        </div>
    )
}