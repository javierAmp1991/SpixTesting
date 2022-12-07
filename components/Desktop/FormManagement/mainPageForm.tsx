import style from "/styles/Desktop/FormManagement/mainPage.module.css"
import TabNormal from "../Misc/tab";
import {useContext} from "react";
import MyForms from "./myForms";
import MyApplications from "./myApplications";
import {MyFormsContext, ProviderMyForm} from "../../Providers/UserAccount/MyFormProvider";

export default function MainPageForm() {
    const steps: ProviderMyForm = useContext(MyFormsContext)
    return (
        <div className={style.mainDiv}>
            <div className={style.gridTabs}>
                {
                    steps.Steps.map((item, index) =>
                        <TabNormal isLast={index == (steps.Steps.length - 1)}
                                   zIndex={steps.Steps.length - item.NumberStep}
                                   key={item.Id} item={item} onClick={steps.HandleSteps}/>
                    )
                }
            </div>
            <div className={style.contGroups}>
                {
                    steps.Steps.map(item =>
                        <>
                            {
                                (item.NumberStep == 1 && item.IsStep) &&
                                <MyForms/>
                            }
                            {

                                (item.NumberStep == 2 && item.IsStep) &&
                                <MyApplications/>
                            }
                        </>
                    )
                }
            </div>
        </div>
    )
}