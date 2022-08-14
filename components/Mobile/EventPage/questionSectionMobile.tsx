import LayoutCommRevQue from "../Layouts/layoutCommRevQue";
import style from "/styles/Mobile/EventPage/questionSection.module.css"
const placeHolderSearchBar = "Buscar tu respuesta"
export default function QuestionSectionMobile({children}) {
    return (
        <>
            <LayoutCommRevQue>
                {children}
            </LayoutCommRevQue>
        </>
    )
}