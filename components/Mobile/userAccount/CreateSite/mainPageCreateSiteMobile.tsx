import style from "/styles/Mobile/UserAccount/CreateSite/mainPage.module.css";
import Image from "next/image";
import {GlobalConst} from "../../../../public/globalConst";
import {MyBusinessProviderProp} from "../../../../Class/UserAccount/userAccount";
import {useContext} from "react";
import {CreateSiteContext} from "../../../Providers/UserAccount/MyBusinessProvider";
import CreateSiteMobile from "./createSiteMobile";
import SelectTypeSiteMobile from "./selectTypeSiteMobile";

const stepNumber: string = "Paso "

export default function MainPageCreateSiteMobile() {
    const myBusinessProvider: MyBusinessProviderProp = useContext(CreateSiteContext)
    const handleNav = (num: number) => myBusinessProvider.NavTabs(num)
    const stepOneDone: boolean = myBusinessProvider.IsStepOneDone
    const stepTwoDone: boolean = myBusinessProvider.IsStepTwoDone

    return (
        <div className={style.mainDiv}>
            <div className={style.gridTabs}>
                {
                    myBusinessProvider.ListSteps.map((item) =>
                        <button onClick={() => handleNav(item.NumberStep)}
                                style={{zIndex: getZIndex(item.IsStep, item.NumberStep)}} key={item.Id}
                                className={style.gridStepTriangle}>
                            <div
                                className={`${style.tabBase} ${item.NumberStep != 1 && style.spaceArrow}
                             ${getColorTab(item.State, item.IsStep)}`}>
                                {/*<div>
                                    {stepNumber}{item.NumberStep}
                                </div>*/}
                                <div className={style.nameStep}>
                                    {item.Name}
                                </div>
                            </div>
                            <div className={`${style.baseTriangle} ${getColorTriangle(item.State, item.IsStep)}`}/>
                            {
                                item.NumberStep != 1 &&
                                <div className={style.triangleWhite}/>
                            }
                        </button>
                    )
                }
                <button className={`${style.contLastStep} ${getColorLastStep()}`}>
                    <div className={style.sizeLastStep}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.checkAlone}/>
                    </div>
                </button>
            </div>
            {
                myBusinessProvider.ListSteps.map(item =>
                    <>
                        {
                            (item.NumberStep == 1 && item.IsStep) &&
                            <CreateSiteMobile/>
                        }
                        {

                            (item.NumberStep == 2 && item.IsStep) &&
                            <SelectTypeSiteMobile/>
                        }
                    </>
                )
            }
        </div>
    )

    function getColorLastStep() {
        return (stepTwoDone && stepOneDone) ? style.lastStepGreen : style.lastStepGray
    }

    function getColorTab(state: boolean, isStep: boolean) {
        return isStep ? style.tabBlue : state ? style.tabGreen : style.tabGray
    }

    function getColorTriangle(state: boolean, isStep: boolean) {
        return isStep ? style.triangleBlue : state ? style.triangleGreen : style.triangleGray
    }

    function getZIndex(isStep: boolean, num: number) {
        return (myBusinessProvider.ListSteps.length - num)
    }
}