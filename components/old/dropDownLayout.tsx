import style from "/styles/misc/dropDownLayout.module.css"

export default function DropDownLayoutold({children}) {
    return (
        <div className={style.gridDropDownLayout}>
            {children}
        </div>
    )
}