import {FormLink} from "../../../../../../dataDemo/data";
import {useContext} from "react";
import FormViewDesktopNew from "../../../../Misc/formViewNew";
import style from "/styles/Desktop/Site/TypeSite/Bussines/Beauty&Health/mainPage.module.css"
import {FormBHContext} from "../../../../../Providers/Site/TypeSite/Business/Beauty&Health/beautyHealthProvider";
import LayoutTitle from "../Restaurant/layoutTitle";

const title: string = "Se Busca"

export default function InSearchBH() {
    const inSearch: FormLink[] = useContext(FormBHContext)
    return (
        <LayoutTitle title={title}>
            <div className={style.gridForm}>
                {
                    inSearch.map((item, index) =>
                        <div key={index}>
                            <FormViewDesktopNew item={item}/>
                        </div>
                    )
                }
            </div>
        </LayoutTitle>
    )
}