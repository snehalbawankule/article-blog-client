import React from "react";
import { Divider, Grid } from "@mui/material";
import useMediaQuery from "../../hooks/use-media-query";
import Footer from "../footer/footer";
import LatestArticles from "../latest-articles";
import TechUpdate from "../tech-update/tech-update";
import Poster from "../poster/poster";

const Home = () => {
  const { isMobile, isDesktop } = useMediaQuery();

  return (
    <>
      <Grid container display="flex">
        <Poster />
        <LatestArticles />
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          sx={{ px: isMobile ? 3 : isDesktop ? 10 : 5 }}
        >
          <Divider sx={{ borderBottomWidth: 2 }} />
        </Grid>
        <TechUpdate />
        <Footer />
      </Grid>
    </>
  );
};

export default Home;
