import style from "/styles/Desktop/Site/TypeSite/Events/questionSection.module.css"
import {QuestionItem} from "../../../../../Class/Misc/GlobalClass";
import {useContext, useState} from "react";
import {QuestionContext} from "../../../../Providers/Site/TypeSite/Events/eventProvider";
import QuestionShortDesk from "../../../Misc/questionShortDesk";
import LayoutTitle from "../Business/Restaurant/layoutTitle";
import WriteQuestion from "../../../Misc/writeQuestion";
import PopUpContainer from "../../../Misc/popUpContainer";

const writeQuestion: string = "Escribe una pregunta"
const title: string = "Preguntas"

export default function QuestionSection() {
    const questions: QuestionItem[] = useContext(QuestionContext)
    let [displayQuestion, setDisplayQuestion] = useState(false)
    const handleDisplayQuestion = () => setDisplayQuestion(displayQuestion = !displayQuestion)
    return (
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
                    <PopUpContainer closePopUp={handleDisplayQuestion} isButtonVisible={true} isBackground={true}>
                        <WriteQuestion/>
                    </PopUpContainer>
                }
            </>
        </LayoutTitle>
    )
}