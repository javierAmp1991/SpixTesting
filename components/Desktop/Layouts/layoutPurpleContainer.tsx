import style from "../../../styles/Desktop/Layouts/layoutPurpleContainer.module.css";

export default function LayoutPurpleContainer({children, isDarkMode}){
    const cssStyles = getCssStyle()
    return(
        <div className={cssStyles.borderCard}>
            {children}
            <div className={`${style.bgLineDown} w-full h-1`}></div>
        </div>
    )
    function getCssStyle(){
        return{
            borderCard: isDarkMode ? "" : style.borderCardInformation
        }
    }
}