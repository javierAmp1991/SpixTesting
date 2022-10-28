import style from "/styles/Mobile/Site/TypeSite/Bussines/Restaurant/layoutTitle.module.css"

export default function LayoutTitleMobile({children, title}: { children: JSX.Element, title: string }) {
    return (
        <div className={style.mainDiv}>
            <div className={style.title}>
                {title}
            </div>
            <div className={style.overflow}>
                {children}
            </div>
        </div>
    )
}