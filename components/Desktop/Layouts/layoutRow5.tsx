import style from "/styles/Desktop/Layouts/layoutRow5.module.css"
export default function LayoutRow5({children, gapLayout}){
    return(
        <div style={{gap:gapLayout}} className={style.grid}>
            {children}
        </div>
    )
}