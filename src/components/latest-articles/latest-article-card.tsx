import React from "react";
import { Grid, Card, Box, Divider } from "@mui/material";
import { TextWrap01, TextWrap02, TextWrap03 } from "../article/article.styled";
import ReactionButtons from "../add-reaction";
import useMediaQuery from "../../hooks/use-media-query";
import { useNavigate } from "react-router-dom";
import { AllReactions } from "../all-reactions/all-reactions";

const LatestArticleCard = (props: any) => {
  const { post } = props;
  const { id } = post;
  let edit = post?.createdAt === post?.updatedAt ? "" : "Updated";
  let date = new Date(post.updatedAt);
  const formattedDate = date.toLocaleDateString().split("/").join("-");
  let history = useNavigate();

  const { isMobile } = useMediaQuery();
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12} display="flex" key={id}>
        <Card
          style={{
            border: "none",
            boxShadow: "none",
            justifyContent: isMobile ? "center" : "flex",
          }}
        >
          <Box onClick={() => history(`/articles/${id}`)}>
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
          </Box>
          <AllReactions post={post} />
          <Grid item xs={12} sm={12} md={12} lg={12} sx={{ pt: 2 }}>
            <Divider sx={{ borderBottomWidth: 2 }} />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} sx={{ mt: 3 }}>
            <ReactionButtons post={post} key={post.id} />
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

export default LatestArticleCard;
