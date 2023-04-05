import React from "react";
import { Grid } from "@mui/material";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import useMediaQuery from "../../hooks/use-media-query";
import LatestArticleCard from "./latest-article-card";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { LoadMoreButton, Article } from "../article/article.styled";
import { default as textwrap } from "../../store/textwrap/textwrap.json";
import { addLatestArticle } from "../../store/services";

const LatestArticles = () => {
  const { isDesktop, isTablet } = useMediaQuery();
  const dispatch = useAppDispatch();
  const articles = useAppSelector((state) => state.articles.article);
  useEffect(() => {
    if (articles.length) {
      dispatch(addLatestArticle());
    }
  }, [articles.length, dispatch]);
  const art = articles.slice(0, 6);
  return (
    <Grid container sx={{ p: isDesktop ? 10 : isTablet ? 5 : 3 }} spacing={5}>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Article>{textwrap.latestArticle}</Article>
      </Grid>
      {art.map((post: any, index: any) => {
        return (
          <>
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={4}
              display="flex"
              key={post.id}
            >
              <LatestArticleCard post={post} />
            </Grid>
          </>
        );
      })}
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <LoadMoreButton>
          <Link
            to={`/articles`}
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            {textwrap.LoadMoreArticles}
          </Link>
        </LoadMoreButton>
      </Grid>
    </Grid>
  );
};

export default LatestArticles;
