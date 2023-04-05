import React from "react";
import { Grid, Card, Box } from "@mui/material";
import {
  TextWrap01,
  TextWrap02,
  TextWrap03,
  ReadButton,
} from "../article/article.styled";
import { Link } from "react-router-dom";
import { AllReactions } from "../all-reactions/all-reactions";
import ReactionButtons from "../add-reaction";
import { default as textwrap } from "../../store/textwrap/textwrap.json";
import useMediaQuery from "../../hooks/use-media-query";

const TechArticleCard = (props: any) => {
  const { post } = props;
  const { isMobile, isDesktop } = useMediaQuery();
  let edit = post?.createdAt === post?.updatedAt ? "" : "Updated";
  let date = new Date(post.updatedAt);
  const formattedDate = date.toLocaleDateString().split("/").join("-");

  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12} display="flex" key={post.id}>
        <Card
          style={{
            border: "none",
            boxShadow: "none",
            justifyContent: isMobile ? "center" : "flex",
          }}
        >
          <Box
            style={{
              height: "320px",
              backgroundImage: `url(${post.url})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
          <Grid container direction="row">
            <Grid item xs={10} sm={10} md={10} lg={10}>
              <TextWrap01>{formattedDate}</TextWrap01>
            </Grid>
            <Grid item xs={2} sm={2} md={2} lg={2}>
              <TextWrap01>{edit}</TextWrap01>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} justifyContent="center">
            <TextWrap02
              style={{
                height: 80,
              }}
            >
              {post.title}
            </TextWrap02>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            display="flex"
            justifyContent="center"
          >
            <TextWrap03>{post.description}</TextWrap03>
          </Grid>
          <AllReactions post={post} />
          <Grid container sx={{ mt: isDesktop ? 4 : 3 }}>
            <Grid item xs={3} sm={3} md={3} lg={3} display="contents">
              <ReadButton>
                <Link
                  style={{
                    color: "white",
                    textDecoration: "none",
                  }}
                  to={`/tech-article/${post.id}`}
                >
                  {textwrap.readMore}
                </Link>
              </ReadButton>
            </Grid>
            <Grid item xs={9} sm={9} md={9} lg={9}>
              <ReactionButtons style={{ paddingLeft: 20 }} post={post} />
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

export default TechArticleCard;
