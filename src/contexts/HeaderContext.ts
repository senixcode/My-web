import {createContext, useContext} from 'react'
export interface IHeaderContext {
    headerShow: boolean;
    setHeaderShow: (h:boolean) => void;
}

export const HeaderContext = createContext<IHeaderContext>({
    headerShow:true,
    setHeaderShow:() => {}
})
export const useHeaderContext = () => useContext(HeaderContext)