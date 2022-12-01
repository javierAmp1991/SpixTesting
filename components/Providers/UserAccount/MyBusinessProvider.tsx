import {createContext, useEffect, useState} from "react";
import {
    InputCreateSite,
    MyBusinessProviderProp,
    SelectTypeSite, SocialMedia, SocialMediaOption, SocialMediaOptionProvider,
    StepsCreateSite,
    TypeInputsCreateSite,
    TypeSiteSelected, TypeSocialMedia
} from "../../../Class/UserAccount/userAccount";

export const CreateSiteContext = createContext(null)
export const SocialMediaOptionsContext = createContext(null)

const nameSite: string = "Nombre";
const titleSite: string = "Titulo";
const descriptionSite: string = "Descripcion";
const emailSite: string = "Email";
const whatsappSite: string = "Whatsapp"
const tiktokSite: string = "TikTok"
const facebookSite: string = "Facebook"
const instagramSite: string = "Instagram"
const websiteSite: string = "Pagina Web"
const stringEmpty: string = "";
const idBase: string = "idSteps00";
const typeSite: SelectTypeSite[] = [
    {
        Name: "Servicios",
        Type: TypeSiteSelected.Business,
        IsSelected: false,
        PathImage: "/images/serviceIconSite.png",
        Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
            "                                Animi corporis dolorem ea error nobis perspiciatis quo\n" +
            "                                repellendus saepe voluptatibus. Cupiditate."
    },
    {
        Name: "Eventos",
        Type: TypeSiteSelected.Event,
        IsSelected: false,
        PathImage: "/images/eventLogo.png",
        Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
            "                                Animi corporis dolorem ea error nobis perspiciatis quo\n" +
            "                                repellendus saepe voluptatibus. Cupiditate."
    },
    {
        Name: "Restaurant",
        Type: TypeSiteSelected.Service,
        IsSelected: false,
        PathImage: "/images/restaurantSiteIcon.png",
        Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
            "                                Animi corporis dolorem ea error nobis perspiciatis quo\n" +
            "                                repellendus saepe voluptatibus. Cupiditate."
    }

]
const listSteps: StepsCreateSite[] = [
    {
        Id: `${idBase}001`,
        NumberStep: 1,
        State: false,
        IsStep: true,
        Name: `Informacion`
    },
    {
        Id: `${idBase}002`,
        NumberStep: 2,
        State: false,
        IsStep: false,
        Name: `Tipo de sitio`
    }
]


