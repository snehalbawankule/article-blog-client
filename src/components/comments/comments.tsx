import { Grid, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { CommentCard } from "./comment";
import { CommentsBox } from "./comments.styled";
import useMediaQuery from "../../hooks/use-media-query";
import { Comment } from "./new-commet";
import { Reply } from "../reply/reply";
import { useAppSelector } from "../../hooks/hooks";
export const Comments = () => {
  const { isDesktop, isMobile, isTablet } = useMediaQuery();

  const { id } = useParams();
  const existingPost = useAppSelector((state) => state.articles.article);
  var post = existingPost.find((item: any) => item.id === id);

  const filteredArray = post?.comments?.filter(
    (obj: any) => obj.isReply === false
  );
  
  return (
    <Grid container display="flex" justifyContent="center">
      <Box
        sx={{
          display: isDesktop ? "flex" : isTablet ? "flex" : "none",
          marginTop: isMobile ? "80px" : "40px",
        }}
      >
        <Comment post={post?.id} />
      </Box>
      <CommentsBox
        style={{
          marginTop: isDesktop ? "20px" : isMobile ? "90px" : "30px",
          paddingLeft: isDesktop ? "20px" : isMobile ? "10px" : "30px",
          paddingRight: isDesktop ? "20px" : isMobile ? "10px" : "30px",
        }}
      >
        {filteredArray?.map((items: any, index: any) => {
          return (
            <>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                display="flex"
                key={index}
              >
                <CommentCard post={items} />
              </Grid>
              <Reply commentId={items.commentId} />
            </>
          );
        })}
      </CommentsBox>
      <Box sx={{ flexGrow: 1, display: isMobile ? "flex" : "none" }}>
        <Grid
          container
          direction="row"
          sx={{
            marginTop: isDesktop ? "2px" : isMobile ? "40px" : "5px",
            mx: 2,
            marginBottom: 5,
          }}
        >
          <Comment post={post?.id} />
        </Grid>
      </Box>
    </Grid>
  );
};
