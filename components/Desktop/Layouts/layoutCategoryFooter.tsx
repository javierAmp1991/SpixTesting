import style from "/styles/Desktop/Layouts/layoutCategorysFooter.module.css"

export default function LayoutCategoryFooter({children}){
    return(
        <div className={`${style.gridCategorysFooter}`}>
            {children}
        </div>
    )
}