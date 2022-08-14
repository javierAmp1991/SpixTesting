import styles from "/styles/Desktop/Layouts/layoutDropDown.module.css"
export default function LayoutDropDown({children}){
    return(
        <div className={styles.dropDownGrid}>
            {children}
        </div>
    )
}