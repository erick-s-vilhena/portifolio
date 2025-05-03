import { createContext, useState } from "react"

export const HabilidadeContext = createContext({})

export default function HabilidadeContextProvider({ children }){
    const [habilidade, setHabilidade] = useState(null);

    return(
        <HabilidadeContext.Provider value={{ habilidade, setHabilidade}}>
            {children}
        </HabilidadeContext.Provider>
    )
}