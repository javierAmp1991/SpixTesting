import style from "/styles/Desktop/Site/TypeSite/Bussines/Restaurant/layoutTitle.module.css"

export default function LayoutTitleWithSpace({children, title}: { children: JSX.Element, title: string }) {
    return (
        <div className={style.mainDivNoSpace}>
            <div className={style.titleWithSpace}>
                {title}
            </div>
                {children}
        </div>
    )
}