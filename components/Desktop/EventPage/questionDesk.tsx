import utilities from "/styles/utilities.module.css"
import {question} from "../../../dataDemo/data";
import OptionBar from "../Misc/optionBar";
import style from "/styles/Desktop/EventPage/questionMobile.module.css"

export default function QuestionDesk({item}: { item: question }) {
    return (
        <div className={style.mainDiv}>
            <div className="grid gap-3">
                <div className={utilities.fontSubTitle}>
                    <span>P : </span>
                    <span>{item.Question}</span>

                </div>
                <div>
                    <span className={utilities.fontSubTitle}>R : </span>
                    <span className={utilities.fontPrimaryText}>{item.Answer}</span>
                </div>
                <div>
                    <span className={utilities.fontSecundaryText}>Por </span>
                    <a className={utilities.styleLink}>{item.ByWho}</a>
                </div>
                <OptionBar/>
            </div>

        </div>
    )
}