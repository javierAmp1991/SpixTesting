import style from "/styles/Mobile/Site/TypeSite/Bussines/Restaurant/layoutTitle.module.css"

export default function LayoutTitleMobile({children, title, isOverflow}:
                                              { children: JSX.Element, title: string, isOverflow: boolean }) {
    return (
        <div className={isOverflow? style.mainDivOverFlow : style.mainDiv}>
            <div className={style.title}>
                {title}
            </div>
            {children}
        </div>
    )
}