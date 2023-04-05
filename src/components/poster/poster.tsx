import React from "react";
import picture from "../../assets/images/picture.png";
import { Grid } from "@mui/material";
import { default as textwrap } from "../../store/textwrap/textwrap.json";
import { Button, TextWrap04, TextWrap05 } from "../article/article.styled";
import useMediaQuery from "../../hooks/use-media-query";
const Poster = () => {
  const { isMobile, isDesktop } = useMediaQuery();

  return (
    <Grid container display="flex" sx={{ mt: 10 }}>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        style={{
          height: isDesktop ? "750px" : isMobile ? "350px" : "600px",
          display: "flex-column",
          backgroundImage: `url(${picture})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Grid
          item
          xs={10}
          sm={12}
          md={7}
          lg={6}
          sx={{ pl: isDesktop ? 10 : 3, mt: isDesktop ? 20 : 10 }}
        >
          <TextWrap04>{textwrap.homeTitle}</TextWrap04>
        </Grid>
        <Grid
          item
          xs={11}
          sm={10}
          md={7}
          lg={7}
          sx={{ pl: isDesktop ? 10 : 3 }}
        >
          <TextWrap05>{textwrap.homeDescription}</TextWrap05>
        </Grid>
        <Grid
          item
          xs={6}
          sm={6}
          md={4}
          lg={4}
          sx={{ pl: isDesktop ? 10 : 3, mt: isDesktop ? 10 : 3 }}
        >
          <Button>{textwrap.readMore}</Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Poster;
