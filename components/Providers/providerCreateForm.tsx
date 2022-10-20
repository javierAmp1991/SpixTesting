import {createContext} from "react";
export class MyForm{
    Id: string
    Reason: string
    Views: number
    Answers: number
}

const listMyForms: MyForm[] = [
    {
        Id: "myForm001",
        Reason: "Se busca mesero a tiempo parcial",
        Views: 30,
        Answers: 15
    },
    {
        Id: "myForm002",
        Reason: "Se necesita guardia de seguridad para 2 noches",
        Views: 100,
        Answers: 20
    },
    {
        Id: "myForm003",
        Reason: "Se busca contador auditor",
        Views: 10,
        Answers: 3
    }
]

export const MyFormsContext = createContext(null)

export default function ProviderCreateForm({children}) {
    return (
        <MyFormsContext.Provider value={listMyForms}>
            {children}
        </MyFormsContext.Provider>
    )
}