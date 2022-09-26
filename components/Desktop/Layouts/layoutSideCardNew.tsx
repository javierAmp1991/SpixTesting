import style from "/styles/Desktop/Layouts/layoutSideCardNew.module.css"
import React, {useState} from "react";

export class ChildrenProp {
    childrenLeft: JSX.Element;
    childrenRight: JSX.Element;
}


export default function LayoutSideCardNew({childrens}: { childrens: ChildrenProp }) {

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