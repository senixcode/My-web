import { translater } from "../helper";
import { ITitelAboutMe } from "../types";

export const getTitleAboutMe = (currentLanguagee: string): ITitelAboutMe => ({
    first: translater(currentLanguagee, { es: 'Programador autodidacta "Full Stack JavaScript"', en: 'Self-taught "Full Stack JavaScript" programmer,' }),
    selfWritten: [
        translater(currentLanguagee, { es: "con experiencia en startups,", en: "with experience in startups," }),
        translater(currentLanguagee, { es: "nuevos conocimientos Docker Nextjs Nestjs Graphql,", en: "new knowledge Docker Nextjs Nestjs Graphql," }),
        translater(currentLanguagee, { es: "buscando nuevos desafíos.", en: "looking for new challenges." }),
    ]
})