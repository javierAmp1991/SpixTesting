import style from "/styles/Mobile/Layouts/layoutCommRevQue.module.css"
export default function LayoutCommRevQue({children}){
    return(
        <div className={style.grid}>
            {children}
        </div>
    )
}