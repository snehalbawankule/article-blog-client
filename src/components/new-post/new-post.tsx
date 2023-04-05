import { NewArticle, PostButton, NewPostInput } from "./new-post.styled";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { actions } from "../../store/reducer";
import useMediaQuery from "../../hooks/use-media-query";
import { default as textwrap } from "../../store/textwrap/textwrap.json";
import { useAppDispatch } from "../../hooks/hooks";

const NewPost = () => {
  const [postInfo, setPostInfo] = useState({
    id: "",
    date: "",
    title: "",
    url: "",
    description: "",
    content: "",
  });
  const dispatch = useAppDispatch();
  const { isDesktop, isMobile, isTablet } = useMediaQuery();
  const navigate = useNavigate();
  const handleChange = (event: any) => {
    setPostInfo({ ...postInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const newArticle = {
      title: postInfo.title,
      description: postInfo.description,
      content: postInfo.content,
      url: postInfo.url,
    };

    dispatch(actions.addNewArticle(newArticle));
    navigate("/home");
  };

  return (
    <Grid
      container
      display="flex"
      sx={{
        pt: isDesktop ? 10 : isTablet ? 5 : 3,
        mt: 2,
        ml: 0,
        justifyContent: "center",
      }}
      spacing={5}
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        display="flex"
        justifyContent="center"
      >
        <NewArticle>{textwrap.PostNewArticle}</NewArticle>
      </Grid>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <Grid item xs={12} sm={12} md={12} lg={12} display="flex">
          <NewPostInput
            style={{ marginTop: 50 }}
            type="text"
            name="title"
            onBlur={handleChange}
            defaultValue={postInfo.title}
            placeholder="Article title"
            required
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} display="flex">
          <NewPostInput
            type="text"
            name="url"
            onBlur={handleChange}
            defaultValue={postInfo.url}
            placeholder="image url"
            required
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} display="flex">
          <NewPostInput
            type="text"
            name="description"
            onBlur={handleChange}
            defaultValue={postInfo.description}
            placeholder="Article description"
            required
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} display="flex">
          <NewPostInput
            type="text"
            name="content"
            onBlur={handleChange}
            defaultValue={postInfo.content}
            placeholder="Article content"
            required
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          display="flex"
          sx={{ justifyContent: isMobile ? "center" : "" }}
        >
          <PostButton>{textwrap.Post}</PostButton>
        </Grid>
      </form>
    </Grid>
  );
};
export default NewPost;
