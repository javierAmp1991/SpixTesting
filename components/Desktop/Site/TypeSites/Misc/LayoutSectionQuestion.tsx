import LayoutTitleCustom from "../Business/Misc/layoutTitleCustom";
import {LayoutTitleLinkProps} from "../../../../../Class/Layouts/layoutClass";
import style from "/styles/Desktop/Site/TypeSite/Misc/layoutSectionQuestion..module.css"
import PopUpContainer from "../../../Misc/popUpContainer";
import WriteQuestion from "../../../Misc/writeQuestion";
import {useState} from "react";
import {createPortal} from "react-dom";
import {GlobalId} from "../../../../../public/globalConst";

const title: string = "Preguntas"
const idPortal: string = GlobalId.globalIds.idPortal
const writeQuestion: string = "Escribe una pregunta"

export default function LayoutSectionQuestion({link, children}: { link: string, children: JSX.Element }) {
    let [displayQuestion, setDisplayQuestion] = useState(false)
    const handleDisplayQuestion = () => setDisplayQuestion(displayQuestion = !displayQuestion)
    const propLayoutTitle: LayoutTitleLinkProps = {
        Title: title,
        Link: "/",
    }
    return (
        <LayoutTitleCustom item={propLayoutTitle}>
            <div className={style.mainDiv}>
                    {children}
                <button onClick={handleDisplayQuestion} className={style.writeQuestion}>
                    {writeQuestion}
                </button>
                {
                    displayQuestion &&
                    createPortal(
                        <PopUpContainer closePopUp={handleDisplayQuestion} isButtonVisible={true}
                                        isBackground={true}>
                            <WriteQuestion/>
                        </PopUpContainer>, document.getElementById(idPortal)
                    )
                }
            </div>
        </LayoutTitleCustom>
    )
}