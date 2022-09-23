import style from "../../../styles/Desktop/Layouts/layoutPurpleContainer.module.css";

export default function LayoutPurpleContainer({children, isDarkMode}) {
    const cssStyles = getCssStyle()
    return (
        <div className={cssStyles.borderCard}>
            <div className={`${cssStyles.gridForm} py-4`}>
                {children}
            </div>
            <div className={`${style.bgLineDown} w-full h-1`}></div>
        </div>
    )

    function getCssStyle() {
        return {
            gridForm: children.length >= 3 ? style.gridForm3 : style.gridForm,
            borderCard: isDarkMode ? "" : style.borderCardInformation
        }
    }
}