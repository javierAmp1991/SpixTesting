import {FormLink} from "../../../../../../dataDemo/data";
import {useContext} from "react";
import FormViewDesktopNew from "../../../../Misc/formViewNew";
import style from "/styles/Desktop/Site/TypeSite/Bussines/ByDefault/mainPage.module.css"
import LayoutTitle from "../Restaurant/layoutTitle";
import {
    FormByDefaultContext
} from "../../../../../Providers/Site/TypeSite/Business/ByDefault/SiteBusinessByDefaultProvider";

const title: string = "Se Busca"

export default function InSearchByDefault() {
    const inSearch: FormLink[] = useContext(FormByDefaultContext)
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