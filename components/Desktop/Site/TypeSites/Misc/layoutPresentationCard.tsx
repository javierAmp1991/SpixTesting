import style from "/styles/Desktop/Site/TypeSite/Misc/layoutPresentationCard.module.css"

export default function LayoutPresentationCard({children}) {
    return (
        <div className={style.grid}>
            {children}
        </div>
    )
}