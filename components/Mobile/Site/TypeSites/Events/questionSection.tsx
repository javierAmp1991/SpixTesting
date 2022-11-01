import style from "/styles/Mobile/Site/TypeSite/Events/questionSection.module.css"
import {QuestionItem} from "../../../../../Class/Misc/GlobalClass";
import {useContext, useState} from "react";
import {QuestionContext} from "../../../../Providers/Site/TypeSite/Events/eventProvider";
import QuestionShortMob from "../../../Misc/questionShortMob";
import LayoutTitleMobile from "../Business/Restaurant/layoutTitleMobile";
import WriteQuestion from "../../../../Desktop/Misc/writeQuestion";
import PopUpContainerMob from "../../../Misc/popUpContainerMob";

const writeQuestion: string = "Escribe una pregunta"
const title: string = "Preguntas"

export default function QuestionSectionMobile() {
    const questions: QuestionItem[] = useContext(QuestionContext)
    let [displayQuestion, setDisplayQuestion] = useState(false)
    const handleDisplayQuestion = () => setDisplayQuestion(displayQuestion = !displayQuestion)
    return (
        <div className={style.mainDiv}>

            <LayoutTitleMobile isOverflow={false} title={title}>
                <>
                    <div className={style.gridQuestions}>
                        {
                            questions.map(item =>
                                <QuestionShortMob key={item.Id} item={item}/>
                            )
                        }
                    </div>
                    <button onClick={handleDisplayQuestion} className={style.writeQuestion}>
                        {writeQuestion}
                    </button>
                    {
                        displayQuestion &&
                        <PopUpContainerMob closePopUp={handleDisplayQuestion} isButtonVisible={true} isBackground={true}>
                            <WriteQuestion/>
                        </PopUpContainerMob>
                    }
                </>
            </LayoutTitleMobile>
        </div>

    )
}