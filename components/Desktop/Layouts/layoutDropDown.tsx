import styles from "/styles/Desktop/Layouts/layoutDropDown.module.css"

export class DropDownProp {
    FirstChildren: JSX.Element
    SecondChildren: JSX.Element
}


export default function LayoutDropDown({item}: { item: DropDownProp }) {
    return (
        <div className={styles.dropDownGridPrincipal}>
            <div className={styles.dropDownGrid}>
                {item.FirstChildren}
            </div>
            <div className={styles.gridPublicity}>
                {item.SecondChildren}
            </div>
        </div>
    )
}