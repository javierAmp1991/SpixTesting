import style from "/styles/Desktop/Layouts/layoutSeach.module.css"

export default function LayoutSearch({children}) {
    return (
        <div className={style.gridSearch}>
            {children}
        </div>
    )
}