import style from "/styles/Desktop/Layouts/layoutButtonNavegation.module.css"
export default function LayoutButtonNavegation({children}){
    return(
        <div className={style.gridLayout}>
            {children}
        </div>
    )
}