import {createContext, useEffect, useState} from "react";
import {GlobalStings} from "../../../public/globalConst";
import {StepsCreateSite} from "../../../Class/UserAccount/userAccount";

export const MyFormsContext = createContext(null)

export class ProviderMyForm {
    ListForms: FormItem[]
    ListApplications: ApplicationItem[]
    Steps: StepsCreateSite[]
    FormSelected: string
    HandleSteps: Function
    HandleForms: Function
    HandleDropBox: Function
    HandleDeleteApplication: Function
    HandlePinnedApplication: Function
    HandleCreateEditForm: Function
}

export class FormItem {
    Id: string
    Name: string
    Description: string
}

export class ApplicationItem {
    Id: string
    Name: string
    Description: string
    Email: string
    Number: number
    Direction: string
    AboutMe: string
    IsPinned: boolean
    For: string
}

const loremIpsum = GlobalStings.globalStrings.LoremIpsum
const initialListForms: FormItem[] = getForms()
const initialApplications: ApplicationItem[] = getApplications()
const listSteps: StepsCreateSite[] = [
    {
        Id: `step001`,
        NumberStep: 1,
        State: false,
        IsStep: true,
        Name: `Mis formularios`
    },
    {
        Id: `step002`,
        NumberStep: 2,
        State: false,
        IsStep: false,
        Name: `Aplicaciones`
    }
]

export default function MyFormProvider({children}) {
    let [listForms, setListForms] = useState(initialListForms)
    let [listApplication, setListApplications] = useState(initialApplications)
    let [formSelected, setFormSelected] = useState("form1")
    let [steps, setSteps] = useState(listSteps)
    const handleForm = (id: string) => {
        let newList = listForms.filter(item => item.Id != id)
        setListForms(newList)
    }
    const handleSteps = (num: number) => {
        let newList = steps.map(item => {
            return item.NumberStep == num ? {...item, IsStep: true} : {...item, IsStep: false}
        })
        setSteps(newList)
    }
    const handleOptions = (id: string) => {
        setFormSelected(id)
    }
    const handleDeleteApplication = (id: string) => {
        let newList = listApplication.filter(item => item.Id != id)
        setListApplications(newList)
    }
    const handlePinnedApplication = (id: string, newState: boolean) => {
        let newList = listApplication.map(item => {
            return item.Id == id ? {...item, IsPinned: newState} : {...item}
        })
        let newList2 = newList.sort((a, b) => {
            if (a.IsPinned < b.IsPinned) return 1
            else if (a.IsPinned > b.IsPinned) return -1
            else return 0
        })
        setListApplications(newList2)
    }
    const handleCreateEditForm = (id: string, form: FormItem) => {
        if (listForms.includes(form)) {
            let newList = listForms.map(item => {
                if (item.Id == id) return form
                else return {...item}
            })
            setListForms(newList)
        } else setListForms([...listForms, form])
    }

    const providerForm: ProviderMyForm = {
        ListForms: listForms,
        ListApplications: listApplication,
        Steps: steps,
        FormSelected: formSelected,
        HandleSteps: handleSteps,
        HandleForms: handleForm,
        HandleDropBox: handleOptions,
        HandleDeleteApplication: handleDeleteApplication,
        HandlePinnedApplication: handlePinnedApplication,
        HandleCreateEditForm: handleCreateEditForm
    }

    return (
        <MyFormsContext.Provider value={providerForm}>
            {children}
        </MyFormsContext.Provider>
    )
}

function getApplications() {
    let newList: ApplicationItem[] = []
    for (let i = 1; i < 30; i++) {
        let newItem: ApplicationItem = {
            Id: `idApplication${i}`,
            Name: `Name LastName 00${i}`,
            Description: loremIpsum,
            Email: `email@example${i}.com`,
            Number: 123456789,
            Direction: `Direction application ${i}`,
            AboutMe: loremIpsum,
            IsPinned: false,
            For: i > 0 && i < 10 ? "form1" : i > 10 && i < 20 ? "form2" : "form3"
        }
        newList = [...newList, newItem]
    }
    return newList
}

function getForms() {
    let newList: FormItem[] = []
    for (let i = 1; i < 4; i++) {
        let newItem: FormItem = {
            Id: `form${i}`,
            Name: `Name Form 00${i}`,
            Description: loremIpsum
        }
        newList = [...newList, newItem]
    }
    return newList
}

