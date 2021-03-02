import {IHeaderContext,HeaderContext} from '../contexts/HeaderContext'
import { useState} from 'react'

export function ContextWrapper({children}){
    const [headerShow,setHeaderShow] = useState(true)
    const value:IHeaderContext = {headerShow,setHeaderShow}
    return(
        <HeaderContext.Provider value={value}>
            {children}
        </HeaderContext.Provider>
    )
}
