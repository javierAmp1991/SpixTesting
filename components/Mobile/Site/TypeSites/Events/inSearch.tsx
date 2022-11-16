import {FormLink} from "../../../../../dataDemo/data";
import {useContext} from "react";
import {InSearchContext} from "../../../../Providers/Site/TypeSite/Events/eventProvider";
import FormViewMobile from "../../../Misc/formViewMobile";
import style from "/styles/Mobile/Site/TypeSite/Events/mainPage.module.css"
import LayoutNavCircleMobileCustom from "../../../Layouts/layoutNavCircleMobileCustom";
import {LayoutTitleLinkProps, LayoutWithNavCircleProp} from "../../../../../Class/Layouts/layoutClass";
import LayoutTitleCustomMobile from "../Business/Misc/layoutTitleCustomMobile";

const title: string = "Se Busca"

export default function InSearch() {
    const inSearch: FormLink[] = useContext(InSearchContext)
    const proptitle: LayoutTitleLinkProps = {
        Title: title,
    }
    const propsCarrousel: LayoutWithNavCircleProp = {
        IsWithBorder: true,
    }
    return (
        <div className={style.paddingGeneral}>
            <LayoutTitleCustomMobile item={proptitle}>
                <LayoutNavCircleMobileCustom item={propsCarrousel}>
                    {
                        inSearch.map(item =>
                            <FormViewMobile key={item.text} item={item}/>
                        )
                    }
                </LayoutNavCircleMobileCustom>
            </LayoutTitleCustomMobile>
        </div>
    )
}