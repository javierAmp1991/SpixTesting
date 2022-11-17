import style from "/styles/Desktop/Site/TypeSite/Misc/layoutSectionProducts.module.css"

export default function LayoutSectionProducst({children}) {
    return (
        <div className={style.grid}>
            {children}
        </div>
    )
}