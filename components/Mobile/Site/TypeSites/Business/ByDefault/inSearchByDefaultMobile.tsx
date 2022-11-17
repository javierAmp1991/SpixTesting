import {FormLink} from "../../../../../../dataDemo/data";
import {useContext} from "react";
import FormViewMobile from "../../../../Misc/formViewMobile";
import {LayoutTitleLinkProps, LayoutWithNavCircleProp} from "../../../../../../Class/Layouts/layoutClass";
import LayoutTitleCustomMobile from "../Misc/layoutTitleCustomMobile";
import LayoutNavCircleMobileCustom from "../../../../Layouts/layoutNavCircleMobileCustom";
import {
    FormByDefaultContext
} from "../../../../../Providers/Site/TypeSite/Business/ByDefault/SiteBusinessByDefaultProvider";

const title: string = "Se Busca"

export default function InSearchByDefaultMobile() {
    const inSearch: FormLink[] = useContext(FormByDefaultContext)
    const proptitle: LayoutTitleLinkProps = {
        Title: title,
    }
    const propsCarrousel: LayoutWithNavCircleProp = {
        IsWithBorder: true,
    }
    return (
        <LayoutTitleCustomMobile item={proptitle}>
            <LayoutNavCircleMobileCustom item={propsCarrousel}>
                {
                    inSearch.map((item, index) =>
                        <div key={index}>
                            <FormViewMobile item={item}/>
                        </div>
                    )
                }
            </LayoutNavCircleMobileCustom>
        </LayoutTitleCustomMobile>
    )
}