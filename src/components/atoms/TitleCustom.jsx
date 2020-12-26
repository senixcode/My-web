import React from "react";
import { Box, Divider, Typography } from "@material-ui/core";

export const TitleCustom = ({ menssage }) => {
  return (
    <>
      <Typography component={"span"} variant={"body1"}>
        <Box
          fontSize={{
            xs: "h5.fontSize",
            sm: "h4.fontSize",
            md: "h3.fontSize",
          }}
        >
          {menssage}
        </Box>
      </Typography>

      <Divider />
    </>
  );
};
