import style from "/styles/Desktop/Misc/buttonNavegation.module.css"
export default function ButtonNavegation({item, isDarkMode}: {item: string, isDarkMode: boolean}){
    let cssStyle = getCssStyle()
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