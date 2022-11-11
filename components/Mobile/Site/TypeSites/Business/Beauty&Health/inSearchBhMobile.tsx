import {FormLink} from "../../../../../../dataDemo/data";
import {useContext} from "react";
import LayoutTitleMobile from "../Restaurant/layoutTitleMobile";
import {FormBHContext} from "../../../../../Providers/Site/TypeSite/Business/Beauty&Health/beautyHealthProvider";
import FormViewMobile from "../../../../Misc/formViewMobile";
import LayoutWithNavCircleMobile from "../../../../Layouts/layoutWithNavCircleMobile";

const title: string = "Se Busca"

export default function InSearchBhMobile() {
    const inSearch: FormLink[] = useContext(FormBHContext)
    return (
        <LayoutTitleMobile isOverflow={true} title={title}>
            <LayoutWithNavCircleMobile isDarkMode={false}>
                {
                    inSearch.map((item, index) =>
                        <div key={index}>
                            <FormViewMobile item={item}/>
                        </div>
                    )
                }
            </LayoutWithNavCircleMobile>
        </LayoutTitleMobile>
    )
}