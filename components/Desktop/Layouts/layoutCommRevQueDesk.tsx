import style from "/styles/Desktop/Layouts/layoutCommRevQue.module.css"
export default function LayoutCommRevQueDesk({children}){
    return(
        <div className={style.grid}>
            {children}
        </div>
    )
}