import {newsBase, newsFeatured, newsPrinciapl, typeNews} from "../../dataDemo/search/searchData";

export default function TestNew<T extends newsBase>({item}: { item: T }) {
    let itemProp: unknown = item
    let itemPrincipal: newsPrinciapl = itemProp as newsPrinciapl
    let itemFeatured: newsFeatured = itemProp as newsFeatured

    if (item.type === typeNews.principal) {
        let itemProp: unknown = item
        let itemPrincipal: newsPrinciapl = itemProp as newsPrinciapl
        return (
            <div>
                {itemPrincipal.title} {itemPrincipal.subTitle} {itemPrincipal.goTo}
            </div>
        )
    } else if (item.type === typeNews.featured) {
        let itemProp: unknown = item
        let itemPrincipal: newsFeatured = itemProp as newsFeatured
        return (
            <div>
                {itemPrincipal.title} {itemPrincipal.subTitle}
            </div>
        )
    }
    return (

        <div>
            {item.title}
        </div>
    )
}