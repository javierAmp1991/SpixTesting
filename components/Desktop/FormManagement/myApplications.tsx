import style from "/styles/Desktop/FormManagement/myApplications.module.css"
import {MyFormsContext, ProviderMyForm} from "../../Providers/UserAccount/MyFormProvider";
import {useContext} from "react";
import ApplicationViewShort from "./applicationViewShort";

const title: string = "Aplicaciones"

export default function MyApplications() {
    const steps: ProviderMyForm = useContext(MyFormsContext)
    const handleOnChange = (e) => steps.HandleDropBox(e.target.value)

    return (
        <div className={style.mainDiv}>
            <div className={style.gridTitleDrop}>
                <div className={style.title}>
                    {title}
                </div>
                <select onChange={handleOnChange} className={style.select}>
                    {
                        steps.ListForms.map((e) =>
                            <option key={e.Id} value={e.Id} className={style.option}>
                                {e.Name}
                            </option>
                        )
                    }
                </select>
            </div>

            <div className={style.contForms}>
                {
                    steps.ListApplications.map(item =>
                        item.For == steps.FormSelected &&
                        <ApplicationViewShort key={item.Id} item={item}/>
                    )
                }
            </div>
        </div>
    )
}