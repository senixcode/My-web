import { useEffect, useState } from "react";
import { IMQuery } from "../interface/Mquery";
import ThemeStyle from "../../styles/theme"
import { getNumber } from "../helper/getNumber";

export function useMediaQuery(){
  const isBrowser = (typeof window !== "undefined");
    const [mQuery, setMQuery] = useState<IMQuery>({
  matches: isBrowser ? window.innerWidth > getNumber(ThemeStyle.screen.md) ? true : false :false,
});
  useEffect(() => {
  let mediaQuery = isBrowser && window.matchMedia(`(min-width: ${ThemeStyle.screen.md})`);
    mediaQuery.addListener(setMQuery);

    return () => mediaQuery.removeListener(setMQuery);
  }, []);
  return {mQuery}
}