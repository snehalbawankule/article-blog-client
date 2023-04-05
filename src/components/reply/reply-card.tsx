import { Grid, Box } from "@mui/material";
import { TextWrap04 } from "../add-reaction/reaction.styled";
import { ReplyButton } from "./reply-button";
export const ReplyCard = (props: any) => {
  const { post } = props;
  return (
    <Grid
      container
      direction="row"
      style={{ paddingTop: 10 }}
      key={post.commentId}
    >
      <Box
        style={{
          height: "25px",
          width: "25px",
          backgroundImage: `url(${post?.userProfile})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          borderRadius: 50,
        }}
      />
      <TextWrap04 style={{ paddingLeft: 10 }}>{post?.userName}</TextWrap04>

      <TextWrap04 style={{ paddingLeft: 10 }}>{post.date}</TextWrap04>

      <Grid item xs={12} sm={12} md={12} lg={12}>
        <TextWrap04>{post.comment}</TextWrap04>
      </Grid>
      <ReplyButton commentId={post.commentId} />
    </Grid>
  );
};