export default function MyBusinessProvider({children}) {
    let [name, setName] = useState(stringEmpty)
    let [title, setTitle] = useState(stringEmpty)
    let [description, setDescription] = useState(stringEmpty)
    let [email, setEmail] = useState(stringEmpty)
    let [whatsapp, setWhatsapp] = useState(stringEmpty)
    let [tikTok, setTikTok] = useState(stringEmpty)
    let [instagram, setInstagram] = useState(stringEmpty)
    let [facebook, setFacebook] = useState(stringEmpty)
    let [website, setWebsite] = useState(stringEmpty)
    let [typeSiteSelected, setTypeSiteSelected] = useState(typeSite)
    let [stepsCreateSite, setStepsCreateSite] = useState(listSteps)
    const listInputs: InputCreateSite[] = [
        {
            Id: "idInputCreateSite001",
            Value: name,
            Name: nameSite,
            IsObligatory: true,
            Type: TypeInputsCreateSite.Name
        },
        {
            Id: "idInputCreateSite002",
            Value: title,
            Name: titleSite,
            IsObligatory: true,
            Type: TypeInputsCreateSite.Title
        },
        {
            Id: "idInputCreateSite003",
            Value: description,
            Name: descriptionSite,
            IsObligatory: true,
            Type: TypeInputsCreateSite.Description
        },
    ]
    const listContact: InputCreateSite[] = [
        {
            Id: "idContact001",
            Name: emailSite,
            IsObligatory: true,
            Value: email,
            Type: TypeInputsCreateSite.Email

        },
        {
            Id: "idContact002",
            Name: whatsappSite,
            IsObligatory: false,
            Value: whatsapp,
            Type: TypeInputsCreateSite.Whatsapp

        },
    ]
    const listSocialMedia: InputCreateSite[] = [
        {
            Id: "idSocialMedia004",
            Name: websiteSite,
            IsObligatory: false,
            Value: website,
            Type: TypeInputsCreateSite.Website

        },
        {
            Id: "idSocialMedia002",
            Name: instagramSite,
            IsObligatory: false,
            Value: instagram,
            Type: TypeInputsCreateSite.Instagram

        },
        {
            Id: "idSocialMedia001",
            Name: tiktokSite,
            IsObligatory: false,
            Value: tikTok,
            Type: TypeInputsCreateSite.TikTok

        },
        {
            Id: "idSocialMedia004",
            Name: facebookSite,
            IsObligatory: false,
            Value: facebook,
            Type: TypeInputsCreateSite.Facebook

        },
    ]

    let [socialMediasCreated, setSocialMediasCreated] = useState([])
    const handleCreateSocialMedia = (link: string, type: TypeSocialMedia) => {
        let newSocialMedia: SocialMedia = {
            Link: link,
            Type: type,
            Id: `socialMediaCreated${type.toString()}`
        }

        if (socialMediasCreated.length == 0) {
            setSocialMediasCreated([...socialMediasCreated, newSocialMedia])
        } else {
            let newList = socialMediasCreated.filter(item => (item.Type != type))
            let newList2 = [...newList, newSocialMedia]
            setSocialMediasCreated(newList2)
        }
    }
    const handleDeleteSocialMedia = (id: string) => {
        setSocialMediasCreated(socialMediasCreated.filter(item => item.Id != id))
    }
    const socialMediaOptions: SocialMediaOption[] = [
        {
            Id: "website001",
            Name: "Website",
            Type: TypeSocialMedia.Website
        },
        {
            Id: "instagram001",
            Name: "Instagram",
            Type: TypeSocialMedia.Instagram
        },
        {
            Id: "tiktok001",
            Name: "TikTok",
            Type: TypeSocialMedia.TikTok
        },
        {
            Id: "facebook001",
            Name: "Facebook",
            Type: TypeSocialMedia.Facebook
        }
    ]
    const socialMediaProvider: SocialMediaOptionProvider = {
        Items: socialMediasCreated,
        Options: socialMediaOptions,
        HandleAdd: handleCreateSocialMedia,
        HandleDelete: handleDeleteSocialMedia
    }


    const handleSiteSelected = (type: TypeSiteSelected, isSelected: boolean) => {
        let newList = typeSiteSelected.map(item => {
            if (item.Type == type) return {...item, IsSelected: isSelected}
            else return {...item, IsSelected: false}
        })
        setTypeSiteSelected(newList)
    }
    const handleInputs = (e, type: TypeInputsCreateSite) => {
        if (type == TypeInputsCreateSite.Name) setName(e.target.value)
        else if (type == TypeInputsCreateSite.Title) setTitle(e.target.value)
        else if (type == TypeInputsCreateSite.Description) setDescription(e.target.value)
        else if (type == TypeInputsCreateSite.Email) setEmail(e.target.value)
        else if (type == TypeInputsCreateSite.Whatsapp) setWhatsapp(e.target.value)
        else if (type == TypeInputsCreateSite.Website) setWebsite(e.target.value)
        else if (type == TypeInputsCreateSite.Instagram) setInstagram(e.target.value)
        else if (type == TypeInputsCreateSite.TikTok) setTikTok(e.target.value)
        else setFacebook(e.target.value)
    }
    const handleSteps = (num: number) => {
        if (num == 1) updateStep(num)
        else {
            stepsCreateSite.forEach(item => {
                if (item.NumberStep == (num - 1)) {
                    item.State && updateStep(num)
                }
            })
        }
    }

    function updateStep(num: number) {
        let newList = stepsCreateSite.map(item => {
            if (item.NumberStep == num) return {...item, IsStep: true}
            else return {...item, IsStep: false}
        })
        setStepsCreateSite(newList)
    }

    function updateStatesSteps(numStep: number, state: boolean) {
        let newList = stepsCreateSite.map(item => {
            if (item.NumberStep == numStep) return {...item, State: state}
            else return {...item}
        })
        setStepsCreateSite(newList)
    }

    useEffect(() => {
        let control = false
        typeSiteSelected.forEach(item => {
            if (item.IsSelected) control = true
            updateStatesSteps(2, control)
        })

    }, [typeSiteSelected])
    useEffect(() => {
        let control = true
        if (name == stringEmpty || title == stringEmpty || description == stringEmpty || email == stringEmpty) control = false
        updateStatesSteps(1, control)

    }, [name, title, description, email])

    const providerMyBusiness: MyBusinessProviderProp = {
        ListInputs: listInputs,
        ListContact: listContact,
        HandleInput: handleInputs,
        IsAllCampusDone: false,
        ListSteps: stepsCreateSite,
        TypeSites: typeSiteSelected,
        HandleSelectTypeSite: handleSiteSelected,
        NavTabs: handleSteps,
        IsStepOneDone: stepsCreateSite[0].State,
        IsStepTwoDone: stepsCreateSite[1].State
    }

    return (
        <CreateSiteContext.Provider value={providerMyBusiness}>
            <SocialMediaOptionsContext.Provider value={socialMediaProvider}>
                {children}
            </SocialMediaOptionsContext.Provider>
        </CreateSiteContext.Provider>
    )
}