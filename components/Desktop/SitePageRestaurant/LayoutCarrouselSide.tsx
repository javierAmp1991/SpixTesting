import style from "/styles/Desktop/SitePage/layoutCarrouselSide.module.css"
export default function LayoutCarrouselSide({children}) {
    return (
        <div className={style.grid}>
            {children}
        </div>
    )
}