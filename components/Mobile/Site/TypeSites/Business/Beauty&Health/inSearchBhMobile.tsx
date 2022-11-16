import {FormLink} from "../../../../../../dataDemo/data";
import {useContext} from "react";
import LayoutTitleMobile from "../Restaurant/layoutTitleMobile";
import {FormBHContext} from "../../../../../Providers/Site/TypeSite/Business/Beauty&Health/beautyHealthProvider";
import FormViewMobile from "../../../../Misc/formViewMobile";
import LayoutWithNavCircleMobile from "../../../../Layouts/layoutWithNavCircleMobile";
import {LayoutTitleLinkProps, LayoutWithNavCircleProp} from "../../../../../../Class/Layouts/layoutClass";
import LayoutTitleCustomMobile from "../Misc/layoutTitleCustomMobile";
import LayoutNavCircleMobileCustom from "../../../../Layouts/layoutNavCircleMobileCustom";

const title: string = "Se Busca"

export default function InSearchBhMobile() {
    const inSearch: FormLink[] = useContext(FormBHContext)
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