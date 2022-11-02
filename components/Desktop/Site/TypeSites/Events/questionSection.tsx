import style from "/styles/Desktop/Site/TypeSite/Events/questionSection.module.css"
import {QuestionItem} from "../../../../../Class/Misc/GlobalClass";
import {useContext, useState} from "react";
import {QuestionContext} from "../../../../Providers/Site/TypeSite/Events/eventProvider";
import QuestionShortDesk from "../../../Misc/questionShortDesk";
import LayoutTitle from "../Business/Restaurant/layoutTitle";
import WriteQuestion from "../../../Misc/writeQuestion";
import PopUpContainer from "../../../Misc/popUpContainer";
import {createPortal} from "react-dom";
import {GlobalId} from "../../../../../public/globalConst";

const writeQuestion: string = "Escribe una pregunta"
const title: string = "Preguntas"
const idPortal: string = GlobalId.globalIds.idPortal

export default function QuestionSection() {
    const questions: QuestionItem[] = useContext(QuestionContext)
    let [displayQuestion, setDisplayQuestion] = useState(false)
    const handleDisplayQuestion = () => setDisplayQuestion(displayQuestion = !displayQuestion)
    return (
        <div className={style.mainDiv}>

            <LayoutTitle title={title}>
                <>
                    <div className={style.gridQuestions}>
                        {
                            questions.map(item =>
                                <QuestionShortDesk key={item.Id} item={item}/>
                            )
                        }
                    </div>
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
                </>
            </LayoutTitle>
        </div>

    )
}