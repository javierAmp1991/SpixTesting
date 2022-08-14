import style from "/styles/Mobile/Layouts/layoutDropDownMonile.module.css"
export default function LayoutDropDownMobile({children, gapLayout}){
    return(
        <div style={{gap:gapLayout}} className={style.gridDropDown}>
            {children}
        </div>
    )
}