import {FormItem, MyFormsContext, ProviderMyForm} from "../../Providers/UserAccount/MyFormProvider";
import FormViewShort from "./formViewShort";
import {useDrop} from "react-dnd";
import {useContext} from "react";

export default function ContFormView({item}: { item: FormItem }) {
    const steps: ProviderMyForm = useContext(MyFormsContext)
    const [{isOver}, drop] = useDrop(() => ({
        accept: "formItem",
        drop: (dragObject: FormItem) => dropItem(dragObject.Id),
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    }))
    const dropItem = (id: string) => steps.HandleDropForm(id, item.Index)
    return (
        <div ref={drop} style={{border: isOver && `1px solid red`}}>
            <FormViewShort item={item}/>
        </div>
    )
}