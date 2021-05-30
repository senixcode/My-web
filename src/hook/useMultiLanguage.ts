import { useRouter } from "next/router"
import { useEffect, useReducer } from "react"
import { ACTIONS, initialState, reducer } from "./language/reducer"
import { TypeReducerMultiLanguage } from "./language/types"

export const useMultiLanguage = (type: TypeReducerMultiLanguage) => {
  const { locale: currentLanguage } = useRouter()
  const [state, dispatch] = useReducer(reducer, initialState(currentLanguage))
  useEffect(() => ACTIONS(type, currentLanguage, dispatch)[type](), [
    currentLanguage,
  ])
  return state
}
