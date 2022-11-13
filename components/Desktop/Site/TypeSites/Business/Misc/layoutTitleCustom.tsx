import style from "/styles/Desktop/Site/TypeSite/Bussines/Misc/layoutTitle.module.css";
import Link from "next/link";
import {LayoutTitleLinkProps, TypeAlignTitle} from "../../../../../../Class/Layouts/layoutClass";

const seeMoreText: string = "Ver mas"
const defaultValues = {
    PaddingTop: 0,
    PaddingBottom: 12,
    PaddingLeft: 0,
    PaddingRight: 0,
    PaddingUnderHeader: 30
}

export default function LayoutTitleCustom({children, item}: { children: JSX.Element, item: LayoutTitleLinkProps }) {
    const cssStyle = getCssStyle()
    return (
        <div style={{
            paddingBottom: cssStyle.Bottom,
            paddingTop: cssStyle.Top,
            paddingLeft: cssStyle.Left,
            paddingRight: cssStyle.Right
        }}>
            <div style={{paddingBottom: cssStyle.UnderHeader}}
                 className={style.contTitleLink}>
                <div className={`${style.title} ${cssStyle.Align}`}>
                    {item.Title}
                </div>
                {
                    item.Link != null &&
                    <Link href={item.Link}>
                        <a className={style.link}>
                            {seeMoreText}
                        </a>
                    </Link>
                }
            </div>
            {children}
        </div>
    )

    function getCssStyle() {
        return {
            Top: item.PaddingTop == null ? defaultValues.PaddingTop : item.PaddingTop,
            Bottom: item.PaddingBottom == null ? defaultValues.PaddingBottom : item.PaddingBottom,
            Left: item.PaddingLeft == null ? defaultValues.PaddingLeft : item.PaddingLeft,
            Right: item.PaddingRight == null ? defaultValues.PaddingRight : item.PaddingRight,
            UnderHeader: item.PaddingUnderHeader == null ? defaultValues.PaddingUnderHeader : item.PaddingUnderHeader,
            Align: item.AlignTitle == null ? "" : item.AlignTitle == TypeAlignTitle.Center ? style.titleCenter : style.titleRight
        }
    }
}