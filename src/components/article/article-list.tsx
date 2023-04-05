import React from "react";
import { Grid } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { useEffect } from "react";
import { addArticle } from "../../store/services";
import useMediaQuery from "../../hooks/use-media-query";
import ArticleCard from "./article-card";

const ArticleList = () => {
  const { isDesktop, isTablet } = useMediaQuery();
  const articles = useAppSelector((state) => state.articles.article);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (articles.length < 2) {
      dispatch(addArticle());
    }
  }, [dispatch, articles.length]);

  return (
    <Grid
      container
      sx={{ p: isDesktop ? 10 : isTablet ? 5 : 3, mt: 5 }}
      spacing={5}
    >
      <>
        {articles.map((post: any) => {
          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={4}
              display="flex"
              key={post.id}
            >
              <ArticleCard post={post} />
            </Grid>
          );
        })}
      </>
    </Grid>
  );
};

export default ArticleList;
