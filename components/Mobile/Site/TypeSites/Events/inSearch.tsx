import {FormLink} from "../../../../../dataDemo/data";
import {useContext} from "react";
import {InSearchContext} from "../../../../Providers/Site/TypeSite/Events/eventProvider";
import FormViewMobile from "../../../Misc/formViewMobile";
import LayoutWithNavCircleMobile from "../../../Layouts/layoutWithNavCircleMobile";
import LayoutTitleMobile from "../Business/Restaurant/layoutTitleMobile";
import style from "/styles/Mobile/Site/TypeSite/Events/mainPage.module.css"

export default function InSearch() {
    const inSearch: FormLink[] = useContext(InSearchContext)
    return (
        <div className={style.paddingGeneral}>
            <LayoutTitleMobile isOverflow={true} title={"Se busca"}>
                <LayoutWithNavCircleMobile isDarkMode={false}>
                    {
                        inSearch.map(item =>
                            <FormViewMobile key={item.text} item={item}/>
                        )
                    }
                </LayoutWithNavCircleMobile>
            </LayoutTitleMobile>
        </div>
    )
}