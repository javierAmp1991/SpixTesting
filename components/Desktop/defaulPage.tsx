export class ComponentWithSpace {
    Component: JSX.Element;
    padding: paddingAsignation;
}
export class paddingAsignation{
    pt: number
    pb: number
    pl: number
    pr: number
}

export default function DefaultPage({listItem}: { listItem: ComponentWithSpace[] }) {
    return (
        <div>
            {
                listItem.map((item, index) =>
                    <div key={index}
                         style={{
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
