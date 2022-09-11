import TestNew from "../components/Desktop/testNew";
import {
    listnewPrincipal,
    listNewBase,
    listFeatured,
    newsBase,
    newsFeatured,
    newsPrinciapl
} from "../dataDemo/search/searchData";

export default function PruebaNews() {
    const new1: newsBase = listNewBase.list[0];
    const new2: newsFeatured = listFeatured.list[0];
    const new3: newsBase = listnewPrincipal.list[0];
    return (
        <div>
            <TestNew item={new1}/>
            <TestNew item={new2}/>
            <TestNew item={new3}/>
        </div>
    )
}