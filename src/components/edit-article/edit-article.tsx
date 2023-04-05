import React, { useState } from "react";
import { Grid, TextareaAutosize } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { actions } from "../../store/reducer";
import { PostButton } from "../new-post/new-post.styled";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";
import useMediaQuery from "../../hooks/use-media-query";
import { TextWrap2 } from "../registration/registration.styled";

const Edit = () => {
  const demoClientId = "client_T8syY4Z5DW378x72iosNSK";
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const existingPost = useAppSelector((state) => state.articles.article);
  var post = existingPost.find((item: any) => item.id === id);
  //Grammarly.init("client_T8syY4Z5DW378x72iosNSK");
  

  const [postInfo, setPostInfo] = useState({
    id: post?.id,
    title: post?.title,
    url: post?.url,
    description: post?.description,
    content: post?.content,
    date: post?.updatedAt,
  });
  const handleChange = (event: any) => {
    setPostInfo({ ...postInfo, [event.target.name]: event.target.value });
  };
  const dispatch = useAppDispatch();

  const handleSubmit = (event: any) => {
    event.preventDefault();

    dispatch(
      actions.postUpdate({
        id: id,
        title: postInfo.title,
        description: postInfo.description,
        content: postInfo.content,
      })
    );
    navigate("/home");
  };

  const { isMobile, isTablet, isDesktop } = useMediaQuery();
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      {/*<Grammarly clientId={demoClientId}>*/}
      <Grid
        container
        display="flex"
        sx={{
          mt: 20,
          px: isDesktop ? 55 : isTablet ? 7 : 3,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          sx={{
            height: isDesktop ? "750px" : isMobile ? "350px" : "600px",
            backgroundImage: `url(${postInfo.url})`,
            backgroundPosition: "center",

            backgroundSize: "cover",
          }}
        />
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          display="flex"
          justifyContent="center"
          direction="column"
        >
          <TextWrap2 style={{ fontWeight: 500 }}>Title</TextWrap2>

          <GrammarlyEditorPlugin>
            <TextareaAutosize
              style={{
                width: isDesktop ? "800px" : isMobile ? "350px" : "600px",
                borderStyle: "none",
                color: "#2F2E41",
                marginTop: 5,
                fontSize: isDesktop ? "16px" : isMobile ? "12px" : "16px",
                fontFamily: "Poppins",
              }}
              spellCheck="true"
              name="title"
              maxLength={100}
              onBlur={handleChange}
              defaultValue={postInfo.title}
              placeholder="title"
              required
            />
          </GrammarlyEditorPlugin>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          display="flex"
          justifyContent="center"
          direction="column"
        >
          <TextWrap2 style={{ fontWeight: 500 }}>Description</TextWrap2>

          <GrammarlyEditorPlugin>
            <TextareaAutosize
              style={{
                width: isDesktop ? "800px" : isMobile ? "350px" : "600px",
                borderStyle: "none",
                color: "#2F2E41",
                marginTop: 5,
                fontSize: isDesktop ? "16px" : isMobile ? "12px" : "16px",
                fontFamily: "Poppins",
              }}
              spellCheck="true"
              name="description"
              maxLength={150}
              onBlur={handleChange}
              defaultValue={postInfo.description}
              placeholder="Description"
              required
            />
          </GrammarlyEditorPlugin>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          display="flex"
          justifyContent="center"
          direction="column"
        >
          <TextWrap2 style={{ fontWeight: 600 }}>Content</TextWrap2>
          <GrammarlyEditorPlugin clientId={demoClientId}>
            <TextareaAutosize
              style={{
                width: isDesktop ? "800px" : isMobile ? "350px" : "600px",
                borderStyle: "none",
                color: "#2F2E41",
                marginTop: 5,
                fontSize: isDesktop ? "16px" : isMobile ? "12px" : "16px",
                fontFamily: "Poppins",
              }}
              spellCheck="true"
              name="content"
              onBlur={handleChange}
              defaultValue={postInfo.content}
              placeholder="Content"
              required
            />
          </GrammarlyEditorPlugin>
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
          <PostButton style={{ marginBottom: 50 }}>Post</PostButton>
        </Grid>
      </Grid>
      {/*</Grammarly>*/}
    </form>
  );
};

export default Edit;
