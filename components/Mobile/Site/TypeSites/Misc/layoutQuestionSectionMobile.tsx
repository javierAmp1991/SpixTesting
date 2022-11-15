import {useState} from "react";
import style from "/styles/Mobile/Site/TypeSite/Misc/questionSectionMobile.module.css";
import PopUpContainerMob from "../../../Misc/popUpContainerMob";
import WriteQuestion from "../../../../Desktop/Misc/writeQuestion";
import LayoutTitleCustomMobile from "../Business/Misc/layoutTitleCustomMobile";
import {GlobalId} from "../../../../../public/globalConst";
import {createPortal} from "react-dom";
import {LayoutTitleLinkProps} from "../../../../../Class/Layouts/layoutClass";

const writeQuestion: string = "Escribe una pregunta"
const title: string = "Preguntas"
const idPortal: string = GlobalId.globalIds.idPortal

export default function LayoutQuestionSectionMobile({link, children}: { link: string, children: JSX.Element }) {
    let [displayQuestion, setDisplayQuestion] = useState(false)
    const handleDisplayQuestion = () => setDisplayQuestion(displayQuestion = !displayQuestion)
    const propLayoutTitle: LayoutTitleLinkProps = {
        Title: title,
        Link: "/",
    }
    return (
            <div className={style.mainDiv}>
                <div className={style.title}>
                    Preguntas
                </div>

                {children}

                <button onClick={handleDisplayQuestion} className={style.writeQuestion}>
                    {writeQuestion}
                </button>

                {
                    displayQuestion &&
                    createPortal(
                        <PopUpContainerMob closePopUp={handleDisplayQuestion} isButtonVisible={true}
                                           isBackground={true}>
                            <WriteQuestion/>
                        </PopUpContainerMob>, document.getElementById(idPortal)
                    )
                }
            </div>
    )
}