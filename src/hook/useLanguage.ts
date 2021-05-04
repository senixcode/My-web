import { useRouter } from "next/router";
import { useEffect, useState } from "react";
enum Language {
    EN = "en",
    ES = "es"
}

interface IcontentDisplay{
seeMore: string;
seeLess: string;
}

export const useLanguage = () => {
 let { locale } = useRouter();
 const translater = ({es,en}) => locale === Language.ES ? es : en

 const [contentDisplayCardProject, setContentDisplayCardProject] = useState<IcontentDisplay>({
     seeMore:translater({es: "...ver mas", en:"...see more"}),
     seeLess:translater({es: "ver menos", en:"see less"}),
 });
 
  useEffect(() => {
    if (locale) {
      setContentDisplayCardProject({
     seeMore:translater({es: "...ver mas", en:"...see more"}),
     seeLess:translater({es: "ver menos", en:"see less"}),
 })
    }
  }, [locale]);

  return {
      locale,
      contentDisplayCardProject
  }
}