import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Tooltip from "@material-ui/core/Tooltip";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CallMade from "@material-ui/icons/CallMade";
import Link from "@material-ui/core/Link";
import { Row, Column, Item } from "@mui-treasury/components/flex";
import { useSizedIconButtonStyles } from "@mui-treasury/styles/iconButton/sized";
// import { Autorenew } from "@material-ui/icons";
import { Hidden } from "@material-ui/core";
const validateDarkMode = (white, black) =>
  localStorage.getItem("darkMode") === "true" ? white : black;
const StyledTooltip = withStyles({
  tooltip: {
    marginTop: "0.2rem",
    backgroundColor: "rgba(0,0,0,0.72)",
    color: "#fff",
  },
})(Tooltip);

const useBasicProfileStyles = makeStyles(({ palette }) => ({
  avatar: {
    borderRadius: 8,
    backgroundColor: validateDarkMode("#9AC0F3", "#495869"),
  },
  overline: {
    fontSize: 10,
    textTransform: "uppercase",
    letterSpacing: 1,
    color: validateDarkMode("#83B4F6", "#8D9CAD"),
  },
  name: {
    fontSize: 14,
    fontWeight: 500,
    color: validateDarkMode("#9AC0F3", "#495869"),
  },
}));

const BasicProfile = (props) => {
  const styles = useBasicProfileStyles();
  return (
    <Row {...props}>
      <Item>
        <Avatar className={styles.avatar}>S</Avatar>
      </Item>
      <Item position={"middle"} pl={{ sm: 0.5, lg: 0.5 }}>
        <Typography className={styles.overline}>Creador</Typography>
        <Typography className={styles.name}>SenixCode</Typography>
      </Item>
    </Row>
  );
};

const useCardHeaderStyles = makeStyles(() => ({
  root: { paddingBottom: 0 },
  title: {
    fontSize: "1.25rem",
    color: validateDarkMode("#9AC0F3", "#122740"),
  },
  subheader: {
    fontSize: "0.875rem",
    color: validateDarkMode("#fff", "#495869"),
  },
}));

const CardHeader = (props) => {
  const styles = useCardHeaderStyles();
  const iconBtnStyles = useSizedIconButtonStyles({ padding: 8, childSize: 20 });
  return (
    <Row {...props}>
      <Item position={"middle"}>
        <Typography className={styles.title}>
          <Link
            color="inherit"
            href="https://lightweight-ecommerce-template.netlify.app/"
            target="_blank"
          >
            <b>lightweight ecommerce template</b>
          </Link>
        </Typography>
        <Typography className={styles.subheader}>
          React/hooks, MaterialUI, localStorage, git/github, netlify
        </Typography>
      </Item>
      <Item position={"right"} mr={-0.5}>
        <StyledTooltip title={"See details"}>
          <Link
            target="_blank"
            href="https://github.com/senixcode/lightweight-ecommerce-template"
          >
            <IconButton classes={iconBtnStyles}>
              <CallMade />
            </IconButton>
          </Link>
        </StyledTooltip>
      </Item>
    </Row>
  );
};

const useStyles = makeStyles(() => ({
  card: {
    border: "1.5px solid",
    borderColor: validateDarkMode("#122740", "#E7EDF3"),
    borderRadius: 16,
    transition: "0.4s",
    "&:hover": {
      borderColor: validateDarkMode("#9AC0F3", "#122740"),
    },
  },
}));
const ImageProyect = (props) => {
  return (
    <Link color="inherit" href={props.href} target="_blank">
      <img
        alt={props.alt}
        src={props.src}
        style={{
          maxWidth: "100%",
          height: "auto",
          display: "block",
          borderRadius: "8px",
        }}
      ></img>
    </Link>
  );
};
const RenderMovil = ({ styles, gap }) => (
  <Hidden smUp>
    <Grid item xs={12} sm={4} md={3}>
      <Column
        className={styles.card}
        p={{ xs: 0.5, sm: 0.75, lg: 1 }}
        gap={gap}
      >
        <CardHeader />
        <Item>
          <Box minHeight={200} bgcolor={"#F4F7FA"} borderRadius={8}>
            <ImageProyect
              alt="proyect lightweight-ecommerce-template"
              src="https://i.imgur.com/tdKyRZ0.png"
              href="https://lightweight-ecommerce-template.netlify.app/"
            />
          </Box>
        </Item>
        <BasicProfile />
      </Column>
    </Grid>
  </Hidden>
);
export const ShowcaseCardDemo = React.memo(function ShowcaseCard() {
  const styles = useStyles();
  const gap = { xs: 1, sm: 1.5, lg: 2 };
  return (
    <Grid
      container
      direction="row"
      justify={"center"}
      style={{ marginTop: "1em" }}
    >
      <RenderMovil styles={styles} gap={gap} />
      <Hidden xsDown>
        <Grid item xs={12} sm={10} lg={12}>
          <Row className={styles.card} p={{ xs: 0, sm: 0.75, lg: 1 }} gap={gap}>
            <Item grow>
              <Box minHeight={200} bgcolor={"#D5D8DC"} borderRadius={8}>
                <ImageProyect
                  alt="proyect lightweight-ecommerce-template"
                  src="https://i.imgur.com/tdKyRZ0.png"
                  href="https://lightweight-ecommerce-template.netlify.app/"
                />
              </Box>
            </Item>
            <Column>
              <CardHeader />
              <BasicProfile position={"bottom"} />
            </Column>
          </Row>
        </Grid>
      </Hidden>
    </Grid>
  );
});
export default ShowcaseCardDemo;
