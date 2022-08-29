import style from "/styles/Mobile/Misc/defaultPage.module.css"

export class ComponentWithSpaceMobile {
    Component: JSX.Element;
    padding: paddingAsignation;
}

export class paddingAsignation {
    pt: number
    pb: number
    pl: number
    pr: number
}

export default function DefaultPageMobile({listItem, isHome}: { listItem: ComponentWithSpaceMobile[], isHome: boolean }) {
    return (
        <div>
            {
                listItem.map((item, index) =>
                    <div className={index == 0 && isHome && style.backGroundStyle} key={index} style={
                        {
                            paddingTop: item.padding.pt,
                            paddingBottom: item.padding.pb,
                            paddingRight: item.padding.pr,
                            paddingLeft: item.padding.pl,
                        }}>
                        {item.Component}
                    </div>)
            }
        </div>
    )
}