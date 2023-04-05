import React from "react";
import { Grid, Divider } from "@mui/material";
import TechArticleCard from "./tech-article-card";
import { useEffect } from "react";
import { Article } from "../article/article.styled";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { default as textwrap } from "../../store/textwrap/textwrap.json";
import useMediaQuery from "../../hooks/use-media-query";
import { addLatestArticle } from "../../store/services";

const TechUpdate = () => {
  const { isDesktop, isTablet } = useMediaQuery();
  const dispatch = useAppDispatch();
  const articles = useAppSelector((state) => state.articles.article);
  useEffect(() => {
    if (articles.length < 2) {
      dispatch(addLatestArticle());
    }
  }, [articles.length, dispatch]);
  const art = articles.slice(6, 12);
  return (
    <Grid
      container
      sx={{ px: isDesktop ? 10 : isTablet ? 5 : 3, mb: 3 }}
      spacing={5}
    >
      <Grid item xs={12} sm={12} md={12} lg={12} style={{ paddingTop: 65 }}>
        <Article style={{ marginTop: 28 }}>{textwrap.techUpdate}</Article>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} style={{ paddingTop: 28 }}>
        <Divider sx={{ borderBottomWidth: 2 }} />
      </Grid>
      {art &&
        art.map((post: any, index: any) => {
          return (
            <Grid item xs={12} sm={6} md={6} lg={4} display="flex" key={index}>
              <TechArticleCard post={post} />
            </Grid>
          );
        })}
    </Grid>
  );
};

export default TechUpdate;
