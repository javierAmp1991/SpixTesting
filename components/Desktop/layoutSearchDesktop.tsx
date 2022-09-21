import style from "/styles/Desktop/Search/layoutPrincipal.module.css"
import utilities from "/styles/utilities.module.css"

export default function LayoutSearchDesktop({children}: { children: JSX.Element }) {
    return (
        <div className={utilities.maxWidthBodyContentSpix}>
            <div className={style.gridPrincipal}>
                    {children}
            </div>
        </div>
    )
}