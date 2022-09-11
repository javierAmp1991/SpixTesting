import {newsBase, newsFeatured, newsPrinciapl, typeNews} from "../../dataDemo/search/searchData";

export default function TestNew<T extends newsBase>({item}: { item: T }) {
    let itemProp: unknown = item
    let itemPrincipal: newsPrinciapl = itemProp as newsPrinciapl
    let itemFeatured: newsFeatured = itemProp as newsFeatured

    function getType<T extends newsBase>(item: T): newsPrinciapl {
        let newItem: unknown = item;
        return newItem as newsPrinciapl
    }

    function getType1<T extends newsBase>(item: T): newsFeatured {
        let newItem: unknown = item;
        return newItem as newsFeatured
    }

    return (
        <div>
            {
                item.type === typeNews.principal &&
                <div>
                    {itemPrincipal.title} {itemPrincipal.subTitle} {itemPrincipal.goTo}
                </div>

            }
            {
                item.type === typeNews.featured &&
                <div>
                    {itemFeatured.title} {itemFeatured.subTitle}
                </div>

            }
            {
                item.type === typeNews.base &&
                <div>
                    {item.title}
                </div>

            }
        </div>
    )
}