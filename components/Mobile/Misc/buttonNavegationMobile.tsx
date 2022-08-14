import style from "/styles/Mobile/Misc/buttonNavgeationMobile.module.css"
export default function ButtonNavegationMobile({item, isDarkMode}: {item: string, isDarkMode: boolean}){
    const cssStyle = getCssStyle()
    return(
        <button className={cssStyle.styleButton}>
            {item}
        </button>
    )

    function getCssStyle(){
        return{
            styleButton: isDarkMode? style.styleButtonDarkMode : style.styleButton
        }
    }
}