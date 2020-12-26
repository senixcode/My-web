import React from "react";
import { Box, Link, Typography } from "@material-ui/core";
import { TitleCustom } from "../components/atoms/TitleCustom";
export const AboutMe = () => {
  console.log("log", new Date().getTimezoneOffset() / 60);
  return (
    <>
      <TitleCustom menssage="Sobre mi" />

      <Typography component={"span"} variant={"body2"}>
        <Box
          fontSize={{
            xs: "h6.fontSize",
            sm: "h5.fontSize",
            md: "h4.fontSize",
          }}
        >
          Comenzare contando mi estado actual de forma resumida, después de mi
          ultimo trabajo como desarrollador full stack, me di un tiempo corto,
          para aprender mas de linux, me instale arch linux con
          <Link
            href="http://www.qtile.org/"
            target="_blank"
            rel="noopener"
            color="inherit"
          >
            <strong> Qtile </strong>
          </Link>
          , hecho y configurado en python, luego me pase a docker, configurando
          docker con nodejs, en
          <Link
            href="https://www.digitalocean.com/"
            target="_blank"
            rel="noopener"
            color="inherit"
          >
            {" "}
            digitalocean{", "}
          </Link>{" "}
          configure y instale docker con
          <strong> terraform y cloud init</strong> para automatizarlo, luego
          reforcé y aprendí sobre
          <strong> react hooks </strong> y un poco de test. Para finalizar me
          gustaría compartir mi filosofia de vida, "disfrutar del proceso".
        </Box>
      </Typography>
    </>
  );
};
