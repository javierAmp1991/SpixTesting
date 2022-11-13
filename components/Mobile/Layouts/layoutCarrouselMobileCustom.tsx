import style from "/styles/Mobile/Layouts/layoutCarrouselMobileCustom.module.css"
import {LayoutCarrouselMobileProp} from "../../../Class/Layouts/layoutClass";

const defaultProps = {
    Padding: 0,
    Gap: 16
}

export default function LayoutCarrouselMobileCustom({children, item}:
                                                        { children: JSX.Element, item: LayoutCarrouselMobileProp }) {
    const cssStyle = getCssStyle()
    return (
        <div style={{
            gap: cssStyle.gap,
            paddingRight: cssStyle.right,
            paddingLeft: cssStyle.Left,
            paddingTop: cssStyle.Top,
            paddingBottom: cssStyle.Bottom
        }}
             className={`${style.gridCarrousel}`}>
            {children}
        </div>
    )

    function getCssStyle() {
        return {
            gap: item.Gap == null ? defaultProps.Gap : item.Gap,
            Top: item.Top == null ? defaultProps.Padding : item.Top,
            Bottom: item.Bottom == null ? defaultProps.Padding : item.Bottom,
            Left: item.Left == null ? defaultProps.Padding : item.Left,
            right: item.Right == null ? defaultProps.Padding : item.Right
        }
    }
}