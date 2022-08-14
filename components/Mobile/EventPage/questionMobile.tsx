import utilities from "/styles/utilities.module.css"
import style from "/styles/Mobile/EventPage/questionMobile.module.css"
import {question} from "../../../dataDemo/data";
import OptionBar from "../Misc/optionBar";

export default function QuestionMobile({item}: { item: question }) {
    return (
        <div className="">
            <div className="grid gap-3">
                <div className={utilities.fontSubTitle}>
                    P : {item.Question}
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