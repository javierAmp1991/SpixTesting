import style from "/styles/Desktop/Layouts/layoutSideCard.module.css"

export class ChildrenProp {
    childrenLeft: JSX.Element;
    childrenRight : JSX.Element;
}

export default function LayoutSideCard({childrens}: { childrens: ChildrenProp }) {
    return (
        <div className={style.grid}>
            <div className={style.leftCardProp}>
                {childrens.childrenLeft}
            </div>
            <div className={style.rightCardProp}>
                {childrens.childrenRight}
            </div>
        </div>
    )
}