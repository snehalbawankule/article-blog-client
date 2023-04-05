import React, { useRef } from "react";
import { Grid, Card, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import {
  TextWrap02,
  TextWrap03,
} from "../latest-articles/latest-article.styled";
import { AllReactions } from "../all-reactions/all-reactions";
import { Comments } from "../comments/comments";
import useMediaQuery from "../../hooks/use-media-query";
import { useAppSelector } from "../../hooks/hooks";
const TechArticle = () => {
  const { id } = useParams();
  const existingPost = useAppSelector((state) => state.articles.article);
  var post = existingPost.find((item: any) => item.id === id);

  const textRef = useRef<HTMLDivElement>(null);

  function handleSelection() {
    const selectedText = window.getSelection()?.toString();
    if (selectedText && textRef.current) {
      const range = window.getSelection()!.getRangeAt(0);
      const span = document.createElement("span");
      span.className = "highlight";
      range.surroundContents(span);
    }
  }

  const { isMobile, isTablet, isDesktop } = useMediaQuery();
  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={12}
      lg={12}
      display="flex"
      sx={{
        mt: isDesktop ? 20 : isTablet ? 12 : 10,
        px: isDesktop ? 10 : isTablet ? 7 : 4,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card
        style={{
          border: "none",
          boxShadow: "none",
          justifyContent: isMobile ? "center" : "flex",
        }}
      >
        <Box>
          <Box
            style={{
              alignContent: "center",
              height: isMobile ? "300px" : isDesktop ? "1000px" : "616px",
              backgroundImage: `url(${post?.url})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            key={id}
          />
          <Grid item xs={12} sm={12} md={12} lg={12} justifyContent="center">
            <TextWrap02 ref={textRef} onMouseUp={handleSelection}>
              {post?.title}
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
            <TextWrap03 ref={textRef} onMouseUp={handleSelection}>
              {post?.description}
            </TextWrap03>
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
            <TextWrap03 ref={textRef} onMouseUp={handleSelection}>
              {post?.content}
            </TextWrap03>
          </Grid>
          <AllReactions post={post} />
          <Comments />
        </Box>
      </Card>
    </Grid>
  );
};
export default TechArticle;
