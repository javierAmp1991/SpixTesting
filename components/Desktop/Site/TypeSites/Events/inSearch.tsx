import FormViewDesktop from "../../../Misc/formView";
import LayoutPurpleContainer from "../../../Layouts/layoutPurpleContainer";
import LayoutTitle from "../Business/Restaurant/layoutTitle";
import {FormLink} from "../../../../../dataDemo/data";
import {useContext} from "react";
import {InSearchContext} from "../../../../Providers/Site/TypeSite/Events/eventProvider";
import FormViewDesktopNew from "../../../Misc/formViewNew";
import style from "/styles/Desktop/Site/TypeSite/Events/mainPage.module.css"

const title: string = "Se Busca"

export default function InSearch() {
    const inSearch: FormLink[] = useContext(InSearchContext)
    return (
        <LayoutTitle title={title}>
           <div className={style.gridInSearch}>
                {
                    inSearch.map((item, index) =>
                        <div key={index}>
                            <FormViewDesktopNew item={item}/>
                        </div>
                    )
                }
            </div>
           {/* <LayoutPurpleContainer isDarkMode={false}>
                {
                    inSearch.map((item, index) =>
                        <div key={index}>
                            <FormViewDesktop item={item}/>
                        </div>
                    )
                }
            </LayoutPurpleContainer>*/}
        </LayoutTitle>
    )
}