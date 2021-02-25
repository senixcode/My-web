import { ILenguage } from "../interface/Lenguages";

export const getAboutMe = (lenguage: string = "en"):string => {
  const routes: ILenguage<string> = {
    en: "I am a self-taught programmer, poet and basketball player.",
    es: "Soy un programador autodidacta, poeta y jugador de basquet."
  };
  return lenguage === "en" ? routes.en : routes.es;
}; 