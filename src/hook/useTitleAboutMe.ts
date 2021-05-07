import { useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { TypedOptions } from "typed.js"
import { GET_ABOUTME } from "../graphql/querys/aboutMe"
import { getOptions, titleConvertOptions } from "../helper/typedjs"
import { IAboutMe } from "../interface/aboutMe"

interface Idata {
    state: boolean
    first: string
    surplus: Array<string>
}
export default function useTitleAboutMe() {
    const { locale } = useRouter()
    const [data, setData] = useState<Idata>({
        state: false,
        first: "",
        surplus: [],
    })
    const [options, setOptions] = useState<TypedOptions>({})
    const LANGUAGE = (locale as string).toLocaleUpperCase()
    const getAboutMe = useQuery(GET_ABOUTME, {
        variables: { param: LANGUAGE },
    })
    useEffect(() => {
        if (!getAboutMe.loading && getAboutMe.data.data) {
            const { name } = getAboutMe.data.data[0] as IAboutMe
            const { first, surplus } = titleConvertOptions(name)
            setData({ state: true, first, surplus })
            const options: TypedOptions = getOptions(surplus)
            setOptions(options)
        }
    }, [getAboutMe.loading, getAboutMe.data])

    return { getAboutMe, data, options, locale }
}